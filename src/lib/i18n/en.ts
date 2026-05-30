import type { Translations } from './types'

export const en: Translations = {
  locale: 'en',

  nav: {
    music: 'Music',
    covers: 'Covers',
    tabs: 'Tabs',
    courses: 'Courses',
    gear: 'Gear',
    about: 'About',
    contact: 'Contact',
    signIn: 'Sign in',
    signOut: 'Sign out',
    menu: 'Menu',
  },

  common: {
    search: 'Search…',
    clearFilters: 'Clear filters',
    noResults: 'No results found',
    noResultsHint: 'Try adjusting your filters',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    rename: 'Rename',
    confirm: 'Confirm',
    loading: 'Loading…',
    total: 'total',
    of: 'of',
    items: 'items',
  },

  admin: {
    adminMode: 'Admin mode',
    editing: 'Editing',
    viewing: 'Viewing',
    datasets: 'Datasets',
    datasetsDescription: 'Manage reference lists used across the site.',
  },

  covers: {
    title: 'Covers',
    description: 'My favourite songs, reimagined.',
    noCovers: 'No covers found',
    noCoversHint: 'Try adjusting your filters',
    filterGenre: 'Genre',
    filterType: 'Type',
    filterInstrument: 'Instrument',
    coverCount: (n, total) =>
      `${n} cover${n !== 1 ? 's' : ''}${n !== total ? ` · ${total} total` : ''}`,
    addCover: 'Add cover',
  },

  courses: {
    title: 'Courses',
    description: 'In-depth guitar courses to take your playing further.',
    chapters: 'chapters',
    sections: 'sections',
    duration: 'Duration',
    level: 'Level',
    noTranslation: 'This content is only available in French.',
  },

  contact: {
    title: 'Contact',
    description: 'Get in touch — I read every message.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send message',
    successTitle: 'Message sent!',
    successMessage: "Thanks for reaching out — I'll get back to you shortly.",
  },

  datasets: {
    pageTitle: 'Datasets',
    pageDescription: 'Manage the reference lists used across the site. Changes take effect immediately.',
    genres: 'Genres',
    genresDescription: 'Music genres used to tag covers.',
    coverTypes: 'Cover types',
    coverTypesDescription: 'Types of covers (solo, acoustic, live…).',
    addItem: 'Add item',
    addItemPlaceholder: 'New item label…',
    renameItem: 'Rename',
    deleteItem: 'Delete',
    deleteConfirm: 'Delete this item?',
    itemLabel: 'Label',
    itemValue: 'Value (slug)',
    unsavedChanges: 'Unsaved changes',
    saved: 'Saved',
    emptyList: 'No items yet — add one above.',
  },

  language: {
    label: 'Language',
    en: 'English',
    fr: 'French',
  },
}
