'use client'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Bell, X } from 'lucide-react'
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
  const { notifications, unreadCount, markRead } = useNotifications()
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Prevent body scroll while panel is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNotificationClick = (id: string, link?: string) => {
    markRead(id)
    setOpen(false)
    if (link) router.push(link)
  }

  return (
    <>
      {/* Bell button */}
      <button
        onClick={() => setOpen(o => !o)}
        data-testid="notification-bell"
        aria-label={`Notifications${unreadCount > 0 ? ` (${unreadCount} unread)` : ''}`}
        aria-expanded={open}
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

      {typeof document !== 'undefined' && createPortal(
        <>
          {/* Backdrop */}
          {open && (
            <div
              className="fixed inset-0 z-[9998] bg-black/25 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Side panel */}
          <div
            ref={panelRef}
            data-testid="notification-panel"
            role="dialog"
            aria-label="Notifications"
            className={cn(
              'fixed right-0 top-0 z-[9999] h-full w-full max-w-sm flex flex-col',
              'bg-[var(--color-surface)] border-l border-[var(--color-border)] shadow-[var(--shadow-xl)]',
              'transform transition-transform duration-300 ease-in-out',
              open ? 'translate-x-0' : 'translate-x-full',
            )}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border)] shrink-0">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-[var(--color-text)]">Notifications</h2>
                {unreadCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-accent-1)] px-1.5 text-[10px] font-bold text-white">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close notifications"
                data-testid="notification-panel-close"
                className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-raised)] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Notification list */}
            <div className="flex-1 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-3 px-6 py-16 text-center">
                  <Bell className="h-10 w-10 text-[var(--color-text-muted)] opacity-30" />
                  <p className="text-sm text-[var(--color-text-muted)]">No notifications yet</p>
                </div>
              ) : (
                <ul>
                  {notifications.map(n => (
                    <li key={n.id}>
                      <button
                        onClick={() => handleNotificationClick(n.id, n.link)}
                        data-testid={`notification-item-${n.id}`}
                        className={cn(
                          'w-full flex items-start gap-3 px-5 py-4 text-left border-b border-[var(--color-border)] last:border-0 transition-colors',
                          n.read
                            ? 'hover:bg-[var(--color-surface-raised)]'
                            : 'bg-[var(--color-accent-1-subtle)] hover:brightness-[0.97]',
                        )}
                      >
                        <span className={cn(
                          'mt-1.5 shrink-0 h-2 w-2 rounded-full transition-colors',
                          n.read ? 'bg-transparent' : 'bg-[var(--color-accent-1)]',
                        )} />
                        <div className="flex-1 min-w-0 space-y-1">
                          <p className={cn(
                            'text-sm text-[var(--color-text)] truncate',
                            n.read ? 'font-medium' : 'font-semibold',
                          )}>
                            {n.title}
                          </p>
                          <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
                            {n.body}
                          </p>
                          <p className="text-xs text-[var(--color-text-subtle)]">
                            {relativeTime(n.createdAt)}
                          </p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>,
        document.body,
      )}
    </>
  )
}
