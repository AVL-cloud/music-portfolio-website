'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Music2, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Avatar } from '@/components/ui/Avatar'
import { NotificationBell } from '@/components/ui/NotificationBell'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { useI18n } from '@/contexts/I18nContext'
import { cn } from '@/lib/utils'

const NAV_KEYS = ['music', 'covers', 'tabs', 'courses', 'gear', 'about', 'contact'] as const
type NavKey = typeof NAV_KEYS[number]
const NAV_HREFS: Record<NavKey, string> = {
  music:   '/music',
  covers:  '/covers',
  tabs:    '/tabs',
  courses: '/courses',
  gear:    '/gear',
  about:   '/about',
  contact: '/contact',
}

function SocialIcon({ label }: { label: string }) {
  const icons: Record<string, JSX.Element> = {
    Spotify: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    'Apple Music': (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
        <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.768-.73 10.99 10.99 0 0 0-1.571-.17c-.076-.001-.15-.013-.227-.013H7.993c-.175 0-.35.005-.523.017a11.5 11.5 0 0 0-1.765.228 4.98 4.98 0 0 0-1.77.736C2.85 1.835 2.104 2.835 1.787 4.145a9.32 9.32 0 0 0-.24 2.19c-.013.245-.013.49-.013.735v9.86c0 .245 0 .49.013.735a9.23 9.23 0 0 0 .24 2.19c.317 1.31 1.063 2.31 2.178 3.043a5.022 5.022 0 0 0 1.768.73 11.5 11.5 0 0 0 1.765.228c.173.012.348.017.523.017h8.015c.175 0 .35-.005.523-.017a11.5 11.5 0 0 0 1.765-.228 4.98 4.98 0 0 0 1.77-.736c1.115-.734 1.862-1.734 2.18-3.043a9.32 9.32 0 0 0 .24-2.19c.013-.245.013-.49.013-.735V6.86c0-.245 0-.49-.013-.735zM12.017 21.5a4.917 4.917 0 0 1-1.787-.42c-.69-.275-1.282-.705-1.74-1.265-.457-.56-.745-1.22-.84-1.93a4.986 4.986 0 0 1-.06-.75V12.7h8.857v4.435a4.986 4.986 0 0 1-.06.75c-.095.71-.383 1.37-.84 1.93-.457.56-1.05.99-1.74 1.265a4.917 4.917 0 0 1-1.79.42zM7.59 11V7.455l8.857-1.99V9l-8.857 2z" />
      </svg>
    ),
    YouTube: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    Instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
    TikTok: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  }
  return icons[label] ?? null
}

const SOCIALS = [
  { href: 'https://open.spotify.com/artist/',  label: 'Spotify' },
  { href: 'https://music.apple.com/',          label: 'Apple Music' },
  { href: 'https://youtube.com/',              label: 'YouTube' },
  { href: 'https://instagram.com/',            label: 'Instagram' },
  { href: 'https://tiktok.com/',               label: 'TikTok' },
]

interface User { name?: string; image?: string | null }
interface HeaderProps {
  hero?: boolean
  user?: User | null
  isLoggedIn?: boolean
  className?: string
}

export function Header({ hero, user, isLoggedIn, className }: HeaderProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { t } = useI18n()

  const NAV = NAV_KEYS.map(key => ({ href: NAV_HREFS[key], label: t.nav[key] }))

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
                className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] transition-colors">
                <SocialIcon label={s.label} />
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

          <div className="flex items-center gap-1 ml-auto">
            <LanguageSwitcher compact />
            <ThemeToggle compact />
            {isLoggedIn ? (
              <>
                <NotificationBell />
                <Link href="/preferences" data-testid="header-user-avatar" className="ml-1">
                  <Avatar src={user?.image} name={user?.name ?? 'Antoine'} size="sm" />
                </Link>
                <Link href="/logout" data-testid="header-logout-button" className="ml-1">
                  <Button size="sm" variant="ghost" className="text-xs">{t.nav.signOut}</Button>
                </Link>
              </>
            ) : (
              <Link href="/login" data-testid="header-login-button" className="ml-1">
                <Button size="sm" variant="secondary">{t.nav.signIn}</Button>
              </Link>
            )}
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] transition-colors ml-1"
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
