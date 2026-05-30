import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth/session'
import { PreferencesNav } from './PreferencesNav'

export default async function PreferencesLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  if (!session) redirect('/login?next=/preferences')

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-2xl font-semibold text-[var(--color-text)]">Your profile</h1>
      <PreferencesNav />
      <div className="pt-6">{children}</div>
    </main>
  )
}
