'use client'
import { GearCard } from '@/components/music/GearCard'
import { PageHeader } from '@/components/layout/PageShell'
import { useI18n } from '@/contexts/I18nContext'
import { gear, GEAR_SECTIONS } from '@/lib/gear'

export function GearClient() {
  const { t } = useI18n()

  return (
    <div data-testid="gear-page">
      <PageHeader title={t.gear.title} description={t.gear.description} />

      <div className="space-y-14">
        {GEAR_SECTIONS.map(section => {
          const items = gear.filter(g => g.section === section)
          if (!items.length) return null
          return (
            <section key={section} data-testid={`gear-section-${section}`}>
              <h2 className="mb-5 text-xl font-semibold text-[var(--color-text)]">
                {t.gear[section]}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map(item => (
                  <GearCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
