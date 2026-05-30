import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  'data-testid'?: string
}

export function Skeleton({ className, 'data-testid': testId }: SkeletonProps) {
  return (
    <div
      data-testid={testId}
      className={cn('animate-pulse rounded-[var(--radius-md)] bg-[var(--color-surface-raised)]', className)}
    />
  )
}
