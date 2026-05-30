'use client'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogFooter } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { MultiSelect } from '@/components/ui/MultiSelect'
import type { Cover } from '@/components/music/CoverCard'
import type { DatasetItem } from '@/contexts/DatasetContext'

const INSTRUMENT_OPTIONS = [
  { value: 'guitar', label: 'Guitar' },
  { value: 'bass', label: 'Bass' },
  { value: 'drums', label: 'Drums' },
  { value: 'keys', label: 'Keys' },
  { value: 'vocals', label: 'Vocals' },
  { value: 'ukulele', label: 'Ukulele' },
  { value: 'violin', label: 'Violin' },
  { value: 'piano', label: 'Piano' },
]

function slugify(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

interface CoverFormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Pre-filled cover when editing; omit to create a new one. */
  initial?: Cover
  genres: DatasetItem[]
  coverTypes: DatasetItem[]
  onSave: (cover: Cover) => void
}

function emptyForm(): Cover {
  return { id: '', title: '', bandName: '', style: '', coverType: '', instruments: [], embedUrl: '', description: '', videoDate: '' }
}

export function CoverFormModal({ open, onOpenChange, initial, genres, coverTypes, onSave }: CoverFormModalProps) {
  const [form, setForm] = useState<Cover>(emptyForm())
  const [error, setError] = useState('')
  const isEdit = Boolean(initial)

  useEffect(() => {
    if (open) { setForm(initial ? { ...initial } : emptyForm()); setError('') }
  }, [open, initial])

  const set = <K extends keyof Cover>(k: K, v: Cover[K]) => setForm(f => ({ ...f, [k]: v }))

  const handleSave = () => {
    if (!form.title.trim()) { setError('Title is required'); return }
    if (!form.bandName.trim()) { setError('Band / artist is required'); return }
    const id = form.id || slugify(`${form.bandName}-${form.title}`) || `cover-${form.title}`
    onSave({ ...form, id, title: form.title.trim(), bandName: form.bandName.trim() })
    onOpenChange(false)
  }

  const styleSelectClass = 'w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-accent-1)] focus:outline-none'

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        title={isEdit ? 'Edit cover' : 'Add a cover'}
        description="Fill in the details. Add the video embed URL when ready."
        data-testid="cover-form-modal"
        className="max-w-xl max-h-[90vh] overflow-y-auto"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Title" value={form.title} onChange={e => set('title', e.target.value)}
              placeholder="Bohemian Rhapsody" data-testid="cover-form-title" />
            <Input label="Band / Artist" value={form.bandName} onChange={e => set('bandName', e.target.value)}
              placeholder="Queen" data-testid="cover-form-band" />
          </div>

          <Input label="Description" value={form.description ?? ''} onChange={e => set('description', e.target.value)}
            placeholder="A short note about this cover…" data-testid="cover-form-description" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">Genre</label>
              <select value={form.style} onChange={e => set('style', e.target.value)}
                className={styleSelectClass} data-testid="cover-form-genre">
                <option value="">—</option>
                {genres.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">Type</label>
              <select value={form.coverType} onChange={e => set('coverType', e.target.value)}
                className={styleSelectClass} data-testid="cover-form-type">
                <option value="">—</option>
                {coverTypes.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
          </div>

          <MultiSelect
            label="Instruments"
            options={INSTRUMENT_OPTIONS}
            value={form.instruments}
            onChange={v => set('instruments', v)}
            placeholder="Select instruments…"
            allowFreeEntry
            data-testid="cover-form-instruments"
          />

          <Input label="Video embed URL" value={form.embedUrl} onChange={e => set('embedUrl', e.target.value)}
            placeholder="https://www.tiktok.com/embed/…  (leave empty for now)"
            hint="TikTok / Instagram / YouTube embed URL — leave empty to upload later."
            data-testid="cover-form-embed" />

          <Input label="Video date" type="datetime-local" value={form.videoDate ?? ''}
            onChange={e => set('videoDate', e.target.value)}
            hint="Used to order the covers grid (newest first)."
            data-testid="cover-form-date" />

          {error && <p className="text-sm text-[var(--color-error)]">{error}</p>}
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)} data-testid="cover-form-cancel">Cancel</Button>
          <Button onClick={handleSave} data-testid="cover-form-save">{isEdit ? 'Save changes' : 'Add cover'}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
