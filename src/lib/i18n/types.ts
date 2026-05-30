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

  // ─── Music page ────────────────────────────────────────────────────
  music: {
    title: string
    description: string
    latestTracks: string
    latestTracksHint: string
    releases: string
    pinned: string
    addTag: string
    addTagPlaceholder: string
    playerVisibility: string
    playerShown: string
    playerHidden: string
    showInPlayer: string
    hideFromPlayer: string
    moveUp: string
    moveDown: string
    playerHiddenNote: string
  }

  // ─── Page visibility ───────────────────────────────────────────────
  pages: {
    adminTitle: string
    adminDescription: string
    adminHint: string
    visible: string
    hidden: string
    unavailableTitle: string
    unavailableBody: string
    hiddenBanner: string
  }

  // ─── Covers page ───────────────────────────────────────────────────
  covers: {
    title: string
    description: string
    noCovers: string
    noCoversHint: string
    filterGenre: string
    filterType: string
    filterTitle: string
    filterArtist: string
    coverCount: (n: number, total: number) => string
    addCover: string
    perPage: string
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

  // ─── Gear page ─────────────────────────────────────────────────────
  gear: {
    title: string
    description: string
    instruments: string
    software: string
    hardware: string
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
