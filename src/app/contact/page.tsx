import { PageShell, PageHeader } from '@/components/layout/PageShell'
import { ContactClient } from './ContactClient'

export default function ContactPage() {
  return (
    <PageShell narrow>
      <PageHeader
        title="Contact"
        description="Got a question, a collab idea, or just want to say hi? I read every message."
      />
      <ContactClient />
    </PageShell>
  )
}
