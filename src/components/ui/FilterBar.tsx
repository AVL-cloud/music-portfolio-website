'use client'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FilterOption { value: string; label: string }
export interface FilterGroup { key: string; label: string; options: FilterOption[] }

interface FilterBarProps {
  groups: FilterGroup[]
  selected: Record<string, string[]>
  search?: string
  onSearchChange?: (value: string) => void
  onToggle: (groupKey: string, value: string) => void
  onClear: () => void
  className?: string
  'data-testid'?: string
}

export function FilterBar({ groups, selected, search, onSearchChange, onToggle, onClear, className, 'data-testid': testId }: FilterBarProps) {
  const hasActive = search || Object.values(selected).some(v => v.length > 0)

  return (
    <div data-testid={testId} className={cn('flex flex-col gap-3', className)}>
      {onSearchChange && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-text-muted)]" />
          <input
            type="search"
            placeholder="Search…"
            value={search ?? ''}
            onChange={e => onSearchChange(e.target.value)}
            data-testid="filter-bar-search"
            className="h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] pl-9 pr-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)] focus:border-transparent"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 items-center">
        {groups.map(group => (
          <div key={group.key} className="flex flex-wrap gap-1.5">
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
        ))}
        {hasActive && (
          <button
            onClick={onClear}
            data-testid="filter-bar-clear"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-error)] transition-colors"
          >
            <X className="h-3 w-3" /> Clear
          </button>
        )}
      </div>
    </div>
  )
}
