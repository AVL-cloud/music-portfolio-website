'use client'
import { useState, useMemo, useEffect } from 'react'
import { Pencil, Trash2, Plus, Heart } from 'lucide-react'
import { CoverCard } from '@/components/music/CoverCard'
import { CoverFormModal } from '@/components/music/CoverFormModal'
import { FilterBar } from '@/components/ui/FilterBar'
import { Pagination } from '@/components/ui/Pagination'
import { Button } from '@/components/ui/Button'
import { PageHeader } from '@/components/layout/PageShell'
import { useI18n } from '@/contexts/I18nContext'
import { useDataset } from '@/contexts/DatasetContext'
import { useCovers } from '@/contexts/CoversContext'
import { useAdmin } from '@/contexts/AdminContext'
import { useFavourites } from '@/contexts/FavouritesContext'
import { usePendingFavourite } from '@/contexts/usePendingFavourite'
import { MiniPlayerProvider, useMiniPlayer } from '@/contexts/MiniPlayerContext'
import { MiniPlayer } from '@/components/music/MiniPlayer'
import type { Cover } from '@/components/music/CoverCard'
import { cn } from '@/lib/utils'

const PER_PAGE_OPTIONS = [6, 12, 24] as const
const PER_PAGE_KEY = 'swc-covers-perpage'

export function CoversClient() {
  return (
    <MiniPlayerProvider>
      <CoversContent />
    </MiniPlayerProvider>
  )
}

