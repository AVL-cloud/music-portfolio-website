'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Music2, Eye, EyeOff, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { resetPasswordAction } from '@/app/actions/auth'

export function ResetPasswordClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') ?? ''

  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  if (!token) {
    return (
      <div className="w-full max-w-md text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-[var(--color-error)] mb-4" />
        <h1 className="text-xl font-semibold text-[var(--color-text)] mb-2">Invalid link</h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-6">
          This password reset link is missing a token. Please request a new one.
        </p>
        <Button onClick={() => router.push('/login?tab=forgot')}>Request new link</Button>
      </div>
    )
  }

  if (success) {
    return (
      <div className="w-full max-w-md text-center" data-testid="reset-success">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--color-success)] mb-4" />
        <h1 className="text-xl font-semibold text-[var(--color-text)] mb-2">Password updated</h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-6">
          Your password has been changed. You are now signed in.
        </p>
        <Button onClick={() => router.push('/')}>Go to home</Button>
      </div>
    )
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    fd.set('token', token)
    startTransition(async () => {
      const result = await resetPasswordAction(fd)
      if (result.success) {
        setSuccess(true)
        setTimeout(() => router.push('/'), 2000)
      } else {
        setErrors(result.field ? { [result.field]: result.error } : { _form: result.error })
      }
    })
  }

  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-xl)] bg-[var(--color-accent-1-subtle)]">
          <Music2 className="h-6 w-6 text-[var(--color-accent-1)]" />
        </div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">Reset your password</h1>
        <p className="text-sm text-[var(--color-text-muted)]">Choose a new password for your account.</p>
      </div>

      <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)] p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" data-testid="reset-password-form">
          <div className="relative">
            <Input
              name="password"
              type={showPassword ? 'text' : 'password'}
              label="New password"
              placeholder="••••••••"
              autoComplete="new-password"
              error={errors.password}
              hint="Min. 8 characters with at least one letter and one number."
              data-testid="reset-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              className="absolute right-3 top-[34px] text-[var(--color-text-subtle)] hover:text-[var(--color-text)]"
              tabIndex={-1}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <div className="relative">
            <Input
              name="confirmPassword"
              type={showConfirm ? 'text' : 'password'}
              label="Confirm new password"
              placeholder="••••••••"
              autoComplete="new-password"
              error={errors.confirmPassword}
              data-testid="reset-confirm"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(v => !v)}
              className="absolute right-3 top-[34px] text-[var(--color-text-subtle)] hover:text-[var(--color-text)]"
              tabIndex={-1}
              aria-label={showConfirm ? 'Hide password' : 'Show password'}
            >
              {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          {errors._form && (
            <div className="flex items-start gap-2 text-sm text-[var(--color-error)] bg-[var(--color-error-subtle)] rounded-[var(--radius-md)] px-3 py-2">
              <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
              {errors._form}
            </div>
          )}

          <Button type="submit" loading={isPending} className="mt-1" data-testid="reset-submit">
            Update password
          </Button>
        </form>
      </div>
    </div>
  )
}
