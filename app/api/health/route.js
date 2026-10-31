export const runtime = 'nodejs';

export function GET() {
  return Response.json({ ok: true, service: 'br-marketing-agency', time: new Date().toISOString() });
}
