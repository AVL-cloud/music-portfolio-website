'use client'
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  'data-testid'?: string
}

export function Pagination({ page, totalPages, onPageChange, className, 'data-testid': testId }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const visible = pages.filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)

  return (
    <nav data-testid={testId} className={cn('flex items-center gap-1', className)} aria-label="Pagination">
      <button
        onClick={() => onPageChange(1)}
        disabled={page <= 1}
        aria-label="First page"
        className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronFirst className="h-4 w-4" />
      </button>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {visible.map((p, i) => {
        const prev = visible[i - 1]
        const showEllipsis = prev && p - prev > 1
        return (
          <span key={p} className="flex items-center gap-1">
            {showEllipsis && <span className="px-1 text-[var(--color-text-muted)] text-sm">…</span>}
            <button
              onClick={() => onPageChange(p)}
              aria-current={p === page ? 'page' : undefined}
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] text-sm font-medium transition-colors',
                p === page
                  ? 'bg-[var(--color-accent-1)] text-white'
                  : 'border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface-raised)]',
              )}
            >
              {p}
            </button>
          </span>
        )
      })}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={page >= totalPages}
        aria-label="Last page"
        className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLast className="h-4 w-4" />
      </button>
    </nav>
  )
}
