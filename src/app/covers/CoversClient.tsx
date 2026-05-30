'use client'
import { useState, useMemo } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { CoverCard } from '@/components/music/CoverCard'
import { AddCoverModal } from '@/components/music/AddCoverModal'
import { FilterBar } from '@/components/ui/FilterBar'
import { Pagination } from '@/components/ui/Pagination'
import { Button } from '@/components/ui/Button'
import { PageHeader } from '@/components/layout/PageShell'
import { useI18n } from '@/contexts/I18nContext'
import { useDataset } from '@/contexts/DatasetContext'
import { useCovers } from '@/contexts/CoversContext'

const PER_PAGE = 12

interface CoversClientProps {
  isAdmin?: boolean
  favedIds?: string[]
  onFavToggle?: (type: string, id: string) => void
  onDelete?: (id: string) => void
}

export function CoversClient({ isAdmin, favedIds = [], onFavToggle, onDelete }: CoversClientProps) {
  const { t } = useI18n()
  const { genres, coverTypes } = useDataset()
  const { covers } = useCovers()

  const [titleSearch, setTitleSearch]   = useState('')
  const [artistSearch, setArtistSearch] = useState('')
  const [selected, setSelected] = useState<Record<string, string[]>>({})
  const [page, setPage] = useState(1)

  const filterGroups = useMemo(() => [
    { key: 'genre',     label: t.covers.filterGenre, options: genres },
    { key: 'coverType', label: t.covers.filterType,  options: coverTypes },
  ], [genres, coverTypes, t])

  const textFilters = useMemo(() => [
    {
      key: 'title',
      label: t.covers.filterTitle,
      placeholder: t.covers.filterTitle,
      value: titleSearch,
      onChange: (v: string) => { setTitleSearch(v); setPage(1) },
    },
    {
      key: 'artist',
      label: t.covers.filterArtist,
      placeholder: t.covers.filterArtist,
      value: artistSearch,
      onChange: (v: string) => { setArtistSearch(v); setPage(1) },
    },
  ], [titleSearch, artistSearch, t])

  const filtered = useMemo(() => {
    return covers.filter(c => {
      if (titleSearch  && !c.title.toLowerCase().includes(titleSearch.toLowerCase()))    return false
      if (artistSearch && !c.bandName.toLowerCase().includes(artistSearch.toLowerCase())) return false
      for (const [key, vals] of Object.entries(selected)) {
        if (!vals.length) continue
        if (key === 'genre'     && !vals.some(v => c.style     === v)) return false
        if (key === 'coverType' && !vals.some(v => c.coverType === v)) return false
      }
      return true
    })
  }, [covers, titleSearch, artistSearch, selected])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const toggle = (groupKey: string, value: string) => {
    setSelected(s => {
      const cur = s[groupKey] ?? []
      return { ...s, [groupKey]: cur.includes(value) ? cur.filter(v => v !== value) : [...cur, value] }
    })
    setPage(1)
  }

  const clear = () => { setSelected({}); setTitleSearch(''); setArtistSearch(''); setPage(1) }

  return (
    <div data-testid="covers-page">
      <PageHeader
        title={t.covers.title}
        description={t.covers.description}
        actions={isAdmin ? <AddCoverModal onSubmit={async () => {}} /> : undefined}
      />

      <FilterBar
        groups={filterGroups}
        textFilters={textFilters}
        selected={selected}
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
