import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth/session'
import { PreferencesClient } from './PreferencesClient'

export const metadata: Metadata = {
  title: 'Preferences — Sonic Wave Studio',
}

export default async function PreferencesPage() {
  const session = await getSession()
  if (!session) {
    redirect('/login?next=/preferences')
  }

  return (
    <PreferencesClient
      email={session.email}
      username={session.username ?? ''}
      role={session.role}
    />
  )
}
