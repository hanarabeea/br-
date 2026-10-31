import { listLeads } from '@/lib/leads';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req) {
  const token = process.env.ADMIN_TOKEN;
  if (!token || req.headers.get('authorization') !== `Bearer ${token}`) {
    return Response.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }
  return Response.json({ ok: true, leads: await listLeads() });
}
