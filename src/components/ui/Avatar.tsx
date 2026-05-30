import { cn } from '@/lib/utils'

interface AvatarProps {
  src?: string | null
  name?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  'data-testid'?: string
}

const sizeClasses = { sm: 'h-7 w-7 text-xs', md: 'h-9 w-9 text-sm', lg: 'h-12 w-12 text-base' }

function initials(name?: string) {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
}

export function Avatar({ src, name, size = 'md', className, 'data-testid': testId }: AvatarProps) {
  return (
    <div
      data-testid={testId}
      className={cn(
        'rounded-full overflow-hidden bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)]',
        'flex items-center justify-center font-semibold shrink-0',
        sizeClasses[size],
        className,
      )}
    >
      {src
        ? <img src={src} alt={name ?? 'avatar'} className="h-full w-full object-cover" />
        : <span>{initials(name)}</span>
      }
    </div>
  )
}
