'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { getSession } from '@/lib/auth/session'
import { sendEmail } from '@/lib/email/send'
import {
  answerContactRequest,
  archiveContactRequest,
  createContactRequest,
  getContactRequest,
} from '@/lib/contact/store'
import { sendAdminContactDigest } from '@/lib/contact/digest'

export type ActionResult =
  | { success: true }
  | { success: false; error: string; field?: string }

// ── Public: submit a contact request ─────────────────────────────────────────

const ContactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120, 'Name is too long'),
  email: z.string().trim().email('Invalid email address'),
  message: z.string().trim().min(1, 'Message is required').max(5000, 'Message is too long'),
})

export async function submitContactRequestAction(formData: FormData): Promise<ActionResult> {
  const parsed = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })
  if (!parsed.success) {
    const issue = parsed.error.issues[0]
    return { success: false, error: issue.message, field: String(issue.path[0] ?? '') }
  }

  const session = await getSession()
  await createContactRequest({
    name: parsed.data.name,
    email: parsed.data.email,
    message: parsed.data.message,
    userId: session?.id,
  })

  revalidatePath('/contact')
  revalidatePath('/admin/contact-requests')
  return { success: true }
}

// ── Admin guard ──────────────────────────────────────────────────────────────

async function requireAdmin() {
  const session = await getSession()
  if (!session || session.role !== 'admin') return null
  return session
}

// ── Admin: answer a contact request ──────────────────────────────────────────

const AnswerSchema = z.object({
  id: z.string().min(1),
  answer: z.string().trim().min(1, 'Answer cannot be empty').max(5000, 'Answer is too long'),
})

export async function answerContactRequestAction(formData: FormData): Promise<ActionResult> {
  const admin = await requireAdmin()
  if (!admin) return { success: false, error: 'Not authorized' }

  const parsed = AnswerSchema.safeParse({
    id: formData.get('id'),
    answer: formData.get('answer'),
  })
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message, field: 'answer' }
  }

  const existing = await getContactRequest(parsed.data.id)
  if (!existing) return { success: false, error: 'Request not found' }
  if (existing.status === 'answered') {
    return { success: false, error: 'This request has already been answered' }
  }

  const updated = await answerContactRequest(parsed.data.id, parsed.data.answer, admin.email)

  // Notify the sender by email (members also see it in their account).
  if (updated) {
    await sendEmail({
      to: updated.email,
      subject: 'Re: your message to Sonic Wave Studio',
      text:
        `Hi ${updated.name},\n\n` +
        `You wrote:\n${updated.message}\n\n` +
        `Reply from Sonic Wave Studio:\n${updated.answer}\n\n` +
        `— Sonic Wave Studio`,
    })
  }

  revalidatePath('/admin/contact-requests')
  revalidatePath('/contact')
  return { success: true }
}

// ── Admin: archive a contact request ─────────────────────────────────────────

export async function archiveContactRequestAction(formData: FormData): Promise<ActionResult> {
  const admin = await requireAdmin()
  if (!admin) return { success: false, error: 'Not authorized' }

  const id = formData.get('id') as string
  if (!id) return { success: false, error: 'Missing request id' }

  await archiveContactRequest(id)
  revalidatePath('/admin/contact-requests')
  return { success: true }
}

// ── Admin: manually trigger the digest email ─────────────────────────────────

export async function sendDigestNowAction(): Promise<ActionResult> {
  const admin = await requireAdmin()
  if (!admin) return { success: false, error: 'Not authorized' }

  const result = await sendAdminContactDigest()
  return result.sent > 0
    ? { success: true }
    : { success: false, error: 'No admin recipients found' }
}
