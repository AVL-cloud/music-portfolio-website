'use client'
import { redirect } from 'next/navigation'
import { useAdmin } from '@/contexts/AdminContext'
import { useDataset } from '@/contexts/DatasetContext'
import { useI18n } from '@/contexts/I18nContext'
import { PageHeader } from '@/components/layout/PageShell'
import { DatasetList } from './DatasetList'

export default function DatasetsPage() {
  const { isAdmin } = useAdmin()
  const { genres, coverTypes, setGenres, setCoverTypes } = useDataset()
  const { t } = useI18n()

  // Guard — redirect non-admins
  if (!isAdmin) redirect('/')

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PageHeader
        title={t.datasets.pageTitle}
        description={t.datasets.pageDescription}
      />

      <DatasetList
        title={t.datasets.genres}
        description={t.datasets.genresDescription}
        items={genres}
        onChange={setGenres}
        data-testid="dataset-genres"
      />

      <DatasetList
        title={t.datasets.coverTypes}
        description={t.datasets.coverTypesDescription}
        items={coverTypes}
        onChange={setCoverTypes}
        data-testid="dataset-cover-types"
      />
    </main>
  )
}
