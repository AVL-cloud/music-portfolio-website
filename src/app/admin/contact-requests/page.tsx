import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth/session'
import { listContactRequests } from '@/lib/contact/store'
import { ContactRequestsClient } from './ContactRequestsClient'

export const metadata: Metadata = {
  title: 'Contact requests — Sonic Wave Studio',
}

export default async function ContactRequestsPage() {
  const session = await getSession()
  if (!session) redirect('/login?next=/admin/contact-requests')
  if (session.role !== 'admin') redirect('/')

  const requests = await listContactRequests({ includeArchived: true })

  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <ContactRequestsClient requests={requests} />
    </main>
  )
}
