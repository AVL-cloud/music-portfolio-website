'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { MessageSquare, Send, Archive, Reply, Mail, CheckCircle2, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/Textarea'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import {
  answerContactRequestAction,
  archiveContactRequestAction,
  sendDigestNowAction,
} from '@/app/actions/contact'
import type { ContactRequest } from '@/lib/contact/store'

function relativeTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

const STATUS: Record<ContactRequest['status'], { label: string; variant: 'accent1' | 'success' | 'neutral' }> = {
  open: { label: 'Open', variant: 'accent1' },
  answered: { label: 'Answered', variant: 'success' },
}

export function ContactRequestsClient({ requests }: { requests: ContactRequest[] }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [digestMsg, setDigestMsg] = useState<string | null>(null)
  const [filter, setFilter] = useState<'active' | 'all'>('active')

  const visible = requests.filter(r => (filter === 'all' ? true : !r.archivedByAdmin))
  const openCount = requests.filter(r => r.status === 'open' && !r.archivedByAdmin).length

  function sendDigest() {
    setDigestMsg(null)
    startTransition(async () => {
      const result = await sendDigestNowAction()
      setDigestMsg(result.success ? 'Digest sent to all admins.' : result.error)
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--color-text)]">Contact requests</h1>
          <p className="text-sm text-[var(--color-text-muted)]">
            {openCount} open · {requests.length} total
          </p>
        </div>
        <Button variant="secondary" size="sm" onClick={sendDigest} loading={isPending} data-testid="send-digest">
          <Mail className="h-4 w-4" /> Send weekly digest now
        </Button>
      </header>

      {digestMsg && (
        <div className="flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent-1-subtle)] px-3 py-2 text-sm text-[var(--color-accent-1)]">
          <CheckCircle2 className="h-4 w-4 shrink-0" /> {digestMsg}
        </div>
      )}

      <div className="flex gap-2">
        {(['active', 'all'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'rounded-[var(--radius-md)] px-3 py-1.5 text-sm font-medium transition-colors',
              filter === f
                ? 'bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)]'
                : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)]',
            )}
            data-testid={`filter-${f}`}
          >
            {f === 'active' ? 'Active' : 'All (incl. archived for you)'}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="py-16 text-center text-[var(--color-text-muted)]">
          <MessageSquare className="mx-auto mb-3 h-10 w-10 opacity-40" />
          <p>No contact requests</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {visible.map(req => (
            <RequestCard key={req.id} req={req} onChanged={() => router.refresh()} />
          ))}
        </div>
      )}
    </div>
  )
}

function RequestCard({ req, onChanged }: { req: ContactRequest; onChanged: () => void }) {
  const [isPending, startTransition] = useTransition()
  const [replying, setReplying] = useState(false)
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')

  const status = STATUS[req.status]

  function submitAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const fd = new FormData()
    fd.set('id', req.id)
    fd.set('answer', answer)
    startTransition(async () => {
      const result = await answerContactRequestAction(fd)
      if (result.success) {
        setReplying(false)
        setAnswer('')
        onChanged()
      } else {
        setError(result.error)
      }
    })
  }

  function archive() {
    const fd = new FormData()
    fd.set('id', req.id)
    startTransition(async () => {
      await archiveContactRequestAction(fd)
      onChanged()
    })
  }

  return (
    <Card data-testid={`request-${req.id}`} className={cn(req.status === 'open' && 'border-[var(--color-accent-1)]/40')}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-[var(--color-text)]">{req.name}</span>
              <span className="text-xs text-[var(--color-text-muted)]">{req.email}</span>
              <Badge variant={status.variant}>{status.label}</Badge>
              {req.userId && <Badge variant="neutral">member</Badge>}
              {req.archivedByAdmin && <Badge variant="neutral">archived</Badge>}
            </div>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-[var(--color-text-subtle)]">
              <Clock className="h-3 w-3" /> {relativeTime(req.createdAt)}
            </p>
          </div>
          {!req.archivedByAdmin && (
            <Button variant="ghost" size="sm" onClick={archive} loading={isPending} data-testid={`archive-${req.id}`}>
              <Archive className="h-3.5 w-3.5" /> Archive
            </Button>
          )}
        </div>

        <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text)]">{req.message}</p>

        {/* Existing answer */}
        {req.answer && (
          <div className="mt-3 border-l-2 border-[var(--color-accent-1)] pl-3">
            <p className="mb-1 text-xs text-[var(--color-text-muted)]">
              Answered {req.answeredAt ? relativeTime(req.answeredAt) : ''}
              {req.answeredBy ? ` · ${req.answeredBy}` : ''}
            </p>
            <p className="whitespace-pre-wrap text-sm text-[var(--color-text)]">{req.answer}</p>
          </div>
        )}

        {/* Answer composer — only when not yet answered */}
        {req.status !== 'answered' && (
          <div className="mt-3">
            {replying ? (
              <form onSubmit={submitAnswer} className="space-y-2" data-testid={`answer-form-${req.id}`}>
                <Textarea
                  value={answer}
                  onChange={e => setAnswer(e.target.value)}
                  placeholder="Write your answer… the sender will receive it by email."
                  rows={3}
                  data-testid={`answer-input-${req.id}`}
                />
                {error && <p className="text-xs text-[var(--color-error)]">{error}</p>}
                <div className="flex gap-2">
                  <Button type="submit" size="sm" loading={isPending} data-testid={`answer-send-${req.id}`}>
                    <Send className="h-3.5 w-3.5" /> Send answer
                  </Button>
                  <Button type="button" size="sm" variant="ghost" onClick={() => setReplying(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <Button size="sm" variant="secondary" onClick={() => setReplying(true)} data-testid={`answer-btn-${req.id}`}>
                <Reply className="h-3.5 w-3.5" /> Answer
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
