import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  'data-testid'?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, 'data-testid': testId, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <label htmlFor={inputId} className="inline-flex items-center gap-2.5 cursor-pointer group">
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          data-testid={testId}
          className={cn(
            'h-4 w-4 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)]',
            'accent-[var(--color-accent-1)] cursor-pointer',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-1)]',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className,
          )}
          {...props}
        />
        {label && (
          <span className="text-sm text-[var(--color-text)]">{label}</span>
        )}
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'
