'use client'
import { useState, useMemo } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { CoverCard, type Cover } from '@/components/music/CoverCard'
import { AddCoverModal } from '@/components/music/AddCoverModal'
import { FilterBar } from '@/components/ui/FilterBar'
import { Pagination } from '@/components/ui/Pagination'
import { Button } from '@/components/ui/Button'
import { PageHeader } from '@/components/layout/PageShell'
import { useI18n } from '@/contexts/I18nContext'
import { useDataset } from '@/contexts/DatasetContext'

// Instrument list is static (not a managed dataset yet)
const INSTRUMENT_OPTIONS = [
  { value: 'guitar', label: 'Guitar' },
  { value: 'bass',   label: 'Bass' },
  { value: 'keys',   label: 'Keys' },
  { value: 'vocals', label: 'Vocals' },
]

const PER_PAGE = 12

interface CoversClientProps {
  covers: Cover[]
  isAdmin?: boolean
  favedIds?: string[]
  onFavToggle?: (type: string, id: string) => void
  onDelete?: (id: string) => void
}

export function CoversClient({ covers, isAdmin, favedIds = [], onFavToggle, onDelete }: CoversClientProps) {
  const { t } = useI18n()
  const { genres, coverTypes } = useDataset()

  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Record<string, string[]>>({})
  const [page, setPage] = useState(1)

  const filterGroups = useMemo(() => [
    { key: 'genre',      label: t.covers.filterGenre,      options: genres },
    { key: 'coverType',  label: t.covers.filterType,       options: coverTypes },
    { key: 'instrument', label: t.covers.filterInstrument, options: INSTRUMENT_OPTIONS },
  ], [genres, coverTypes, t])

  const filtered = useMemo(() => {
    return covers.filter(c => {
      if (search && !c.title.toLowerCase().includes(search.toLowerCase()) && !c.bandName.toLowerCase().includes(search.toLowerCase())) return false
      for (const [key, vals] of Object.entries(selected)) {
        if (!vals.length) continue
        if (key === 'genre' && !vals.some(v => c.style === v)) return false
        if (key === 'coverType' && !vals.some(v => c.coverType === v)) return false
        if (key === 'instrument' && !vals.some(v => c.instruments.includes(v))) return false
      }
      return true
    })
  }, [covers, search, selected])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const toggle = (groupKey: string, value: string) => {
    setSelected(s => {
      const cur = s[groupKey] ?? []
      return { ...s, [groupKey]: cur.includes(value) ? cur.filter(v => v !== value) : [...cur, value] }
    })
    setPage(1)
  }

  const clear = () => { setSelected({}); setSearch(''); setPage(1) }

  return (
    <div data-testid="covers-page">
      <PageHeader
        title={t.covers.title}
        description={t.covers.description}
        actions={isAdmin ? <AddCoverModal onSubmit={async () => {}} /> : undefined}
      />

      <FilterBar
        groups={filterGroups}
        selected={selected}
        search={search}
        onSearchChange={v => { setSearch(v); setPage(1) }}
        onToggle={toggle}
        onClear={clear}
        className="mb-8"
        data-testid="covers-filter-bar"
      />

      {paged.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-lg font-medium text-[var(--color-text)]">{t.covers.noCovers}</p>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">{t.covers.noCoversHint}</p>
          <Button variant="ghost" onClick={clear} className="mt-4">{t.common.clearFilters}</Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {paged.map(cover => (
              <div key={cover.id} className="relative group">
                <CoverCard
                  cover={cover}
                  isFaved={favedIds.includes(cover.id)}
                  onFavToggle={onFavToggle}
                />
                {isAdmin && (
                  <div className="absolute top-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="h-7 px-2 text-xs shadow-[var(--shadow-md)]"
                      data-testid={`cover-edit-${cover.id}`}>
                      <Pencil className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="danger" className="h-7 px-2 text-xs shadow-[var(--shadow-md)]"
                      onClick={() => onDelete?.(cover.id)}
                      data-testid={`cover-delete-${cover.id}`}>
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <Pagination page={page} totalPages={totalPages} onPageChange={setPage} data-testid="covers-pagination" />
            </div>
          )}
        </>
      )}

      <p className="mt-6 text-sm text-[var(--color-text-subtle)] text-center">
        {t.covers.coverCount(filtered.length, covers.length)}
      </p>
    </div>
  )
}
