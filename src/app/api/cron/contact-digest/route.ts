import { type NextRequest, NextResponse } from 'next/server'
import { sendAdminContactDigest } from '@/lib/contact/digest'

// Weekly admin digest endpoint, meant to be hit by a scheduler.
//
// Protect it with CRON_SECRET: callers must send `Authorization: Bearer <secret>`
// (Cloudflare Cron Triggers / Vercel Cron / an external scheduler can do this).
// If CRON_SECRET is unset (local dev), the endpoint is open for convenience.
//
// TODO: wire a real schedule — e.g. a Cloudflare Cron Trigger in wrangler.toml:
//   [triggers]
//   crons = ["0 9 * * 1"]   # every Monday 09:00 UTC
// and forward it to this route (or call sendAdminContactDigest directly in the
// Worker's scheduled() handler).

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (secret) {
    const auth = req.headers.get('authorization')
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const result = await sendAdminContactDigest()
  return NextResponse.json({ ok: true, ...result })
}
