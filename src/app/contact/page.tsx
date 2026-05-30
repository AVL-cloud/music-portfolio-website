import { PageShell, PageHeader } from '@/components/layout/PageShell'
import { getSession } from '@/lib/auth/session'
import { ContactClient } from './ContactClient'

export default async function ContactPage() {
  const session = await getSession()

  return (
    <PageShell narrow>
      <PageHeader
        title="Contact"
        description="Got a question, a collab idea, or just want to say hi? I read every message."
      />
      <ContactClient
        defaultName={session?.username ?? ''}
        defaultEmail={session?.email ?? ''}
        isLoggedIn={!!session}
      />
    </PageShell>
  )
}
