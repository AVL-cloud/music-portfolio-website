'use client'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <RadixTooltip.Provider delayDuration={300}>{children}</RadixTooltip.Provider>
}

interface TooltipProps {
  content: string
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  'data-testid'?: string
}

export function Tooltip({ content, children, side = 'top', 'data-testid': testId }: TooltipProps) {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          data-testid={testId}
          side={side}
          sideOffset={6}
          className={cn(
            'z-50 px-2.5 py-1.5 text-xs font-medium rounded-[var(--radius-md)]',
            'bg-[var(--color-text)] text-[var(--color-bg)] shadow-[var(--shadow-md)]',
            'animate-in fade-in-0 zoom-in-95',
          )}
        >
          {content}
          <RadixTooltip.Arrow className="fill-[var(--color-text)]" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}
