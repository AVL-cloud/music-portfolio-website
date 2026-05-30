'use client'
import * as RadixTabs from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

export const Tabs = RadixTabs.Root

export function TabsList({ className, children, 'data-testid': testId }: { className?: string; children: React.ReactNode; 'data-testid'?: string }) {
  return (
    <RadixTabs.List
      data-testid={testId}
      className={cn('flex gap-1 border-b border-[var(--color-border)] mb-6', className)}
    >
      {children}
    </RadixTabs.List>
  )
}

export function TabsTrigger({ value, className, children, 'data-testid': testId }: { value: string; className?: string; children: React.ReactNode; 'data-testid'?: string }) {
  return (
    <RadixTabs.Trigger
      value={value}
      data-testid={testId}
      className={cn(
        'px-4 py-2.5 text-sm font-medium text-[var(--color-text-muted)] border-b-2 border-transparent -mb-px',
        'transition-colors duration-[var(--transition-fast)] hover:text-[var(--color-text)]',
        'data-[state=active]:text-[var(--color-accent-1)] data-[state=active]:border-[var(--color-accent-1)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-1)]',
        className,
      )}
    >
      {children}
    </RadixTabs.Trigger>
  )
}

export function TabsContent({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  return <RadixTabs.Content value={value} className={cn('focus:outline-none', className)}>{children}</RadixTabs.Content>
}
