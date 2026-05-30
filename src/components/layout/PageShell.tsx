import { cn } from '@/lib/utils'

export function PageShell({ children, className, narrow }: { children: React.ReactNode; className?: string; narrow?: boolean }) {
  return (
    <main className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8 py-12', narrow ? 'max-w-3xl' : 'max-w-7xl', className)}>
      {children}
    </main>
  )
}

interface PageHeaderProps {
  title: string
  description?: string
  actions?: React.ReactNode
  className?: string
}

export function PageHeader({ title, description, actions, className }: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10', className)}>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">{title}</h1>
        {description && <p className="mt-2 text-[var(--color-text-muted)] max-w-2xl">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  )
}
