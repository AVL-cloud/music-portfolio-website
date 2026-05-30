'use client'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogFooter } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { MultiSelect } from '@/components/ui/MultiSelect'
import { FileDropzone } from '@/components/ui/FileDropzone'

const GENRE_OPTIONS = [
  { value: 'rock', label: 'Rock' },
  { value: 'metal', label: 'Metal' },
  { value: 'pop', label: 'Pop' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'blues', label: 'Blues' },
  { value: 'acoustic', label: 'Acoustic' },
  { value: 'classical', label: 'Classical' },
  { value: 'electronic', label: 'Electronic' },
  { value: 'folk', label: 'Folk' },
  { value: 'country', label: 'Country' },
  { value: 'rnb', label: 'R&B' },
  { value: 'hiphop', label: 'Hip-Hop' },
  { value: 'progressive', label: 'Progressive' },
  { value: 'ambient', label: 'Ambient' },
  { value: 'experimental', label: 'Experimental' },
]

const TAG_OPTIONS = [
  { value: 'acoustic', label: 'acoustic' },
  { value: 'solo', label: 'solo' },
  { value: 'fingerpicking', label: 'fingerpicking' },
  { value: 'live', label: 'live' },
  { value: 'original', label: 'original' },
  { value: 'looper', label: 'looper' },
  { value: 'improv', label: 'improv' },
  { value: 'vertical', label: 'vertical' },
  { value: 'reel', label: 'reel' },
]

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

interface AddCoverForm {
  files: File[]
  title: string
  bandName: string
  genres: string[]
  tags: string[]
  instruments: string[]
  videoDate: string
}

const defaultForm = (): AddCoverForm => ({
  files: [],
  title: '',
  bandName: '',
  genres: [],
  tags: [],
  instruments: [],
  videoDate: new Date().toISOString().slice(0, 16),
})

interface AddCoverModalProps {
  onSubmit?: (form: AddCoverForm) => Promise<void>
}

export function AddCoverModal({ onSubmit }: AddCoverModalProps) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<AddCoverForm>(defaultForm())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = <K extends keyof AddCoverForm>(k: K, v: AddCoverForm[K]) =>
    setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.title.trim()) { setError('Title is required'); return }
    if (!form.bandName.trim()) { setError('Band name is required'); return }
    setError('')
    setLoading(true)
    try {
      await onSubmit?.(form)
      setOpen(false)
      setForm(defaultForm())
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} data-testid="add-cover-button" size="sm">
        <Plus className="h-4 w-4" />
        Add Cover
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          title="Add a Cover"
          description="Upload a video and fill in the details."
          data-testid="add-cover-modal"
          className="max-w-xl max-h-[90vh] overflow-y-auto"
        >
          <div className="space-y-5">
            <FileDropzone
              label="Video file"
              accept="video/mp4"
              multiple
              files={form.files}
              onFiles={f => set('files', [...form.files, ...f])}
              onRemove={i => set('files', form.files.filter((_, idx) => idx !== i))}
              hint="MP4 · portrait format recommended · 1–2 files"
              data-testid="add-cover-dropzone"
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Title"
                value={form.title}
                onChange={e => set('title', e.target.value)}
                placeholder="Comfortably Numb"
                data-testid="add-cover-title"
              />
              <Input
                label="Band / Artist"
                value={form.bandName}
                onChange={e => set('bandName', e.target.value)}
                placeholder="Pink Floyd"
                data-testid="add-cover-band"
              />
            </div>

            <MultiSelect
              label="Genres"
              options={GENRE_OPTIONS}
              value={form.genres}
              onChange={v => set('genres', v)}
              placeholder="Select genres…"
              searchPlaceholder="Search genres…"
              data-testid="add-cover-genres"
            />

            <MultiSelect
              label="Cover tags"
              options={TAG_OPTIONS}
              value={form.tags}
              onChange={v => set('tags', v)}
              placeholder="acoustic, solo, fingerpicking…"
              searchPlaceholder="Search or add tag…"
              allowFreeEntry
              data-testid="add-cover-tags"
            />

            <MultiSelect
              label="Instruments"
              options={INSTRUMENT_OPTIONS}
              value={form.instruments}
              onChange={v => set('instruments', v)}
              placeholder="Select instruments…"
              data-testid="add-cover-instruments"
            />

            <Input
              label="Video date"
              type="datetime-local"
              value={form.videoDate}
              onChange={e => set('videoDate', e.target.value)}
              hint="Defaults to now — change for older videos"
              data-testid="add-cover-date"
            />

            {error && <p className="text-sm text-[var(--color-error)]">{error}</p>}
          </div>

          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)} data-testid="add-cover-cancel">
              Cancel
            </Button>
            <Button onClick={handleSubmit} loading={loading} data-testid="add-cover-submit">
              Add Cover
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
