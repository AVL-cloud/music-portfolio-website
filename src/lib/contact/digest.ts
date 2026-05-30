// Regular (e.g. weekly) update email to every website admin.
// Reports how many contact requests came in over the past week and links to the
// admin "contact requests" page where they can review / answer / archive them.

import { getAdminEmails } from '@/lib/auth/user-store'
import { sendEmail } from '@/lib/email/send'
import { countContactRequestsSince, listContactRequests } from './store'

function baseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_BASE_URL ??
    'http://localhost:3000'
  )
}

export interface DigestResult {
  admins: string[]
  count: number
  openCount: number
  sent: number
}

// Sends the weekly digest to all admins. Returns a summary for logging / cron.
export async function sendAdminContactDigest(days = 7): Promise<DigestResult> {
  const admins = await getAdminEmails()
  const count = await countContactRequestsSince(days)
  const open = (await listContactRequests()).filter(r => r.status === 'open').length
  const link = `${baseUrl()}/admin/contact-requests`

  const subject = `Sonic Wave Studio — ${count} contact request${count === 1 ? '' : 's'} this week`
  const text =
    `Hi,\n\n` +
    `Here is your weekly Sonic Wave Studio summary.\n\n` +
    `• ${count} new contact request${count === 1 ? '' : 's'} in the past ${days} days\n` +
    `• ${open} still awaiting an answer\n\n` +
    `Review, answer, or archive them here:\n${link}\n\n` +
    `— Sonic Wave Studio`

  let sent = 0
  for (const to of admins) {
    try {
      await sendEmail({ to, subject, text })
      sent++
    } catch (err) {
      console.error(`Failed to send digest to ${to}:`, err)
    }
  }

  return { admins, count, openCount: open, sent }
}
