'use client'
import { Globe } from 'lucide-react'
import { useI18n } from '@/contexts/I18nContext'
import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  compact?: boolean
  className?: string
}

const LOCALES: { value: Locale; short: string }[] = [
  { value: 'en', short: 'EN' },
  { value: 'fr', short: 'FR' },
]

export function LanguageSwitcher({ compact, className }: LanguageSwitcherProps) {
  const { locale, setLocale, multilingualEnabled } = useI18n()

  if (!multilingualEnabled) return null

  if (compact) {
    return (
      <div className={cn('flex items-center gap-0.5', className)}>
        <Globe className="h-3.5 w-3.5 text-[var(--color-text-muted)] shrink-0" />
        {LOCALES.map(({ value, short }) => (
          <button
            key={value}
            onClick={() => setLocale(value)}
            data-testid={`lang-switcher-${value}`}
            className={cn(
              'px-1.5 py-0.5 rounded text-xs font-medium transition-colors',
              locale === value
                ? 'text-[var(--color-accent-1)]'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
            )}
          >
            {short}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {LOCALES.map(({ value, short }) => (
        <button
          key={value}
          onClick={() => setLocale(value)}
          data-testid={`lang-switcher-${value}`}
          className={cn(
            'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[var(--radius-md)] text-sm font-medium transition-colors border',
            locale === value
              ? 'bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)] border-[var(--color-accent-1)]/30'
              : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]',
          )}
        >
          {short}
        </button>
      ))}
    </div>
  )
}
