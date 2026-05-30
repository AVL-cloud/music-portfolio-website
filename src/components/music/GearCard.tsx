import Image from 'next/image'
import { ImageOff } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { GearItem } from '@/lib/gear'

interface GearCardProps {
  item: GearItem
}

export function GearCard({ item }: GearCardProps) {
  return (
    <Card hover data-testid={`gear-card-${item.id}`}>
      <div className="relative aspect-square bg-[var(--color-surface-raised)]">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-6"
          />
        ) : (
          <div
            data-testid={`gear-placeholder-${item.id}`}
            className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--color-text-muted)]"
          >
            <ImageOff className="h-10 w-10 opacity-50" />
            <span className="text-xs">Photo coming soon</span>
          </div>
        )}
      </div>
      <CardContent>
        <Badge variant="accent1" className="mb-2">{item.category}</Badge>
        <h3 className="font-semibold text-[var(--color-text)] mb-1.5">{item.name}</h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
      </CardContent>
    </Card>
  )
}
