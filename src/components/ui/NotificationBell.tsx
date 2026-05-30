'use client'
import { useState, useRef, useEffect } from 'react'
import { Bell, Check } from 'lucide-react'
import { useNotifications } from '@/contexts/NotificationContext'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

function relativeTime(date: Date) {
  const diff = Date.now() - date.getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

export function NotificationBell() {
  const { notifications, unreadCount, markRead, markAllRead } = useNotifications()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleClick = (id: string, link?: string) => {
    markRead(id)
    setOpen(false)
    if (link) router.push(link)
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        data-testid="notification-bell"
        aria-label={`Notifications${unreadCount > 0 ? ` (${unreadCount} unread)` : ''}`}
        className={cn(
          'relative flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)]',
          'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-raised)] transition-colors',
          open && 'bg-[var(--color-surface-raised)] text-[var(--color-text)]',
        )}
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <span
            data-testid="notification-badge"
            className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-accent-1)] px-1 text-[10px] font-bold text-white"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          data-testid="notification-dropdown"
          className="absolute right-0 top-full mt-2 w-80 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)] overflow-hidden z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">Notifications</h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="flex items-center gap-1 text-xs text-[var(--color-accent-1)] hover:underline"
              >
                <Check className="h-3 w-3" /> Mark all read
              </button>
            )}
          </div>

          {/* List */}
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="px-4 py-6 text-sm text-center text-[var(--color-text-muted)]">No notifications yet</p>
            ) : (
              notifications.map(n => (
                <button
                  key={n.id}
                  onClick={() => handleClick(n.id, n.link)}
                  data-testid={`notification-item-${n.id}`}
                  className={cn(
                    'w-full flex items-start gap-3 px-4 py-3 text-left border-b border-[var(--color-border)] last:border-0 transition-colors',
                    n.read
                      ? 'hover:bg-[var(--color-surface-raised)]'
                      : 'bg-[var(--color-accent-1-subtle)] hover:bg-[var(--color-accent-1-subtle)]',
                  )}
                >
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <p className={cn('text-sm font-medium text-[var(--color-text)] truncate', !n.read && 'font-semibold')}>
                      {n.title}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] line-clamp-2">{n.body}</p>
                    <p className="text-xs text-[var(--color-text-subtle)]">{relativeTime(n.createdAt)}</p>
                  </div>
                  {!n.read && (
                    <span className="mt-1.5 shrink-0 h-2 w-2 rounded-full bg-[var(--color-accent-1)]" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
