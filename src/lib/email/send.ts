// Email abstraction. In development (or when no provider is configured) it logs
// the message to the server console. In production, wire a real provider below.
// TODO: integrate Resend / SendGrid / Cloudflare Email Workers.

export interface EmailMessage {
  to: string
  subject: string
  text: string
  html?: string
}

export async function sendEmail(msg: EmailMessage): Promise<void> {
  const provider = process.env.EMAIL_PROVIDER

  if (!provider) {
    // Dev fallback — no real email is sent.
    console.log(
      `\n📧  [email:dev] To: ${msg.to}\n    Subject: ${msg.subject}\n    ${msg.text.replace(/\n/g, '\n    ')}\n`,
    )
    return
  }

  // Example wiring for Resend (uncomment + set RESEND_API_KEY):
  // if (provider === 'resend') {
  //   await fetch('https://api.resend.com/emails', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       from: process.env.EMAIL_FROM ?? 'noreply@sonicwavestudio.com',
  //       to: msg.to,
  //       subject: msg.subject,
  //       text: msg.text,
  //       html: msg.html,
  //     }),
  //   })
  //   return
  // }

  throw new Error(`Unknown EMAIL_PROVIDER: ${provider}`)
}
