'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Music2, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Avatar } from '@/components/ui/Avatar'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/music',   label: 'Music' },
  { href: '/covers',  label: 'Covers' },
  { href: '/tabs',    label: 'Tabs' },
  { href: '/courses', label: 'Courses' },
  { href: '/gear',    label: 'Gear' },
  { href: '/about',   label: 'About' },
]

const SOCIALS = [
  { href: 'https://open.spotify.com/artist/',  label: 'Spotify' },
  { href: 'https://music.apple.com/',          label: 'Apple Music' },
  { href: 'https://youtube.com/',              label: 'YouTube' },
  { href: 'https://instagram.com/',            label: 'Instagram' },
  { href: 'https://tiktok.com/',               label: 'TikTok' },
]

interface User { name?: string; image?: string | null }
interface HeaderProps { hero?: boolean; user?: User | null; className?: string }

export function Header({ hero, user, className }: HeaderProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      data-testid="header-nav"
      className={cn(
        'sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md',
        hero && 'relative border-transparent bg-transparent',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Social bar */}
        <div className="hidden md:flex items-center justify-between h-9 border-b border-[var(--color-border)]/50">
          <div className="flex gap-5">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                data-testid={`header-social-${s.label.toLowerCase().replace(' ', '-')}`}
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Main bar */}
        <div className={cn('flex items-center gap-6 h-16', hero && 'h-20')}>
          <Link href="/" data-testid="header-logo"
            className="flex items-center gap-2 font-semibold text-[var(--color-text)] hover:text-[var(--color-accent-1)] transition-colors shrink-0">
            <Music2 className="h-5 w-5 text-[var(--color-accent-1)]" />
            <span className={cn('text-sm', hero && 'text-base')}>Sonic Wave Studio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 flex-1">
            {NAV.map(({ href, label }) => (
              <Link key={href} href={href}
                data-testid={`header-nav-${label.toLowerCase()}`}
                className={cn(
                  'px-3 py-1.5 rounded-[var(--radius-md)] text-sm font-medium transition-colors',
                  pathname.startsWith(href)
                    ? 'text-[var(--color-accent-1)] bg-[var(--color-accent-1-subtle)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-raised)]',
                )}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-auto">
            <ThemeToggle compact />
            {user ? (
              <Link href="/favourites" data-testid="header-user-avatar">
                <Avatar src={user.image} name={user.name} size="sm" />
              </Link>
            ) : (
              <Link href="/login" data-testid="header-login-button">
                <Button size="sm" variant="secondary">Sign in</Button>
              </Link>
            )}
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] transition-colors"
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
              data-testid="header-mobile-menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden border-t border-[var(--color-border)] py-3 space-y-1" data-testid="header-mobile-nav">
            {NAV.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-[var(--radius-md)] text-sm font-medium transition-colors',
                  pathname.startsWith(href)
                    ? 'text-[var(--color-accent-1)] bg-[var(--color-accent-1-subtle)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
                )}>
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
