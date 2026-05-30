import { Lock, BookOpen } from 'lucide-react'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { FavouriteButton } from '@/components/ui/FavouriteButton'

export interface CourseData {
  id: string
  title: string
  description: string
  thumbnailUrl?: string
  chapterCount?: number
}

interface CourseCardProps {
  course: CourseData
  locked?: boolean
  isFaved?: boolean
  onFavToggle?: (type: string, id: string) => void
}

export function CourseCard({ course, locked, isFaved, onFavToggle }: CourseCardProps) {
  return (
    <Card hover data-testid={`course-card-${course.id}`}>
      <CardImage className="aspect-video bg-[var(--color-surface-raised)]">
        {course.thumbnailUrl
          ? <img src={course.thumbnailUrl} alt={course.title} className="h-full w-full object-cover" />
          : <div className="h-full w-full flex items-center justify-center"><BookOpen className="h-10 w-10 text-[var(--color-text-subtle)]" /></div>
        }
        {locked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <Lock className="h-8 w-8 text-white" />
          </div>
        )}
        <div className="absolute top-2 right-2">
          <FavouriteButton contentType="course" contentId={course.id} isFaved={isFaved} onToggle={onFavToggle} />
        </div>
      </CardImage>
      <CardContent>
        <h3 className="font-semibold text-[var(--color-text)] mb-1">{course.title}</h3>
        <p className="text-sm text-[var(--color-text-muted)] line-clamp-2 mb-2">{course.description}</p>
        {course.chapterCount && (
          <p className="text-xs text-[var(--color-text-subtle)]">{course.chapterCount} chapters</p>
        )}
      </CardContent>
    </Card>
  )
}
