import type { Translations } from './types'

export const fr: Translations = {
  locale: 'fr',

  nav: {
    music: 'Musique',
    covers: 'Reprises',
    tabs: 'Tablatures',
    courses: 'Cours',
    gear: 'Matériel',
    about: 'À propos',
    contact: 'Contact',
    signIn: 'Connexion',
    signOut: 'Déconnexion',
    menu: 'Menu',
  },

  common: {
    search: 'Rechercher…',
    clearFilters: 'Effacer les filtres',
    noResults: 'Aucun résultat',
    noResultsHint: "Essayez d'ajuster vos filtres",
    save: 'Enregistrer',
    cancel: 'Annuler',
    delete: 'Supprimer',
    edit: 'Modifier',
    add: 'Ajouter',
    rename: 'Renommer',
    confirm: 'Confirmer',
    loading: 'Chargement…',
    total: 'au total',
    of: 'sur',
    items: 'éléments',
  },

  admin: {
    adminMode: 'Mode admin',
    editing: 'Édition',
    viewing: 'Visualisation',
    datasets: 'Jeux de données',
    datasetsDescription: 'Gérez les listes de référence utilisées sur le site.',
  },

  covers: {
    title: 'Reprises',
    description: 'Mes chansons préférées, réinterprétées.',
    noCovers: 'Aucune reprise trouvée',
    noCoversHint: "Essayez d'ajuster vos filtres",
    filterGenre: 'Genre',
    filterType: 'Type',
    filterInstrument: 'Instrument',
    coverCount: (n, total) =>
      `${n} reprise${n !== 1 ? 's' : ''}${n !== total ? ` · ${total} au total` : ''}`,
    addCover: 'Ajouter une reprise',
  },

  courses: {
    title: 'Cours',
    description: 'Des cours de guitare approfondis pour progresser.',
    chapters: 'chapitres',
    sections: 'sections',
    duration: 'Durée',
    level: 'Niveau',
    noTranslation: "Ce contenu n'est disponible qu'en français.",
  },

  contact: {
    title: 'Contact',
    description: 'Écrivez-moi — je lis tous les messages.',
    name: 'Nom',
    email: 'E-mail',
    message: 'Message',
    send: 'Envoyer',
    successTitle: 'Message envoyé !',
    successMessage: "Merci de m'avoir contacté — je vous répondrai dans les plus brefs délais.",
  },

  datasets: {
    pageTitle: 'Jeux de données',
    pageDescription: 'Gérez les listes de référence utilisées sur le site. Les modifications prennent effet immédiatement.',
    genres: 'Genres',
    genresDescription: 'Genres musicaux pour étiqueter les reprises.',
    coverTypes: 'Types de reprises',
    coverTypesDescription: 'Types de reprises (solo, acoustique, live…).',
    addItem: 'Ajouter',
    addItemPlaceholder: 'Libellé du nouvel élément…',
    renameItem: 'Renommer',
    deleteItem: 'Supprimer',
    deleteConfirm: 'Supprimer cet élément ?',
    itemLabel: 'Libellé',
    itemValue: 'Valeur (slug)',
    unsavedChanges: 'Modifications non enregistrées',
    saved: 'Enregistré',
    emptyList: 'Aucun élément — ajoutez-en un ci-dessus.',
  },

  language: {
    label: 'Langue',
    en: 'Anglais',
    fr: 'Français',
  },
}
