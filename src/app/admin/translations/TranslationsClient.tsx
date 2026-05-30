'use client'
import { useState, useMemo, useRef, useEffect } from 'react'
import { Check, X, RotateCcw, Search, ChevronDown, ChevronRight } from 'lucide-react'
import { en } from '@/lib/i18n'
import { flattenTranslations, type TranslationEntry } from '@/lib/i18n/flatten'
import { useI18n } from '@/contexts/I18nContext'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// ─── Namespace labels ──────────────────────────────────────────────────────────
const NS_LABELS: Record<string, string> = {
  nav:      'Navigation',
  common:   'Common UI',
  admin:    'Admin',
  covers:   'Covers page',
  courses:  'Courses page',
  contact:  'Contact page',
  datasets: 'Datasets page',
  language: 'Language names',
}

// ─── Single row ────────────────────────────────────────────────────────────────
interface RowProps {
  entry: TranslationEntry
  currentValue: string
  isOverridden: boolean
  onSave: (key: string, value: string) => void
  onReset: (key: string) => void
}

function TranslationRow({ entry, currentValue, isOverridden, onSave, onReset }: RowProps) {
  const [editing, setEditing]   = useState(false)
  const [draft,   setDraft]     = useState(currentValue)
  const [flash,   setFlash]     = useState<'saved' | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Sync draft when external value changes (e.g. reset)
  useEffect(() => { if (!editing) setDraft(currentValue) }, [currentValue, editing])

  const save = () => {
    const trimmed = draft.trim()
    if (!trimmed || trimmed === entry.defaultValue) {
      onReset(entry.key)
    } else {
      onSave(entry.key, trimmed)
    }
    setEditing(false)
    setFlash('saved')
    setTimeout(() => setFlash(null), 1200)
  }

  const cancel = () => {
    setDraft(currentValue)
    setEditing(false)
  }

  const reset = () => {
    onReset(entry.key)
    setDraft(entry.defaultValue)
    setEditing(false)
  }

  const startEdit = () => {
    setDraft(currentValue)
    setEditing(true)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  return (
    <div
      data-testid={`translation-row-${entry.key}`}
      className={cn(
        'group grid grid-cols-[1fr_2fr_auto] gap-4 items-start px-4 py-2.5 transition-colors',
        'hover:bg-[var(--color-surface-raised)]',
        isOverridden && 'bg-[var(--color-accent-1-subtle)]/30',
      )}
    >
      {/* Key */}
      <div className="min-w-0 pt-0.5">
        <span className="font-mono text-xs text-[var(--color-text-muted)] break-all">
          {entry.field}
        </span>
        {isOverridden && (
          <span className="ml-1.5 text-[10px] font-medium text-[var(--color-accent-1)] bg-[var(--color-accent-1-subtle)] px-1 py-0.5 rounded">
            edited
          </span>
        )}
      </div>

      {/* Value */}
      <div className="min-w-0">
        {editing ? (
          <div className="flex items-center gap-2">
            <Input
              ref={inputRef}
              value={draft}
              onChange={e => setDraft(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') save(); if (e.key === 'Escape') cancel() }}
              className="flex-1 h-7 text-sm font-mono"
              data-testid={`translation-input-${entry.key}`}
            />
            <button onClick={save} className="p-1 rounded text-[var(--color-success)] hover:bg-[var(--color-success-subtle)] transition-colors" title="Save">
              <Check className="h-3.5 w-3.5" />
            </button>
            <button onClick={cancel} className="p-1 rounded text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] transition-colors" title="Cancel">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={startEdit}
            data-testid={`translation-edit-${entry.key}`}
            className={cn(
              'text-sm text-left w-full rounded px-1.5 py-0.5 transition-colors',
              'hover:bg-[var(--color-surface)] text-[var(--color-text)]',
              flash === 'saved' && 'text-[var(--color-success)]',
            )}
          >
            {currentValue || <span className="italic text-[var(--color-text-subtle)]">—</span>}
          </button>
        )}

        {/* Default hint when overridden */}
        {isOverridden && !editing && (
          <p className="mt-0.5 text-[11px] text-[var(--color-text-subtle)] px-1.5 line-clamp-1">
            Default: {entry.defaultValue}
          </p>
        )}
      </div>

      {/* Reset button */}
      <div className="pt-0.5 flex items-center justify-end">
        {isOverridden ? (
          <button
            onClick={reset}
            data-testid={`translation-reset-${entry.key}`}
            title="Reset to default"
            className="p-1.5 rounded text-[var(--color-text-subtle)] hover:text-[var(--color-error)] hover:bg-[var(--color-error-subtle)] transition-colors opacity-0 group-hover:opacity-100"
          >
            <RotateCcw className="h-3 w-3" />
          </button>
        ) : (
          <div className="w-7 h-7" /> /* placeholder to keep alignment */
        )}
      </div>
    </div>
  )
}

// ─── Namespace section ─────────────────────────────────────────────────────────
interface SectionProps {
  namespace: string
  entries: TranslationEntry[]
  overrides: Record<string, string>
  onSave: (key: string, value: string) => void
  onReset: (key: string) => void
}

function NamespaceSection({ namespace, entries, overrides, onSave, onReset }: SectionProps) {
  const [open, setOpen] = useState(true)
  const label = NS_LABELS[namespace] ?? namespace
  const overriddenCount = entries.filter(e => e.key in overrides).length

  return (
    <section
      data-testid={`translation-section-${namespace}`}
      className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden"
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-[var(--color-surface-raised)] hover:bg-[var(--color-surface-raised)] transition-colors text-left"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          {open ? <ChevronDown className="h-4 w-4 text-[var(--color-text-muted)] shrink-0" /> : <ChevronRight className="h-4 w-4 text-[var(--color-text-muted)] shrink-0" />}
          <span className="font-semibold text-sm text-[var(--color-text)]">{label}</span>
          <span className="text-xs text-[var(--color-text-muted)] font-mono">{namespace}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {overriddenCount > 0 && (
            <span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)]">
              {overriddenCount} edited
            </span>
          )}
          <span className="text-xs text-[var(--color-text-subtle)]">{entries.length} keys</span>
        </div>
      </button>

      {open && (
        <div className="divide-y divide-[var(--color-border)]">
          {/* Column header */}
          <div className="grid grid-cols-[1fr_2fr_auto] gap-4 px-4 py-1.5 bg-[var(--color-surface-raised)]/50 border-b border-[var(--color-border)]">
            <span className="text-[11px] font-medium text-[var(--color-text-subtle)] uppercase tracking-wide">Key</span>
            <span className="text-[11px] font-medium text-[var(--color-text-subtle)] uppercase tracking-wide">Value (English)</span>
            <div className="w-7" />
          </div>

          {entries.map(entry => (
            <TranslationRow
              key={entry.key}
              entry={entry}
              currentValue={overrides[entry.key] ?? entry.defaultValue}
              isOverridden={entry.key in overrides}
              onSave={onSave}
              onReset={onReset}
            />
          ))}
        </div>
      )}
    </section>
  )
}

// ─── Main client component ─────────────────────────────────────────────────────
export function TranslationsClient() {
  const { overrides, setOverride, resetOverride } = useI18n()
  const [search, setSearch] = useState('')

  // Flatten once — these are static defaults
  const allEntries = useMemo(() => flattenTranslations(en as unknown as Record<string, unknown>), [])

  const filtered = useMemo(() => {
    if (!search.trim()) return allEntries
    const q = search.toLowerCase()
    return allEntries.filter(e =>
      e.key.toLowerCase().includes(q) ||
      e.defaultValue.toLowerCase().includes(q) ||
      (overrides[e.key] ?? '').toLowerCase().includes(q),
    )
  }, [allEntries, search, overrides])

  // Group by namespace
  const byNamespace = useMemo(() => {
    const map = new Map<string, TranslationEntry[]>()
    for (const entry of filtered) {
      const arr = map.get(entry.namespace) ?? []
      arr.push(entry)
      map.set(entry.namespace, arr)
    }
    return map
  }, [filtered])

  const totalOverrides = Object.keys(overrides).length

  const resetAll = () => {
    for (const key of Object.keys(overrides)) resetOverride(key)
  }

  return (
    <div className="space-y-4">
      {/* Search + stats bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--color-text-muted)]" />
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search keys or values…"
            className="pl-8 h-8 text-sm"
            data-testid="translations-search"
          />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {totalOverrides > 0 && (
            <>
              <span className="text-sm text-[var(--color-text-muted)]">
                <span className="font-medium text-[var(--color-accent-1)]">{totalOverrides}</span> override{totalOverrides !== 1 ? 's' : ''}
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={resetAll}
                data-testid="translations-reset-all"
                className="text-[var(--color-error)] hover:bg-[var(--color-error-subtle)]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset all
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Namespace sections */}
      {byNamespace.size === 0 ? (
        <div className="text-center py-12 text-[var(--color-text-muted)] text-sm">
          No keys match <span className="font-medium">"{search}"</span>
        </div>
      ) : (
        Array.from(byNamespace.entries()).map(([ns, entries]) => (
          <NamespaceSection
            key={ns}
            namespace={ns}
            entries={entries}
            overrides={overrides}
            onSave={setOverride}
            onReset={resetOverride}
          />
        ))
      )}
    </div>
  )
}
