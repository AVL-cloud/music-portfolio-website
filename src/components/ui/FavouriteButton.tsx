'use client'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FavouriteButtonProps {
  contentType: string
  contentId: string
  isFaved?: boolean
  onToggle?: (contentType: string, contentId: string) => void
  className?: string
}

export function FavouriteButton({ contentType, contentId, isFaved, onToggle, className }: FavouriteButtonProps) {
  return (
    <button
      onClick={() => onToggle?.(contentType, contentId)}
      data-testid={`favourite-button-${contentType}-${contentId}`}
      aria-label={isFaved ? 'Remove from favourites' : 'Add to favourites'}
      aria-pressed={isFaved}
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-[var(--transition-fast)]',
        'hover:bg-[var(--color-error-subtle)]',
        isFaved ? 'text-[var(--color-error)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-error)]',
        className,
      )}
    >
      <Heart className={cn('h-4 w-4 transition-all', isFaved && 'fill-current')} />
    </button>
  )
}
