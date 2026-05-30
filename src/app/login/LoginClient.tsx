'use client'

import { useState, useTransition, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Music2, Eye, EyeOff, CheckCircle2, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { loginAction, registerAction, forgotPasswordAction } from '@/app/actions/auth'
import type { AuthResult } from '@/app/actions/auth'

type Tab = 'login' | 'register' | 'forgot'

export function LoginClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [tab, setTab] = useState<Tab>((searchParams.get('tab') as Tab) ?? 'login')
  const [isPending, startTransition] = useTransition()
  // Only honour relative paths to avoid open-redirects.
  const nextParam = searchParams.get('next')
  const next = nextParam && nextParam.startsWith('/') ? nextParam : '/'
  const pendingParam = searchParams.get('pending')

  // Per-tab state
  const [loginError, setLoginError] = useState<Record<string, string>>({})
  const [registerError, setRegisterError] = useState<Record<string, string>>({})
  const [forgotError, setForgotError] = useState<Record<string, string>>({})
  const [forgotSuccess, setForgotSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect(() => {
    setLoginError({})
    setRegisterError({})
    setForgotError({})
    setForgotSuccess(false)
  }, [tab])

  function handleResult(
    result: AuthResult,
    setError: (e: Record<string, string>) => void,
    onSuccess?: () => void,
  ) {
    if (result.success) {
      onSuccess?.()
    } else {
      setError(result.field ? { [result.field]: result.error } : { _form: result.error })
    }
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await loginAction(fd)
      handleResult(result, setLoginError, () => {
        const dest = pendingParam ? `${next}?pending=${encodeURIComponent(pendingParam)}` : next
        router.push(dest)
      })
    })
  }

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await registerAction(fd)
      handleResult(result, setRegisterError, () => {
        const dest = pendingParam ? `${next}?pending=${encodeURIComponent(pendingParam)}` : next
        router.push(dest)
      })
    })
  }

  function handleForgot(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await forgotPasswordAction(fd)
      if (result.success) {
        setForgotSuccess(true)
      } else {
        setForgotError(result.field ? { [result.field]: result.error } : { _form: result.error })
      }
    })
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'login', label: 'Sign in' },
    { id: 'register', label: 'Create account' },
    { id: 'forgot', label: 'Forgot password' },
  ]

  return (
    <div className="w-full max-w-md">
      {/* Back link — always visible */}
      <button
        onClick={() => (nextParam ? router.push(next) : router.back())}
        className="mb-6 flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
        data-testid="auth-back-button"
      >
        <ArrowLeft className="h-4 w-4" />
        Go back
      </button>

      {/* Logo */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-xl)] bg-[var(--color-accent-1-subtle)]">
          <Music2 className="h-6 w-6 text-[var(--color-accent-1)]" />
        </div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">Sonic Wave Studio</h1>
      </div>

      {/* Card */}
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)] overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-[var(--color-border)]">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={[
                'flex-1 py-3 text-sm font-medium transition-colors',
                tab === t.id
                  ? 'text-[var(--color-accent-1)] border-b-2 border-[var(--color-accent-1)] -mb-px bg-[var(--color-surface)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] bg-[var(--color-surface-raised)]',
              ].join(' ')}
              data-testid={`auth-tab-${t.id}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* ── Login ─────────────────────────────────────────────────── */}
          {tab === 'login' && (
            <form onSubmit={handleLogin} className="flex flex-col gap-4" data-testid="auth-login-form">
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="you@example.com"
                autoComplete="email"
                error={loginError.email}
                data-testid="auth-email"
                required
              />
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  error={loginError.password}
                  data-testid="auth-password"
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

              {loginError._form && (
                <p className="text-sm text-[var(--color-error)] bg-[var(--color-error-subtle)] rounded-[var(--radius-md)] px-3 py-2">
                  {loginError._form}
                </p>
              )}

              <Button type="submit" loading={isPending} className="mt-1">
                Sign in
              </Button>

              <button
                type="button"
                onClick={() => setTab('forgot')}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] transition-colors text-center"
              >
                Forgot your password?
              </button>
            </form>
          )}

          {/* ── Register ──────────────────────────────────────────────── */}
          {tab === 'register' && (
            <form onSubmit={handleRegister} className="flex flex-col gap-4" data-testid="auth-register-form">
              <Input
                name="username"
                type="text"
                label="Username (optional)"
                placeholder="your_username"
                autoComplete="username"
                error={registerError.username}
                hint="3–30 chars, letters, numbers, _ or -. Used to greet you when logged in."
                data-testid="auth-username"
              />
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="you@example.com"
                autoComplete="email"
                error={registerError.email}
                data-testid="auth-reg-email"
                required
              />
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  error={registerError.password}
                  hint="Min. 8 characters with at least one letter and one number."
                  data-testid="auth-reg-password"
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
                  label="Confirm password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  error={registerError.confirmPassword}
                  data-testid="auth-reg-confirm"
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

              {registerError._form && (
                <p className="text-sm text-[var(--color-error)] bg-[var(--color-error-subtle)] rounded-[var(--radius-md)] px-3 py-2">
                  {registerError._form}
                </p>
              )}

              <Button type="submit" loading={isPending} className="mt-1" data-testid="auth-register-submit">
                Create account
              </Button>
            </form>
          )}

          {/* ── Forgot password ───────────────────────────────────────── */}
          {tab === 'forgot' && (
            forgotSuccess ? (
              <div className="flex flex-col items-center gap-3 py-4 text-center" data-testid="auth-forgot-success">
                <CheckCircle2 className="h-10 w-10 text-[var(--color-success)]" />
                <p className="font-medium text-[var(--color-text)]">Check your inbox</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  If an account exists for that email, you will receive a reset link shortly.
                  The link expires after 24 hours.
                </p>
                <button
                  onClick={() => setTab('login')}
                  className="text-sm text-[var(--color-accent-1)] hover:underline mt-2"
                >
                  Back to sign in
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgot} className="flex flex-col gap-4" data-testid="auth-forgot-form">
                <p className="text-sm text-[var(--color-text-muted)]">
                  Enter the email or username linked to your account and we will send a reset link to your email.
                </p>
                <Input
                  name="identifier"
                  type="text"
                  label="Email or username"
                  placeholder="you@example.com"
                  autoComplete="username"
                  error={forgotError.identifier}
                  data-testid="auth-forgot-identifier"
                  required
                />

                {forgotError._form && (
                  <p className="text-sm text-[var(--color-error)] bg-[var(--color-error-subtle)] rounded-[var(--radius-md)] px-3 py-2">
                    {forgotError._form}
                  </p>
                )}

                <Button type="submit" loading={isPending} className="mt-1">
                  Send reset link
                </Button>

                <button
                  type="button"
                  onClick={() => setTab('login')}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] transition-colors text-center"
                >
                  Back to sign in
                </button>
              </form>
            )
          )}
        </div>
      </div>

      {/* Footer note */}
      <p className="mt-6 text-center text-xs text-[var(--color-text-subtle)]">
        By creating an account you agree to our terms of service and privacy policy.
      </p>
    </div>
  )
}
