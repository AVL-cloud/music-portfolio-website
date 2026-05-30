'use client'
import { useState, useRef, useEffect } from 'react'
import { X, ChevronDown, Search, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface MultiSelectOption { value: string; label: string }

interface MultiSelectProps {
  options: MultiSelectOption[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  label?: string
  searchPlaceholder?: string
  allowFreeEntry?: boolean
  className?: string
  'data-testid'?: string
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  label,
  searchPlaceholder = 'Search…',
  allowFreeEntry = false,
  className,
  'data-testid': testId,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filtered = options.filter(o =>
    o.label.toLowerCase().includes(search.toLowerCase()) && !value.includes(o.value)
  )

  const toggle = (v: string) => {
    onChange(value.includes(v) ? value.filter(x => x !== v) : [...value, v])
  }

  const addFree = () => {
    const trimmed = search.trim()
    if (!trimmed || value.includes(trimmed)) return
    onChange([...value, trimmed])
    setSearch('')
  }

  const selectedLabels = value.map(v => options.find(o => o.value === v)?.label ?? v)

  return (
    <div className={cn('flex flex-col gap-1.5', className)} ref={ref}>
      {label && <span className="text-sm font-medium text-[var(--color-text)]">{label}</span>}

      <div
        data-testid={testId}
        onClick={() => setOpen(o => !o)}
        className={cn(
          'relative min-h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]',
          'px-3 py-2 cursor-pointer transition-colors',
          'focus-within:ring-2 focus-within:ring-[var(--color-accent-1)] focus-within:border-transparent',
          open && 'ring-2 ring-[var(--color-accent-1)] border-transparent',
        )}
      >
        <div className="flex flex-wrap gap-1.5 pr-6">
          {selectedLabels.length === 0 && (
            <span className="text-sm text-[var(--color-text-subtle)]">{placeholder}</span>
          )}
          {selectedLabels.map((label, i) => (
            <span key={value[i]}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)]">
              {label}
              <button
                onClick={e => { e.stopPropagation(); toggle(value[i]) }}
                data-testid={`multiselect-remove-${value[i]}`}
                className="hover:text-[var(--color-accent-1-hover)]"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
        <ChevronDown className={cn('absolute right-3 top-3 h-4 w-4 text-[var(--color-text-muted)] transition-transform', open && 'rotate-180')} />
      </div>

      {open && (
        <div className="relative z-50">
          <div className="absolute w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)] overflow-hidden">
            {/* Search */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--color-border)]">
              <Search className="h-4 w-4 shrink-0 text-[var(--color-text-muted)]" />
              <input
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && allowFreeEntry && filtered.length === 0) addFree() }}
                placeholder={searchPlaceholder}
                className="flex-1 bg-transparent text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none"
                data-testid={`${testId}-search`}
              />
            </div>

            {/* Options */}
            <div className="max-h-52 overflow-y-auto">
              {filtered.map(opt => (
                <button key={opt.value} onClick={() => toggle(opt.value)}
                  data-testid={`multiselect-option-${opt.value}`}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-left text-[var(--color-text)] hover:bg-[var(--color-surface-raised)] transition-colors">
                  <div className="h-4 w-4 shrink-0 rounded-[var(--radius-sm)] border border-[var(--color-border)] flex items-center justify-center bg-[var(--color-surface)]">
                    {value.includes(opt.value) && <Check className="h-3 w-3 text-[var(--color-accent-1)]" />}
                  </div>
                  {opt.label}
                </button>
              ))}

              {allowFreeEntry && search.trim() && !options.find(o => o.label.toLowerCase() === search.toLowerCase()) && (
                <button onClick={addFree}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left text-[var(--color-accent-1)] hover:bg-[var(--color-accent-1-subtle)] transition-colors">
                  <span className="font-medium">+ Add</span> &ldquo;{search.trim()}&rdquo;
                </button>
              )}

              {filtered.length === 0 && !allowFreeEntry && (
                <p className="px-3 py-3 text-sm text-[var(--color-text-subtle)]">No results</p>
              )}
            </div>

            {/* Selected summary */}
            {value.length > 0 && (
              <div className="border-t border-[var(--color-border)] px-3 py-2 flex items-center justify-between">
                <span className="text-xs text-[var(--color-text-muted)]">{value.length} selected</span>
                <button onClick={() => onChange([])} className="text-xs text-[var(--color-error)] hover:underline">Clear all</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
