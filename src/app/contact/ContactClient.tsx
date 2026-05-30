'use client'
import { useState } from 'react'
import { Send, MessageSquare, CheckCircle2, Clock, ChevronDown, ChevronUp, Reply } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { useAdmin } from '@/contexts/AdminContext'
import { useNotifications } from '@/contexts/NotificationContext'
import { cn } from '@/lib/utils'

// ─── Types ───────────────────────────────────────────────────────────────────

interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  createdAt: Date
  status: 'unread' | 'read' | 'replied'
  reply?: string
  repliedAt?: Date
}

// Mock data for development — replaced by D1 queries in Phase 3
const MOCK_MESSAGES: ContactMessage[] = [
  {
    id: '1',
    name: 'Sarah Martin',
    email: 'sarah@example.com',
    message: 'Hey Antoine! I absolutely love your cover of Comfortably Numb. The tone you got on the solo is incredible. What guitar were you using for that?',
    createdAt: new Date(Date.now() - 1000 * 60 * 30),
    status: 'unread',
  },
  {
    id: '2',
    name: 'Thomas Dubois',
    email: 'thomas@example.com',
    message: 'Would you be interested in a collaboration? I play bass and I think our styles could complement each other.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
    status: 'read',
  },
  {
    id: '3',
    name: 'Guest User',
    email: 'guest@example.com',
    message: 'Thanks for the tabs! The Blackbird arrangement is perfect.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    status: 'replied',
    reply: 'Thanks so much! Happy you enjoyed it. Let me know if you need anything else.',
    repliedAt: new Date(Date.now() - 1000 * 60 * 60 * 20),
  },
]

