'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Heart, Pencil, Check, X } from 'lucide-react'
import { useAdmin } from '@/contexts/AdminContext'
import { useNotifications } from '@/contexts/NotificationContext'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import type { ChapterWithSlugs } from '@/lib/courses'

interface ChapterClientProps {
  chapter: ChapterWithSlugs
}

function SectionItem({
  section,
  chapterTitle,
  partLabel,
  index,
}: {
  section: ChapterWithSlugs['sections'][number]
  chapterTitle: string
  partLabel: string
  index: number
}) {
  const { editMode } = useAdmin()
  const [open, setOpen] = useState(index === 0)
  const [faved, setFaved] = useState(false)
  const [editingContent, setEditingContent] = useState(false)
  const [draft, setDraft] = useState(section.content)

  const anchor = `courses/${section.slug}`

  return (
    <div
      data-testid={`course-section-${section.slug}`}
      className={cn(
        'rounded-[var(--radius-lg)] border transition-colors',
        open ? 'border-[var(--color-accent-1)]/40 bg-[var(--color-surface)]' : 'border-[var(--color-border)] bg-[var(--color-surface)]',
      )}
    >
      {/* Section header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
        data-testid={`section-toggle-${section.slug}`}
      >
        <span className={cn(
          'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold border',
          open
            ? 'bg-[var(--color-accent-1)] border-[var(--color-accent-1)] text-white'
            : 'border-[var(--color-border)] text-[var(--color-text-muted)]',
        )}>
          {section.order}
        </span>
        <span className={cn('flex-1 text-sm font-medium', open ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]')}>
          {section.title}
        </span>
        <div className="flex items-center gap-1 shrink-0">
          {/* Favourite */}
          <button
            onClick={e => { e.stopPropagation(); setFaved(f => !f) }}
            data-testid={`favourite-button-course_section-${anchor}`}
            aria-label={faved ? 'Remove from favourites' : 'Add to favourites'}
            className={cn(
              'flex h-7 w-7 items-center justify-center rounded-full transition-colors',
              faved ? 'text-[var(--color-error)]' : 'text-[var(--color-text-subtle)] hover:text-[var(--color-error)]',
            )}
          >
            <Heart className={cn('h-3.5 w-3.5', faved && 'fill-current')} />
          </button>
          {open ? <ChevronUp className="h-4 w-4 text-[var(--color-text-muted)]" /> : <ChevronDown className="h-4 w-4 text-[var(--color-text-muted)]" />}
        </div>
      </button>

      {/* Section content */}
      {open && (
        <div className="px-4 pb-5 border-t border-[var(--color-border)]">
          {editMode && !editingContent && (
            <div className="flex justify-end pt-3 pb-1">
              <button
                onClick={() => setEditingContent(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-md)] text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-raised)] transition-colors"
                data-testid={`section-edit-${section.slug}`}
              >
                <Pencil className="h-3.5 w-3.5" /> Edit content
              </button>
            </div>
          )}

          {editMode && editingContent ? (
            <div className="pt-3 space-y-3">
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                className="w-full min-h-[200px] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-sm font-mono text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)] resize-y"
                data-testid={`section-content-editor-${section.slug}`}
                placeholder="HTML content…"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingContent(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-xs font-medium bg-[var(--color-accent-1)] text-white hover:bg-[var(--color-accent-1-hover)] transition-colors"
                >
                  <Check className="h-3.5 w-3.5" /> Save
                </button>
                <button
                  onClick={() => { setDraft(section.content); setEditingContent(false) }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-xs font-medium text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] transition-colors"
                >
                  <X className="h-3.5 w-3.5" /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <div
              className={cn(
                'mt-4 text-sm text-[var(--color-text)] leading-relaxed space-y-3',
                '[&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-[var(--color-text)] [&_h2]:mt-4 [&_h2]:mb-2',
                '[&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-[var(--color-text)] [&_h3]:mt-3 [&_h3]:mb-1',
                '[&_p]:text-[var(--color-text-muted)] [&_p]:leading-relaxed',
                '[&_strong]:text-[var(--color-text)] [&_strong]:font-semibold',
                '[&_a]:text-[var(--color-accent-1)] [&_a]:hover:underline',
                '[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1',
                '[&_li]:text-[var(--color-text-muted)]',
              )}
              dangerouslySetInnerHTML={{ __html: draft }}
            />
          )}
        </div>
      )}
    </div>
  )
}

export function ChapterClient({ chapter }: ChapterClientProps) {
  return (
    <div data-testid={`chapter-sections-${chapter.slug}`} className="space-y-2">
      {chapter.sections.map((section, i) => (
        <SectionItem
          key={section.slug}
          section={section}
          chapterTitle={chapter.title}
          partLabel={chapter.part}
          index={i}
        />
      ))}
    </div>
  )
}
