'use client'
import { useState, useRef, useEffect } from 'react'
import { Plus, Pencil, Trash2, Check, X, GripVertical } from 'lucide-react'
import type { DatasetItem } from '@/contexts/DatasetContext'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/utils'
import { useI18n } from '@/contexts/I18nContext'

interface DatasetListProps {
  title: string
  description: string
  items: DatasetItem[]
  onChange: (items: DatasetItem[]) => void
  'data-testid'?: string
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function DatasetList({ title, description, items, onChange, 'data-testid': testId }: DatasetListProps) {
  const { t } = useI18n()
  const ds = t.datasets

  const [newLabel, setNewLabel] = useState('')
  const [editingIdx, setEditingIdx] = useState<number | null>(null)
  const [editLabel, setEditLabel] = useState('')
  const [deleteConfirmIdx, setDeleteConfirmIdx] = useState<number | null>(null)
  const [justSaved, setJustSaved] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Flash "saved" indicator after change
  const commit = (next: DatasetItem[]) => {
    onChange(next)
    setJustSaved(true)
    setTimeout(() => setJustSaved(false), 1500)
  }

  const addItem = () => {
    const label = newLabel.trim()
    if (!label) return
    const value = slugify(label)
    if (items.some(i => i.value === value)) return
    commit([...items, { value, label }])
    setNewLabel('')
    inputRef.current?.focus()
  }

  const startEdit = (idx: number) => {
    setEditingIdx(idx)
    setEditLabel(items[idx].label)
    setDeleteConfirmIdx(null)
  }

  const confirmEdit = () => {
    if (editingIdx === null) return
    const label = editLabel.trim()
    if (!label) { setEditingIdx(null); return }
    const next = items.map((item, i) =>
      i === editingIdx ? { value: slugify(label), label } : item,
    )
    commit(next)
    setEditingIdx(null)
  }

  const cancelEdit = () => setEditingIdx(null)

  const deleteItem = (idx: number) => {
    commit(items.filter((_, i) => i !== idx))
    setDeleteConfirmIdx(null)
  }

  // Keyboard: confirm edit on Enter, cancel on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (editingIdx === null) return
      if (e.key === 'Enter')  confirmEdit()
      if (e.key === 'Escape') cancelEdit()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  return (
    <section
      data-testid={testId}
      className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]">
        <div>
          <h2 className="text-base font-semibold text-[var(--color-text)]">{title}</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{description}</p>
        </div>
        <span className={cn(
          'text-xs font-medium px-2 py-0.5 rounded-full transition-colors shrink-0 mt-0.5',
          justSaved
            ? 'bg-[var(--color-success-subtle)] text-[var(--color-success)]'
            : 'bg-[var(--color-surface)] text-[var(--color-text-subtle)] border border-[var(--color-border)]',
        )}>
          {justSaved ? ds.saved : `${items.length} ${t.common.items}`}
        </span>
      </div>

      {/* Add row */}
      <div className="flex gap-2 px-5 py-3 border-b border-[var(--color-border)]">
        <Input
          ref={inputRef}
          value={newLabel}
          onChange={e => setNewLabel(e.target.value)}
          placeholder={ds.addItemPlaceholder}
          onKeyDown={e => e.key === 'Enter' && addItem()}
          className="flex-1 h-8 text-sm"
          data-testid={`${testId}-add-input`}
        />
        <Button
          size="sm"
          onClick={addItem}
          disabled={!newLabel.trim()}
          data-testid={`${testId}-add-btn`}
        >
          <Plus className="h-3.5 w-3.5" />
          {ds.addItem}
        </Button>
      </div>

      {/* Items */}
      {items.length === 0 ? (
        <p className="px-5 py-6 text-sm text-[var(--color-text-muted)] text-center italic">
          {ds.emptyList}
        </p>
      ) : (
        <ul className="divide-y divide-[var(--color-border)]">
          {items.map((item, idx) => (
            <li
              key={item.value}
              data-testid={`${testId}-item-${item.value}`}
              className="flex items-center gap-3 px-5 py-2.5 group hover:bg-[var(--color-surface-raised)] transition-colors"
            >
              <GripVertical className="h-4 w-4 text-[var(--color-text-subtle)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 cursor-grab" />

              {editingIdx === idx ? (
                <div className="flex items-center gap-2 flex-1">
                  <Input
                    autoFocus
                    value={editLabel}
                    onChange={e => setEditLabel(e.target.value)}
                    className="flex-1 h-7 text-sm"
                    data-testid={`${testId}-edit-input-${item.value}`}
                  />
                  <button
                    onClick={confirmEdit}
                    className="p-1 rounded text-[var(--color-success)] hover:bg-[var(--color-success-subtle)] transition-colors"
                    title={t.common.save}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="p-1 rounded text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] transition-colors"
                    title={t.common.cancel}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-[var(--color-text)]">{item.label}</span>
                    <span className="ml-2 text-xs text-[var(--color-text-subtle)] font-mono">{item.value}</span>
                  </div>

                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {deleteConfirmIdx === idx ? (
                      <>
                        <span className="text-xs text-[var(--color-error)] mr-1">{ds.deleteConfirm}</span>
                        <button
                          onClick={() => deleteItem(idx)}
                          data-testid={`${testId}-delete-confirm-${item.value}`}
                          className="px-2 py-1 rounded text-xs font-medium bg-[var(--color-error)] text-white hover:opacity-90 transition-opacity"
                        >
                          {t.common.confirm}
                        </button>
                        <button
                          onClick={() => setDeleteConfirmIdx(null)}
                          className="px-2 py-1 rounded text-xs font-medium text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] transition-colors"
                        >
                          {t.common.cancel}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => startEdit(idx)}
                          data-testid={`${testId}-edit-${item.value}`}
                          className="p-1.5 rounded text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
                          title={ds.renameItem}
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirmIdx(idx)}
                          data-testid={`${testId}-delete-${item.value}`}
                          className="p-1.5 rounded text-[var(--color-text-muted)] hover:text-[var(--color-error)] hover:bg-[var(--color-error-subtle)] transition-colors"
                          title={ds.deleteItem}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
