'use client'
import { useState } from 'react'
import { Pencil, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface PersonalNoteProps {
  content: string
  isAdmin?: boolean
  onSave?: (html: string) => Promise<void>
  className?: string
}

export function PersonalNote({ content, isAdmin, onSave, className }: PersonalNoteProps) {
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [draft, setDraft] = useState(content)

  const save = async () => {
    if (!onSave) return
    setSaving(true)
    try { await onSave(draft); setEditing(false) }
    finally { setSaving(false) }
  }

  return (
    <div data-testid="personal-note" className={cn('relative', className)}>
      {isAdmin && !editing && (
        <button onClick={() => setEditing(true)} data-testid="personal-note-edit"
          className="absolute top-0 right-0 flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-md)] text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-raised)] transition-colors">
          <Pencil className="h-3.5 w-3.5" /> Edit
        </button>
      )}
      {editing ? (
        <div className="space-y-3">
          <textarea value={draft} onChange={e => setDraft(e.target.value)} data-testid="personal-note-editor"
            className="w-full min-h-[120px] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)] resize-y"
            placeholder="Write a note for your visitors…" />
          <div className="flex gap-2">
            <Button size="sm" onClick={save} loading={saving} data-testid="personal-note-save">
              <Check className="h-3.5 w-3.5" /> Save
            </Button>
            <Button size="sm" variant="ghost" onClick={() => { setDraft(content); setEditing(false) }} data-testid="personal-note-cancel">
              <X className="h-3.5 w-3.5" /> Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-[var(--color-text-muted)] leading-relaxed [&_a]:text-[var(--color-accent-1)] [&_strong]:text-[var(--color-text)]"
          dangerouslySetInnerHTML={{ __html: content || '<p>No note yet.</p>' }} />
      )}
    </div>
  )
}
