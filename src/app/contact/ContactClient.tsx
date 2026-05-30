'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Send, CheckCircle2, MessageSquare } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { submitContactRequestAction } from '@/app/actions/contact'

interface Props {
  defaultName: string
  defaultEmail: string
  isLoggedIn: boolean
}

export function ContactClient({ defaultName, defaultEmail, isLoggedIn }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})
    const form = e.currentTarget
    const fd = new FormData(form)
    startTransition(async () => {
      const result = await submitContactRequestAction(fd)
      if (result.success) {
        setSent(true)
        form.reset()
        router.refresh()
      } else {
        setErrors(result.field ? { [result.field]: result.error } : { _form: result.error })
      }
    })
  }

  if (sent) {
    return (
      <div data-testid="contact-success" className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-success-subtle)] text-[var(--color-success)]">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-text)]">Message sent!</h3>
        <p className="max-w-sm text-sm text-[var(--color-text-muted)]">
          Thanks for reaching out. I'll get back to you as soon as I can — usually within a day or two.
        </p>
        {isLoggedIn && (
          <Link
            href="/preferences/contact-log"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent-1)] hover:underline"
            data-testid="contact-log-link"
          >
            <MessageSquare className="h-4 w-4" /> Track it in your contact log
          </Link>
        )}
        <Button variant="ghost" size="sm" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-xl space-y-4">
      <form data-testid="contact-form" onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input name="name" label="Name" defaultValue={defaultName} placeholder="Your name"
            error={errors.name} data-testid="contact-name" required />
          <Input name="email" type="email" label="Email" defaultValue={defaultEmail} placeholder="your@email.com"
            error={errors.email} data-testid="contact-email" required />
        </div>
        <Textarea name="message" label="Message" placeholder="What's on your mind?" rows={5}
          error={errors.message} data-testid="contact-message" required />
        {errors._form && (
          <p className="rounded-[var(--radius-md)] bg-[var(--color-error-subtle)] px-3 py-2 text-sm text-[var(--color-error)]">
            {errors._form}
          </p>
        )}
        <Button type="submit" loading={isPending} data-testid="contact-submit">
          <Send className="h-4 w-4" /> Send message
        </Button>
      </form>

      {isLoggedIn && (
        <Link
          href="/preferences/contact-log"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)]"
          data-testid="contact-log-link"
        >
          <MessageSquare className="h-4 w-4" /> View your contact log
        </Link>
      )}
    </div>
  )
}
