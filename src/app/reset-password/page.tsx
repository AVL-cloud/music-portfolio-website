import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ResetPasswordClient } from './ResetPasswordClient'

export const metadata: Metadata = {
  title: 'Reset Password — Sonic Wave Studio',
}

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <Suspense>
        <ResetPasswordClient />
      </Suspense>
    </main>
  )
}
