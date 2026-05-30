'use client'
import { Check } from 'lucide-react'
import { useI18n } from '@/contexts/I18nContext'
import type { DatasetItem } from '@/contexts/DatasetContext'
import { cn } from '@/lib/utils'

interface ReleaseTagEditorProps {
  /** Currently-selected genre slugs. */
  genres: string[]
  /** All genres from the managed Genres dataset. */
  options: DatasetItem[]
  onChange: (genres: string[]) => void
  testIdPrefix?: string
}

/**
 * Admin-only editor for a release's genre tags. Tags are toggled from the managed
 * Genres dataset — the same source covers use. To add a new genre, add it in the
 * admin Datasets page first.
 */
export function ReleaseTagEditor({ genres, options, onChange, testIdPrefix = 'release' }: ReleaseTagEditorProps) {
  const { t } = useI18n()

  const toggle = (value: string) =>
    onChange(genres.includes(value) ? genres.filter(g => g !== value) : [...genres, value])

  return (
    <div
      data-testid={`${testIdPrefix}-tag-editor`}
      className="mt-3 rounded-[var(--radius-md)] border border-dashed border-[var(--color-accent-1)]/40 bg-[var(--color-accent-1-subtle)]/30 p-3"
    >
      <p className="mb-2 text-xs font-medium text-[var(--color-text-muted)]">{t.datasets.genres}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map(opt => {
          const active = genres.includes(opt.value)
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              aria-pressed={active}
              data-testid={`${testIdPrefix}-tag-${opt.value}`}
              className={cn(
                'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-colors',
                active
                  ? 'bg-[var(--color-accent-1)] text-white'
                  : 'bg-[var(--color-surface-raised)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
              )}
            >
              {active && <Check className="h-3 w-3" />}
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