function relativeTime(date: Date) {
  const diff = Date.now() - date.getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

// ─── Admin Message Card ───────────────────────────────────────────────────────

function AdminMessageCard({ msg, onReply }: { msg: ContactMessage; onReply: (id: string, reply: string) => void }) {
  const [expanded, setExpanded] = useState(msg.status === 'unread')
  const [replyText, setReplyText] = useState('')
  const [replying, setReplying] = useState(false)
  const [sending, setSending] = useState(false)

  const send = async () => {
    if (!replyText.trim()) return
    setSending(true)
    await new Promise(r => setTimeout(r, 600)) // simulate API call
    onReply(msg.id, replyText)
    setReplyText('')
    setReplying(false)
    setSending(false)
  }

  const statusConfig = {
    unread:  { label: 'Unread',  variant: 'accent1'  as const },
    read:    { label: 'Read',    variant: 'neutral'  as const },
    replied: { label: 'Replied', variant: 'success'  as const },
  }
  const { label, variant } = statusConfig[msg.status]

  return (
    <Card data-testid={`admin-message-${msg.id}`} className={cn(msg.status === 'unread' && 'border-[var(--color-accent-1)]/40')}>
      <CardContent className="p-0">
        {/* Header row */}
        <button
          onClick={() => setExpanded(e => !e)}
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[var(--color-surface-raised)] rounded-t-[var(--radius-lg)] transition-colors"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-[var(--color-text)]">{msg.name}</span>
              <span className="text-xs text-[var(--color-text-muted)]">{msg.email}</span>
              <Badge variant={variant}>{label}</Badge>
            </div>
            {!expanded && (
              <p className="text-xs text-[var(--color-text-muted)] truncate mt-0.5">{msg.message}</p>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0 text-xs text-[var(--color-text-subtle)]">
            {relativeTime(msg.createdAt)}
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>
        </button>

        {/* Expanded body */}
        {expanded && (
          <div className="px-4 pb-4 border-t border-[var(--color-border)]">
            <p className="text-sm text-[var(--color-text)] mt-3 whitespace-pre-wrap leading-relaxed">{msg.message}</p>

            {/* Existing reply */}
            {msg.reply && (
              <div className="mt-3 pl-3 border-l-2 border-[var(--color-accent-1)]">
                <p className="text-xs text-[var(--color-text-muted)] mb-1">Your reply · {msg.repliedAt ? relativeTime(msg.repliedAt) : ''}</p>
                <p className="text-sm text-[var(--color-text)] whitespace-pre-wrap">{msg.reply}</p>
              </div>
            )}

            {/* Reply area */}
            {!msg.reply && (
              <div className="mt-3">
                {replying ? (
                  <div className="space-y-2">
                    <Textarea
                      value={replyText}
                      onChange={e => setReplyText(e.target.value)}
                      placeholder="Write your reply…"
                      rows={3}
                      data-testid={`admin-reply-input-${msg.id}`}
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={send} loading={sending} data-testid={`admin-reply-send-${msg.id}`}>
                        <Send className="h-3.5 w-3.5" /> Send reply
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setReplying(false)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <Button size="sm" variant="secondary" onClick={() => setReplying(true)} data-testid={`admin-reply-btn-${msg.id}`}>
                    <Reply className="h-3.5 w-3.5" /> Reply
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ─── Contact Form (public/member) ────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const set = (k: string, v: string) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: '' }))
  }

  const submit = async () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSending(true)
    await new Promise(r => setTimeout(r, 800)) // simulate API
    setSending(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div data-testid="contact-success" className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-success-subtle)] text-[var(--color-success)]">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-text)]">Message sent!</h3>
        <p className="text-sm text-[var(--color-text-muted)] max-w-sm">
          Thanks for reaching out. I'll get back to you as soon as I can — usually within a day or two.
        </p>
        <Button variant="ghost" size="sm" onClick={() => { setForm({ name: '', email: '', message: '' }); setSent(false) }}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form data-testid="contact-form" onSubmit={e => { e.preventDefault(); submit() }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Name" value={form.name} onChange={e => set('name', e.target.value)}
          placeholder="Your name" error={errors.name} data-testid="contact-name" />
        <Input label="Email" type="email" value={form.email} onChange={e => set('email', e.target.value)}
          placeholder="your@email.com" error={errors.email} data-testid="contact-email" />
      </div>
      <Textarea label="Message" value={form.message} onChange={e => set('message', e.target.value)}
        placeholder="What's on your mind?" rows={5} error={errors.message} data-testid="contact-message" />
      <Button type="submit" loading={sending} data-testid="contact-submit">
        <Send className="h-4 w-4" /> Send message
      </Button>
    </form>
  )
}

// ─── Main client component ────────────────────────────────────────────────────

export function ContactClient() {
  const { isAdmin, editMode } = useAdmin()
  const { addNotification } = useNotifications()
  const [messages, setMessages] = useState<ContactMessage[]>(MOCK_MESSAGES)

  const handleReply = (id: string, reply: string) => {
    setMessages(ms => ms.map(m =>
      m.id === id ? { ...m, status: 'replied' as const, reply, repliedAt: new Date() } : m
    ))
    // In production: check if sender has linked user account, create DB notification
    // For now, add a mock notification to demonstrate the flow
    addNotification({
      title: 'Reply sent',
      body: `Your reply to ${messages.find(m => m.id === id)?.name} has been sent. They will be notified.`,
      link: '/contact',
    })
  }

  const unread = messages.filter(m => m.status === 'unread').length

  // Admin view
  if (isAdmin && editMode) {
    return (
      <div data-testid="admin-contact-view">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">Messages</h2>
          {unread > 0 && <Badge variant="accent1">{unread} unread</Badge>}
        </div>

        {messages.length === 0 ? (
          <div className="py-16 text-center text-[var(--color-text-muted)]">
            <MessageSquare className="h-10 w-10 mx-auto mb-3 opacity-40" />
            <p>No messages yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map(msg => (
              <AdminMessageCard key={msg.id} msg={msg} onReply={handleReply} />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Public / member view
  return (
    <div data-testid="contact-public-view" className="max-w-xl">
      <ContactForm />
    </div>
  )
}
