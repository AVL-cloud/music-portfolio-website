'use client'
import { redirect } from 'next/navigation'
import { useAdmin } from '@/contexts/AdminContext'
import { PageHeader } from '@/components/layout/PageShell'
import { TranslationsClient } from './TranslationsClient'

export default function TranslationsPage() {
  const { isAdmin } = useAdmin()
  if (!isAdmin) redirect('/')

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <PageHeader
        title="Translations"
        description="Edit the English UI strings. Click any value to edit it. Changes are saved instantly and reflected site-wide."
      />
      <TranslationsClient />
    </main>
  )
}
