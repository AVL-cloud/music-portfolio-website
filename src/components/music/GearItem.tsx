import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export interface GearItemData {
  id: string
  name: string
  brand: string
  category: string
  description: string
  imageUrl?: string
  purchaseUrl?: string
}

export function GearItem({ item, className }: { item: GearItemData; className?: string }) {
  return (
    <div data-testid={`gear-item-${item.id}`}
      className={cn('flex gap-4 p-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]', className)}>
      {item.imageUrl && (
        <div className="shrink-0 h-20 w-20 rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-surface-raised)]">
          <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 mb-1">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-[var(--color-text)]">{item.name}</h3>
            <p className="text-xs text-[var(--color-text-muted)]">{item.brand}</p>
          </div>
          <Badge variant="neutral" className="shrink-0">{item.category}</Badge>
        </div>
        <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">{item.description}</p>
        {item.purchaseUrl && (
          <a href={item.purchaseUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 text-xs text-[var(--color-accent-1)] hover:underline">
            View <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  )
}
