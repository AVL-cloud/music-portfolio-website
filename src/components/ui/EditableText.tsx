'use client'
import { useState, useRef, useEffect } from 'react'
import { Pencil, Check, X } from 'lucide-react'
import { useAdmin } from '@/contexts/AdminContext'
import { cn } from '@/lib/utils'

type Tag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div'

interface EditableTextProps {
  value: string
  onSave?: (value: string) => Promise<void>
  as?: Tag
  multiline?: boolean
  placeholder?: string
  className?: string
  'data-testid'?: string
}

export function EditableText({
  value,
  onSave,
  as: Tag = 'p',
  multiline = false,
  placeholder = 'Click to edit…',
  className,
  'data-testid': testId,
}: EditableTextProps) {
  const { editMode } = useAdmin()
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const [saving, setSaving] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null)

  // sync external value changes
  useEffect(() => { setDraft(value) }, [value])

  useEffect(() => {
    if (editing) inputRef.current?.focus()
  }, [editing])

  const save = async () => {
    if (draft === value) { setEditing(false); return }
    setSaving(true)
    try {
      await onSave?.(draft)
      setEditing(false)
    } finally {
      setSaving(false)
    }
  }

  const cancel = () => { setDraft(value); setEditing(false) }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') cancel()
    if (e.key === 'Enter' && !multiline && !e.shiftKey) { e.preventDefault(); save() }
  }

  if (!editMode) {
    return <Tag data-testid={testId} className={className}>{value}</Tag>
  }

  if (editing) {
    return (
      <div className="relative" data-testid={testId ? `${testId}-editing` : undefined}>
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={handleKey}
            placeholder={placeholder}
            rows={3}
            className={cn(
              'w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-1)] bg-[var(--color-surface)]',
              'px-3 py-2 text-[var(--color-text)] resize-y focus:outline-none',
              className,
            )}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={handleKey}
            placeholder={placeholder}
            className={cn(
              'w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-1)] bg-[var(--color-surface)]',
              'px-3 py-1.5 text-[var(--color-text)] focus:outline-none',
              className,
            )}
          />
        )}
        <div className="flex gap-1.5 mt-1.5">
          <button
            onClick={save}
            disabled={saving}
            data-testid={testId ? `${testId}-save` : undefined}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[var(--radius-md)] text-xs font-medium bg-[var(--color-accent-1)] text-white hover:bg-[var(--color-accent-1-hover)] disabled:opacity-50 transition-colors"
          >
            <Check className="h-3 w-3" />{saving ? 'Saving…' : 'Save'}
          </button>
          <button
            onClick={cancel}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[var(--radius-md)] text-xs font-medium text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] transition-colors"
          >
            <X className="h-3 w-3" />Cancel
          </button>
        </div>
      </div>
    )
  }

  // Edit mode, not yet editing: show text with pencil icon on hover
  return (
    <div className="group relative inline-flex items-start gap-1.5 w-full" data-testid={testId}>
      <Tag className={cn('flex-1', className)}>
        {value || <span className="text-[var(--color-text-subtle)] italic">{placeholder}</span>}
      </Tag>
      <button
        onClick={() => setEditing(true)}
        data-testid={testId ? `${testId}-edit-btn` : undefined}
        title="Edit"
        className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 flex h-6 w-6 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)] hover:text-white transition-all"
      >
        <Pencil className="h-3 w-3" />
      </button>
    </div>
  )
}
