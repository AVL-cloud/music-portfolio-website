import type { Metadata } from 'next'
import { Suspense } from 'react'
import { LoginClient } from './LoginClient'

export const metadata: Metadata = {
  title: 'Sign In — Sonic Wave Studio',
}

export default function LoginPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <Suspense>
        <LoginClient />
      </Suspense>
    </main>
  )
}
