import { cn } from '@/lib/utils'

export type BadgeVariant = 'accent1' | 'accent2' | 'neutral' | 'success' | 'error' | 'warning'

interface BadgeProps {
  variant?: BadgeVariant
  className?: string
  children: React.ReactNode
  'data-testid'?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  accent1: 'bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)]',
  accent2: 'bg-[var(--color-accent-2-subtle)] text-[var(--color-accent-2)]',
  neutral: 'bg-[var(--color-surface-raised)] text-[var(--color-text-muted)]',
  success: 'bg-[var(--color-success-subtle)] text-[var(--color-success)]',
  error:   'bg-[var(--color-error-subtle)] text-[var(--color-error)]',
  warning: 'bg-[var(--color-warning-subtle)] text-[var(--color-warning)]',
}

export function Badge({ variant = 'neutral', className, children, 'data-testid': testId }: BadgeProps) {
  return (
    <span
      data-testid={testId}
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
