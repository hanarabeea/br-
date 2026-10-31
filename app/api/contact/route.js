import { addLead } from '@/lib/leads';
import { notifyLead } from '@/lib/mail';

export const runtime = 'nodejs';

// naive per-IP throttle: 5 briefs / 10 min (in-memory, resets on restart)
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 600_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '');

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'local';
  if (limited(ip)) return Response.json({ ok: false, error: 'Too many requests' }, { status: 429 });

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const message = clean(body.message, 1000);
  if (!message) return Response.json({ ok: false, error: 'Message is required' }, { status: 400 });

  const lead = await addLead({
    name: clean(body.name, 60),
    services: Array.isArray(body.services) ? body.services.slice(0, 10).map((s) => clean(s, 60)).filter(Boolean) : [],
    message,
    lang: body.lang === 'ar' ? 'ar' : 'en',
  });

  notifyLead(lead).catch((e) => console.error('lead email failed:', e.message));

  return Response.json({ ok: true, id: lead.id }, { status: 201 });
}