function CoversContent() {
  usePendingFavourite()
  const { t } = useI18n()
  const { genres, coverTypes } = useDataset()
  const { covers, addCover, updateCover, deleteCover } = useCovers()
  const { isAdmin, editMode } = useAdmin()
  const { isLoggedIn, isFaved, toggleFavourite } = useFavourites()
  const { activeCover, open: openMiniPlayer } = useMiniPlayer()

  const editing = isAdmin && editMode

  const [titleSearch, setTitleSearch]   = useState('')
  const [artistSearch, setArtistSearch] = useState('')
  const [selected, setSelected] = useState<Record<string, string[]>>({})
  const [likedOnly, setLikedOnly] = useState(false)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState<number>(6)

  // Per-page is a saved preference for logged-in users (default 6).
  useEffect(() => {
    if (!isLoggedIn) return
    const saved = Number(localStorage.getItem(PER_PAGE_KEY))
    if (PER_PAGE_OPTIONS.includes(saved as 6 | 12 | 24)) setPerPage(saved)
  }, [isLoggedIn])

  const changePerPage = (n: number) => {
    setPerPage(n)
    setPage(1)
    if (isLoggedIn) {
      try { localStorage.setItem(PER_PAGE_KEY, String(n)) } catch { /* ignore */ }
    }
  }

  // Modal state — undefined `editingCover` means "add new".
  const [modalOpen, setModalOpen] = useState(false)
  const [editingCover, setEditingCover] = useState<Cover | undefined>(undefined)
  const openAdd  = () => { setEditingCover(undefined); setModalOpen(true) }
  const openEdit = (c: Cover) => { setEditingCover(c); setModalOpen(true) }
  const handleSave = (cover: Cover) => {
    if (editingCover) updateCover(editingCover.id, cover)
    else addCover(cover)
  }

  const labelMap = useMemo(() => {
    const m: Record<string, string> = {}
    genres.forEach(g => { m[g.value] = g.label })
    coverTypes.forEach(c => { m[c.value] = c.label })
    return m
  }, [genres, coverTypes])
  const labelFor = (v: string) => labelMap[v] ?? v

  const filterGroups = useMemo(() => [
    { key: 'genre',     label: t.covers.filterGenre, options: genres },
    { key: 'coverType', label: t.covers.filterType,  options: coverTypes },
  ], [genres, coverTypes, t])

  const textFilters = useMemo(() => [
    { key: 'title',  label: t.covers.filterTitle,  placeholder: t.covers.filterTitle,
      value: titleSearch,  onChange: (v: string) => { setTitleSearch(v); setPage(1) } },
    { key: 'artist', label: t.covers.filterArtist, placeholder: t.covers.filterArtist,
      value: artistSearch, onChange: (v: string) => { setArtistSearch(v); setPage(1) } },
  ], [titleSearch, artistSearch, t])

  const filtered = useMemo(() => {
    const list = covers.filter(c => {
      if (likedOnly && !isFaved('cover', c.id)) return false
      if (titleSearch  && !c.title.toLowerCase().includes(titleSearch.toLowerCase()))    return false
      if (artistSearch && !c.bandName.toLowerCase().includes(artistSearch.toLowerCase())) return false
      for (const [key, vals] of Object.entries(selected)) {
        if (!vals.length) continue
        if (key === 'genre'     && !vals.some(v => c.style     === v)) return false
        if (key === 'coverType' && !vals.some(v => c.coverType === v)) return false
      }
      return true
    })
    // Newest first by video date; undated covers sort last.
    return list.sort((a, b) => (b.videoDate ?? '').localeCompare(a.videoDate ?? ''))
  }, [covers, titleSearch, artistSearch, selected])

  const totalPages = Math.ceil(filtered.length / perPage)
  const paged = filtered.slice((page - 1) * perPage, page * perPage)

  const toggle = (groupKey: string, value: string) => {
    setSelected(s => {
      const cur = s[groupKey] ?? []
      return { ...s, [groupKey]: cur.includes(value) ? cur.filter(v => v !== value) : [...cur, value] }
    })
    setPage(1)
  }

  const clear = () => { setSelected({}); setTitleSearch(''); setArtistSearch(''); setLikedOnly(false); setPage(1) }

  return (
    <div data-testid="covers-page">
      <PageHeader
        title={t.covers.title}
        description={t.covers.description}
        actions={editing ? (
          <Button size="sm" onClick={openAdd} data-testid="add-cover-button">
            <Plus className="h-4 w-4" /> {t.covers.addCover}
          </Button>
        ) : undefined}
      />

      <FilterBar
        groups={filterGroups}
        textFilters={textFilters}
        selected={selected}
        onToggle={toggle}
        onClear={clear}
        className="mb-4"
        data-testid="covers-filter-bar"
      />

      {isLoggedIn && (
        <div className="mb-6">
          <button
            onClick={() => { setLikedOnly(v => !v); setPage(1) }}
            aria-pressed={likedOnly}
            data-testid="covers-filter-liked"
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium transition-colors',
              likedOnly
                ? 'border-[var(--color-accent-1)] bg-[var(--color-accent-1)] text-white'
                : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent-1)] hover:text-[var(--color-accent-1)]',
            )}
          >
            <Heart className={cn('h-3.5 w-3.5', likedOnly && 'fill-current')} />
            {t.covers.filterLiked}
          </button>
        </div>
      )}

      {/* Per-page selector */}
      <div className="mb-6 flex items-center justify-end gap-2 text-sm text-[var(--color-text-muted)]">
        <span>{t.covers.perPage}</span>
        <div className="inline-flex rounded-[var(--radius-md)] border border-[var(--color-border)] overflow-hidden" data-testid="covers-per-page">
          {PER_PAGE_OPTIONS.map(n => (
            <button
              key={n}
              onClick={() => changePerPage(n)}
              aria-pressed={perPage === n}
              data-testid={`covers-per-page-${n}`}
              className={cn(
                'px-3 py-1 text-sm font-medium transition-colors',
                perPage === n
                  ? 'bg-[var(--color-accent-1)] text-white'
                  : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)]',
              )}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

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
                  isFaved={isFaved('cover', cover.id)}
                  onFavToggle={(type, id) => toggleFavourite(type, id)}
                  labelFor={labelFor}
                  onPlayInMiniPlayer={(cover, t) => openMiniPlayer(cover, t)}
                  isActiveInMiniPlayer={activeCover?.id === cover.id}
                />
                {editing && (
                  <div className="absolute top-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="h-7 px-2 text-xs shadow-[var(--shadow-md)]"
                      onClick={() => openEdit(cover)}
                      data-testid={`cover-edit-${cover.id}`}>
                      <Pencil className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="danger" className="h-7 px-2 text-xs shadow-[var(--shadow-md)]"
                      onClick={() => deleteCover(cover.id)}
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

      {editing && (
        <CoverFormModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          initial={editingCover}
          genres={genres}
          coverTypes={coverTypes}
          onSave={handleSave}
        />
      )}

      <MiniPlayer />
    </div>
  )
}
