import { Download, ExternalLink, Lock, ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FavouriteButton } from '@/components/ui/FavouriteButton'
import { cn } from '@/lib/utils'

export interface Tab {
  id: string
  title: string
  bandName: string
  style: string
  instruments: string[]
  difficulty?: string
  access: 'free' | 'member' | 'paid' | 'external'
  priceCents?: number
  externalUrl?: string
}

interface TabRowProps {
  tab: Tab
  isFaved?: boolean
  onFavToggle?: (type: string, id: string) => void
  onDownload?: (id: string) => void
  onBuy?: (id: string) => void
  className?: string
}

const accessConfig = {
  free:     { label: 'Free',    variant: 'success'  as const, Icon: Download },
  member:   { label: 'Members', variant: 'accent1'  as const, Icon: Lock },
  paid:     { label: 'Paid',    variant: 'accent2'  as const, Icon: ShoppingCart },
  external: { label: 'UG',      variant: 'neutral'  as const, Icon: ExternalLink },
}

export function TabRow({ tab, isFaved, onFavToggle, onDownload, onBuy, className }: TabRowProps) {
  const { label, variant, Icon } = accessConfig[tab.access]

  const handleAction = () => {
    if (tab.access === 'free' || tab.access === 'member') onDownload?.(tab.id)
    else if (tab.access === 'paid') onBuy?.(tab.id)
    else if (tab.externalUrl) window.open(tab.externalUrl, '_blank')
  }

  return (
    <div data-testid={`tab-row-${tab.id}`}
      className={cn('flex items-center gap-4 px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-strong)] transition-colors', className)}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-medium text-sm text-[var(--color-text)] truncate">{tab.title}</span>
          <Badge variant={variant}>{label}</Badge>
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs text-[var(--color-text-muted)]">
          <span>{tab.bandName}</span>
          <span className="text-[var(--color-text-subtle)]">·</span>
          <span>{tab.style}</span>
          {tab.instruments.map(i => (
            <span key={i}><span className="text-[var(--color-text-subtle)]">·</span> {i}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <FavouriteButton contentType="tab" contentId={tab.id} isFaved={isFaved} onToggle={onFavToggle} />
        <Button size="sm" variant={tab.access === 'paid' ? 'primary' : 'secondary'} onClick={handleAction}
          data-testid={`tab-download-button-${tab.id}`}>
          <Icon className="h-3.5 w-3.5" />
          {tab.access === 'paid' && tab.priceCents ? `€${(tab.priceCents / 100).toFixed(2)}` : label}
        </Button>
      </div>
    </div>
  )
}
