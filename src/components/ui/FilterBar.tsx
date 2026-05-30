'use client'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FilterOption  { value: string; label: string }
export interface FilterGroup   { key: string; label: string; options: FilterOption[] }
export interface TextFilter    { key: string; label: string; placeholder?: string; value: string; onChange: (v: string) => void }

interface FilterBarProps {
  groups: FilterGroup[]
  selected: Record<string, string[]>
  textFilters?: TextFilter[]
  onToggle: (groupKey: string, value: string) => void
  onClear: () => void
  className?: string
  'data-testid'?: string
}

export function FilterBar({
  groups,
  selected,
  textFilters = [],
  onToggle,
  onClear,
  className,
  'data-testid': testId,
}: FilterBarProps) {
  const hasActive =
    textFilters.some(f => f.value.length > 0) ||
    Object.values(selected).some(v => v.length > 0)

  return (
    <div data-testid={testId} className={cn('flex flex-col gap-4', className)}>
      {/* Text search inputs */}
      {textFilters.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {textFilters.map(f => (
            <div key={f.key} className="relative flex-1 min-w-40">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--color-text-muted)] pointer-events-none" />
              <input
                type="search"
                placeholder={f.placeholder ?? f.label}
                value={f.value}
                onChange={e => f.onChange(e.target.value)}
                data-testid={`filter-text-${f.key}`}
                aria-label={f.label}
                className="h-9 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] pl-8 pr-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)] focus:border-transparent"
              />
            </div>
          ))}
        </div>
      )}

      {/* Chip groups */}
      <div className="flex flex-col gap-2.5">
        {groups.map(group => (
          <div key={group.key} className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-[var(--color-text-muted)] w-20 shrink-0">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {group.options.map(opt => {
                const isActive = selected[group.key]?.includes(opt.value)
                return (
                  <button
                    key={opt.value}
                    onClick={() => onToggle(group.key, opt.value)}
                    data-testid={`filter-chip-${group.key}-${opt.value}`}
                    className={cn(
                      'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-[var(--transition-fast)]',
                      isActive
                        ? 'bg-[var(--color-accent-1)] border-[var(--color-accent-1)] text-white'
                        : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent-1)] hover:text-[var(--color-accent-1)]',
                    )}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Clear */}
      {hasActive && (
        <div>
          <button
            onClick={onClear}
            data-testid="filter-bar-clear"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-error)] transition-colors"
          >
            <X className="h-3 w-3" /> Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
