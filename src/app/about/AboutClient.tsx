'use client'
import { useState, useEffect, useCallback } from 'react'
import { Music2, Guitar, GraduationCap, Mic2, Pencil, Check, X } from 'lucide-react'
import { useAdmin } from '@/contexts/AdminContext'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'swc-about'

// Icons available for timeline items (kept to a small curated set)
const ICON_MAP = { Music2, Guitar, GraduationCap, Mic2 } as const
type IconKey = keyof typeof ICON_MAP

interface TimelineItem {
  id: string
  iconKey: IconKey
  year: string
  title: string
  body: string
}

interface AboutData {
  quote: string
  timeline: TimelineItem[]
}

const DEFAULT: AboutData = {
  quote:
    'Versatility and emotional honesty — intricate layering paired with songs that have something to say. Not genre-defined, but always narrative-driven.',
  timeline: [
    {
      id: '1',
      iconKey: 'Music2',
      year: 'Early years',
      title: 'Violin & music theory',
      body: 'First steps into music at the Conservatoire Musical de Caen — violin studies and formal music theory that shaped the ear for structure and melody.',
    },
    {
      id: '2',
      iconKey: 'GraduationCap',
      year: '2019',
      title: 'Engineering degree',
      body: 'Completed an engineering degree, temporarily setting music aside. The discipline and methodical thinking carried over into composition and production.',
    },
    {
      id: '3',
      iconKey: 'Guitar',
      year: '2019 →',
      title: 'Back to music',
      body: 'Resumed guitar, began writing original compositions in earnest, and released the first recordings independently under 2909574 Records DK.',
    },
    {
      id: '4',
      iconKey: 'Mic2',
      year: 'Present',
      title: 'Cours Florent Paris',
      body: 'Currently studying music at Cours Florent Paris — deepening performance, songwriting, and stage craft alongside an active release schedule.',
    },
  ],
}

function load(): AboutData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT
    return { ...DEFAULT, ...JSON.parse(raw) }
  } catch {
    return DEFAULT
  }
}

function save(data: AboutData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch { /* ignore */ }
}

// ── Inline text editor ────────────────────────────────────────────────────────

function InlineField({
  value,
  onSave,
  multiline = false,
  className,
}: {
  value: string
  onSave: (v: string) => void
  multiline?: boolean
  className?: string
}) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const { editMode } = useAdmin()

  if (!editMode) {
    return <span className={className}>{value}</span>
  }

  if (!editing) {
    return (
      <span className={cn('group/field relative', className)}>
        {value}
        <button
          onClick={() => { setDraft(value); setEditing(true) }}
          className="ml-1.5 inline-flex items-center justify-center h-5 w-5 rounded opacity-0 group-hover/field:opacity-100 text-[var(--color-text-subtle)] hover:text-[var(--color-accent-1)] transition-opacity"
          aria-label="Edit"
        >
          <Pencil className="h-3 w-3" />
        </button>
      </span>
    )
  }

  const sharedClass =
    'w-full rounded-[var(--radius-md)] border border-[var(--color-accent-1)] bg-[var(--color-surface)] px-2 py-1 text-[var(--color-text)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-1)] resize-none'

  return (
    <span className={cn('inline-flex flex-col gap-1.5', className)}>
      {multiline ? (
        <textarea
          autoFocus
          value={draft}
          onChange={e => setDraft(e.target.value)}
          rows={4}
          className={cn(sharedClass, 'text-sm leading-relaxed')}
        />
      ) : (
        <input
          autoFocus
          value={draft}
          onChange={e => setDraft(e.target.value)}
          className={cn(sharedClass, 'text-sm')}
        />
      )}
      <span className="flex gap-1.5">
        <button
          onClick={() => { onSave(draft); setEditing(false) }}
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-[var(--color-accent-1)] text-white"
        >
          <Check className="h-3 w-3" /> Save
        </button>
        <button
          onClick={() => setEditing(false)}
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)]"
        >
          <X className="h-3 w-3" /> Cancel
        </button>
      </span>
    </span>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function AboutClient() {
  const { editMode } = useAdmin()
  const [data, setData] = useState<AboutData>(DEFAULT)

  useEffect(() => {
    setData(load())
  }, [])

  const update = useCallback((patch: Partial<AboutData>) => {
    setData(prev => {
      const next = { ...prev, ...patch }
      save(next)
      return next
    })
  }, [])

  const updateItem = useCallback((id: string, patch: Partial<TimelineItem>) => {
    setData(prev => {
      const next = {
        ...prev,
        timeline: prev.timeline.map(item => item.id === id ? { ...item, ...patch } : item),
      }
      save(next)
      return next
    })
  }, [])

  return (
    <>
      {/* ── Themes & Sound ─────────────────────────────────────────────── */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-subtle)] mb-6">
          Themes &amp; Sound
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: 'Love',          icon: '♥' },
            { label: 'Loss',          icon: '✝' },
            { label: 'Time',          icon: '◷' },
            { label: 'Cinematic',     icon: '▶' },
            { label: 'Introspective', icon: '◈' },
            { label: 'Narrative',     icon: '❝' },
          ].map(t => (
            <span
              key={t.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-full)] border border-[var(--color-border)] text-sm text-[var(--color-text-muted)] bg-[var(--color-surface)]"
            >
              <span className="text-[var(--color-accent-1)] text-xs leading-none">{t.icon}</span>
              {t.label}
            </span>
          ))}
        </div>

        <blockquote className="border-l-2 border-[var(--color-accent-1)] pl-5 text-[var(--color-text-muted)] italic leading-relaxed">
          {editMode ? (
            <InlineField
              value={data.quote}
              onSave={v => update({ quote: v })}
              multiline
              className="w-full"
            />
          ) : (
            `"${data.quote}"`
          )}
        </blockquote>
      </section>

      {/* ── Story ──────────────────────────────────────────────────────── */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-subtle)] mb-8">
          Story
        </h2>

        <div className="relative">
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-[var(--color-border)]" aria-hidden />

          <div className="space-y-8">
            {data.timeline.map(item => {
              const Icon = ICON_MAP[item.iconKey]
              return (
                <div key={item.id} className="flex gap-5">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)] z-10">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="pt-1.5 pb-1 min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="font-semibold text-[var(--color-text)]">
                        <InlineField
                          value={item.title}
                          onSave={v => updateItem(item.id, { title: v })}
                        />
                      </h3>
                      <span className="text-xs text-[var(--color-text-subtle)]">
                        <InlineField
                          value={item.year}
                          onSave={v => updateItem(item.id, { year: v })}
                        />
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      <InlineField
                        value={item.body}
                        onSave={v => updateItem(item.id, { body: v })}
                        multiline
                        className="w-full"
                      />
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
