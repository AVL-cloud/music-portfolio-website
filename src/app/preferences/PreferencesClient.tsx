'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { User, KeyRound, Eye, EyeOff, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { updateUsernameAction, updatePasswordAction } from '@/app/actions/auth'

interface Props {
  email: string
  username: string
  role: 'member' | 'admin'
}

export function PreferencesClient({ email, username, role }: Props) {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <p className="text-sm text-[var(--color-text-muted)]">
          Signed in as <span className="font-medium text-[var(--color-text)]">{email}</span>
          {role === 'admin' && (
            <span className="ml-2 inline-flex items-center gap-1 rounded-[var(--radius-full)] bg-[var(--color-accent-1-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--color-accent-1)]">
              <ShieldCheck className="h-3 w-3" /> Admin
            </span>
          )}
        </p>
      </header>

      <UsernameSection initial={username} onSaved={() => router.refresh()} />
      <PasswordSection />
    </div>
  )
}

function Section({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)]">
          {icon}
        </div>
        <div>
          <h2 className="font-medium text-[var(--color-text)]">{title}</h2>
          <p className="text-sm text-[var(--color-text-muted)]">{description}</p>
        </div>
      </div>
      {children}
    </section>
  )
}

function SuccessNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-success-subtle)] px-3 py-2 text-sm text-[var(--color-success)]">
      <CheckCircle2 className="h-4 w-4 shrink-0" />
      {children}
    </div>
  )
}

function FormError({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-[var(--radius-md)] bg-[var(--color-error-subtle)] px-3 py-2 text-sm text-[var(--color-error)]">
      {children}
    </p>
  )
}

// ── Username ─────────────────────────────────────────────────────────────────

function UsernameSection({ initial, onSaved }: { initial: string; onSaved: () => void }) {
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSaved(false)
    const fd = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await updateUsernameAction(fd)
      if (result.success) {
        setErrors({})
        setSaved(true)
        onSaved()
      } else {
        setErrors(result.field ? { [result.field]: result.error } : { _form: result.error })
      }
    })
  }

  return (
    <Section
      icon={<User className="h-5 w-5" />}
      title="Username"
      description="How you're greeted across the site. Leave empty to use your email instead."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" data-testid="prefs-username-form">
        <Input
          name="username"
          type="text"
          label="Username"
          defaultValue={initial}
          placeholder="your_username"
          autoComplete="username"
          error={errors.username}
          hint="3–30 chars, letters, numbers, _ or -."
          data-testid="prefs-username"
        />
        {errors._form && <FormError>{errors._form}</FormError>}
        {saved && <SuccessNote>Username updated.</SuccessNote>}
        <div>
          <Button type="submit" loading={isPending} data-testid="prefs-username-submit">
            Save username
          </Button>
        </div>
      </form>
    </Section>
  )
}

// ── Password ─────────────────────────────────────────────────────────────────

function PasswordSection() {
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState(false)
  const [show, setShow] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSaved(false)
    const form = e.currentTarget
    const fd = new FormData(form)
    startTransition(async () => {
      const result = await updatePasswordAction(fd)
      if (result.success) {
        setErrors({})
        setSaved(true)
        form.reset()
      } else {
        setErrors(result.field ? { [result.field]: result.error } : { _form: result.error })
      }
    })
  }

  return (
    <Section
      icon={<KeyRound className="h-5 w-5" />}
      title="Password"
      description="Choose a strong password you don't use elsewhere."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" data-testid="prefs-password-form">
        <Input
          name="currentPassword"
          type={show ? 'text' : 'password'}
          label="Current password"
          placeholder="••••••••"
          autoComplete="current-password"
          error={errors.currentPassword}
          data-testid="prefs-current-password"
          required
        />
        <div className="relative">
          <Input
            name="password"
            type={show ? 'text' : 'password'}
            label="New password"
            placeholder="••••••••"
            autoComplete="new-password"
            error={errors.password}
            hint="Min. 8 characters with at least one letter and one number."
            data-testid="prefs-new-password"
            required
          />
          <button
            type="button"
            onClick={() => setShow(v => !v)}
            className="absolute right-3 top-[34px] text-[var(--color-text-subtle)] hover:text-[var(--color-text)]"
            tabIndex={-1}
            aria-label={show ? 'Hide passwords' : 'Show passwords'}
          >
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        <Input
          name="confirmPassword"
          type={show ? 'text' : 'password'}
          label="Confirm new password"
          placeholder="••••••••"
          autoComplete="new-password"
          error={errors.confirmPassword}
          data-testid="prefs-confirm-password"
          required
        />
        {errors._form && <FormError>{errors._form}</FormError>}
        {saved && <SuccessNote>Password updated.</SuccessNote>}
        <div>
          <Button type="submit" loading={isPending} data-testid="prefs-password-submit">
            Change password
          </Button>
        </div>
      </form>
    </Section>
  )
}
