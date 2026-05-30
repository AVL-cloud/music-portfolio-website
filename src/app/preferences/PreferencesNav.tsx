'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { User, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

const ITEMS = [
  { href: '/preferences', label: 'Account', icon: User, testid: 'prefs-nav-account' },
  { href: '/preferences/contact-log', label: 'Contact log', icon: MessageSquare, testid: 'prefs-nav-contact-log' },
] as const

export function PreferencesNav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-1 border-b border-[var(--color-border)]" data-testid="preferences-nav">
      {ITEMS.map(({ href, label, icon: Icon, testid }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            data-testid={testid}
            className={cn(
              '-mb-px inline-flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors',
              active
                ? 'border-[var(--color-accent-1)] text-[var(--color-accent-1)]'
                : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
            )}
          >
            <Icon className="h-4 w-4" /> {label}
          </Link>
        )
      })}
    </nav>
  )
}
