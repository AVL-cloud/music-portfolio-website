import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth/session'
import { listContactRequestsForUser } from '@/lib/contact/store'
import { ContactLogList } from './ContactLogList'

export const metadata: Metadata = {
  title: 'Contact log — Sonic Wave Studio',
}

export default async function ContactLogPage() {
  const session = await getSession()
  if (!session) redirect('/login?next=/preferences/contact-log')

  const requests = await listContactRequestsForUser(session.id)
  return <ContactLogList requests={requests} />
}
