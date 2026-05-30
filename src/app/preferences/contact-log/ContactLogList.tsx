'use client'

import Link from 'next/link'
import { Clock, MessageSquare, Lock } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
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

// A member's own contact form log. Archiving by an admin never appears here —
// the member always sees the full history of what they sent and any reply.
export function ContactLogList({ requests }: { requests: ContactRequest[] }) {
  if (requests.length === 0) {
    return (
      <div className="py-16 text-center text-[var(--color-text-muted)]" data-testid="contact-log-empty">
        <MessageSquare className="mx-auto mb-3 h-10 w-10 opacity-40" />
        <p className="mb-4">You haven't sent any messages yet.</p>
        <Link href="/contact">
          <Button variant="secondary" size="sm">Go to the contact form</Button>
        </Link>
      </div>
    )
  }

  return (
    <section data-testid="contact-log" className="space-y-3">
      <p className="text-sm text-[var(--color-text-muted)]">
        Every message you've sent and any reply you've received.
      </p>
      {requests.map(req => (
        <Card key={req.id} data-testid={`contact-log-${req.id}`}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1 text-xs text-[var(--color-text-subtle)]">
                <Clock className="h-3 w-3" /> {relativeTime(req.createdAt)}
              </span>
              {req.status === 'answered' ? (
                <Badge variant="success">Answered</Badge>
              ) : (
                <Badge variant="accent1">Awaiting reply</Badge>
              )}
            </div>
            <p className="mt-2 whitespace-pre-wrap text-sm text-[var(--color-text)]">{req.message}</p>

            {req.answer && (
              <div className="mt-3 border-l-2 border-[var(--color-accent-1)] pl-3">
                <p className="mb-1 text-xs text-[var(--color-text-muted)]">
                  Reply from Sonic Wave Studio {req.answeredAt ? `· ${relativeTime(req.answeredAt)}` : ''}
                </p>
                <p className="whitespace-pre-wrap text-sm text-[var(--color-text)]">{req.answer}</p>
                <p className="mt-2 flex items-center gap-1 text-xs text-[var(--color-text-subtle)]">
                  <Lock className="h-3 w-3" /> This conversation is closed. Send a new message if you need anything else.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
