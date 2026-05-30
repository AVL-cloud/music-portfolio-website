import { FavouriteButton } from '@/components/ui/FavouriteButton'
import { cn } from '@/lib/utils'

export interface SectionPath {
  courseId: string
  chapterId: string
  sectionId: string
  courseTitle: string
  chapterTitle: string
  sectionTitle: string
}

interface SectionViewerProps {
  path: SectionPath
  content: string
  isFaved?: boolean
  onFavToggle?: (type: string, id: string, anchor?: string) => void
  className?: string
}

export function SectionViewer({ path, content, isFaved, onFavToggle, className }: SectionViewerProps) {
  const anchor = `course/${path.courseId}/chapter/${path.chapterId}/section/${path.sectionId}`

  return (
    <div data-testid={`course-section-${path.sectionId}`} className={cn('', className)}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-xs text-[var(--color-text-muted)] mb-0.5">
            {path.courseTitle} › {path.chapterTitle}
          </p>
          <h3 className="font-semibold text-[var(--color-text)]">{path.sectionTitle}</h3>
        </div>
        <FavouriteButton
          contentType="course_section"
          contentId={anchor}
          isFaved={isFaved}
          onToggle={(type, id) => onFavToggle?.(type, id, anchor)}
        />
      </div>
      <div
        className="prose prose-sm max-w-none text-[var(--color-text)] [&_a]:text-[var(--color-accent-1)] [&_code]:bg-[var(--color-surface-raised)] [&_code]:px-1 [&_code]:rounded"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
