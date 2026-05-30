'use client'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'
import { cn } from '@/lib/utils'

const OPTIONS = [
  { value: 'light', Icon: Sun, label: 'Light' },
  { value: 'dark',  Icon: Moon, label: 'Dark' },
  { value: 'system', Icon: Monitor, label: 'System' },
] as const

interface ThemeToggleProps {
  compact?: boolean
  className?: string
  'data-testid'?: string
}

export function ThemeToggle({ compact, className, 'data-testid': testId }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  if (compact) {
    const idx = OPTIONS.findIndex(o => o.value === theme)
    const current = OPTIONS[idx >= 0 ? idx : 2]
    const next = OPTIONS[(idx + 1) % OPTIONS.length]
    const { Icon } = current
    return (
      <button
        onClick={() => setTheme(next.value)}
        data-testid={testId ?? 'theme-toggle'}
        aria-label={`Switch to ${next.label} theme`}
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)]',
          'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-raised)] transition-colors',
          className,
        )}
      >
        <Icon className="h-4 w-4" />
      </button>
    )
  }

  return (
    <div
      data-testid={testId ?? 'theme-toggle'}
      className={cn('inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-0.5 gap-0.5', className)}
    >
      {OPTIONS.map(({ value, Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={`${label} theme`}
          aria-pressed={theme === value}
          className={cn(
            'flex h-7 items-center gap-1.5 px-3 rounded-full text-xs font-medium transition-colors duration-[var(--transition-fast)]',
            theme === value
              ? 'bg-[var(--color-accent-1)] text-white'
              : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
          )}
        >
          <Icon className="h-3.5 w-3.5" />
          {label}
        </button>
      ))}
    </div>
  )
}
