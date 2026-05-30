import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: React.ReactNode
  hover?: boolean
  'data-testid'?: string
}

interface SectionProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className, children, hover, 'data-testid': testId }: CardProps) {
  return (
    <div
      data-testid={testId}
      className={cn(
        'bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-sm)]',
        hover && 'transition-shadow duration-[var(--transition-base)] hover:shadow-[var(--shadow-md)] hover:border-[var(--color-border-strong)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CardImage({ className, children }: SectionProps) {
  return <div className={cn('relative overflow-hidden', className)}>{children}</div>
}

export function CardContent({ className, children }: SectionProps) {
  return <div className={cn('p-5', className)}>{children}</div>
}

export function CardFooter({ className, children }: SectionProps) {
  return <div className={cn('px-5 pb-5 pt-0 flex items-center gap-2', className)}>{children}</div>
}
