'use client'
import { useRef, useState } from 'react'
import { Upload, Film, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileDropzoneProps {
  accept?: string
  multiple?: boolean
  onFiles: (files: File[]) => void
  files?: File[]
  onRemove?: (index: number) => void
  label?: string
  hint?: string
  className?: string
  'data-testid'?: string
}

function fmtSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function FileDropzone({ accept = 'video/mp4', multiple = false, onFiles, files = [], onRemove, label, hint, className, 'data-testid': testId }: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const dropped = Array.from(e.dataTransfer.files).filter(f => accept ? f.type.startsWith(accept.replace('/*', '').replace('*', '')) || f.name.match(/\.mp4$/i) : true)
    if (dropped.length) onFiles(dropped)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) onFiles(Array.from(e.target.files))
  }

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label && <span className="text-sm font-medium text-[var(--color-text)]">{label}</span>}

      {/* Drop zone */}
      <div
        data-testid={testId}
        onDragOver={e => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={cn(
          'flex flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border-2 border-dashed',
          'px-6 py-8 cursor-pointer transition-colors text-center',
          dragging
            ? 'border-[var(--color-accent-1)] bg-[var(--color-accent-1-subtle)]'
            : 'border-[var(--color-border)] bg-[var(--color-surface-raised)] hover:border-[var(--color-accent-1)] hover:bg-[var(--color-accent-1-subtle)]',
        )}
      >
        <div className={cn('flex h-12 w-12 items-center justify-center rounded-full', dragging ? 'bg-[var(--color-accent-1)] text-white' : 'bg-[var(--color-surface)] text-[var(--color-text-muted)]')}>
          <Upload className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--color-text)]">
            Drop your video here, or <span className="text-[var(--color-accent-1)]">browse</span>
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{hint ?? 'MP4 · portrait format recommended'}</p>
        </div>
        <input ref={inputRef} type="file" accept={accept} multiple={multiple} onChange={handleChange} className="hidden" />
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((f, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)]">
                <Film className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--color-text)] truncate">{f.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{fmtSize(f.size)}</p>
              </div>
              {onRemove && (
                <button onClick={e => { e.stopPropagation(); onRemove(i) }}
                  className="shrink-0 text-[var(--color-text-muted)] hover:text-[var(--color-error)] transition-colors">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
