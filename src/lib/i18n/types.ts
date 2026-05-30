export type Locale = 'en' | 'fr'

export interface Translations {
  locale: Locale

  // ─── Nav ───────────────────────────────────────────────────────────
  nav: {
    music: string
    covers: string
    tabs: string
    courses: string
    gear: string
    about: string
    contact: string
    signIn: string
    signOut: string
    menu: string
  }

  // ─── Common ────────────────────────────────────────────────────────
  common: {
    search: string
    clearFilters: string
    noResults: string
    noResultsHint: string
    save: string
    cancel: string
    delete: string
    edit: string
    add: string
    rename: string
    confirm: string
    loading: string
    total: string
    of: string
    items: string
  }

  // ─── Admin ─────────────────────────────────────────────────────────
  admin: {
    adminMode: string
    editing: string
    viewing: string
    datasets: string
    datasetsDescription: string
  }

  // ─── Covers page ───────────────────────────────────────────────────
  covers: {
    title: string
    description: string
    noCovers: string
    noCoversHint: string
    filterGenre: string
    filterType: string
    filterInstrument: string
    coverCount: (n: number, total: number) => string
    addCover: string
  }

  // ─── Courses page ──────────────────────────────────────────────────
  courses: {
    title: string
    description: string
    chapters: string
    sections: string
    duration: string
    level: string
    noTranslation: string
  }

  // ─── Contact page ──────────────────────────────────────────────────
  contact: {
    title: string
    description: string
    name: string
    email: string
    message: string
    send: string
    successTitle: string
    successMessage: string
  }

  // ─── Dataset admin page ────────────────────────────────────────────
  datasets: {
    pageTitle: string
    pageDescription: string
    genres: string
    genresDescription: string
    coverTypes: string
    coverTypesDescription: string
    addItem: string
    addItemPlaceholder: string
    renameItem: string
    deleteItem: string
    deleteConfirm: string
    itemLabel: string
    itemValue: string
    unsavedChanges: string
    saved: string
    emptyList: string
  }

  // ─── Language ──────────────────────────────────────────────────────
  language: {
    label: string
    en: string
    fr: string
  }
}
