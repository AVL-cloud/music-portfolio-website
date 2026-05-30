import type { Release } from '@/components/music/ReleaseCard'
import type { Track } from '@/components/music/MusicPlayer'

/**
 * Music page content, mirrored from antoinevlieghemusic.com/music.
 * Static defaults for now — releases will move to D1 and audio/artwork to R2 when the CMS lands.
 * Admin edits (genre tags, player config) are layered on top in MusicContext.
 *
 * Audio (mastered tracks, transcoded to AAC) and cover art live under `public/music/`.
 * Release dates are the real streaming release dates (Deezer / Spotify, artist "Antoine Vlieghe").
 */

/** Mastered tracks available to stream in the page player. */
export const latestTracks: Track[] = [
  // From "A Wish For Another Life"
  { id: 'blue-birds', title: 'Blue Birds', src: '/music/blue-birds.m4a' },
  { id: 'timelapse',  title: 'Timelapse',  src: '/music/timelapse.m4a' },
  { id: 'aftermath',  title: 'Aftermath',  src: '/music/aftermath.m4a' },
  // From "Echoes Of The Unseen"
  { id: 'melodies-of-dusk-and-dawn', title: 'Melodies Of Dusk And Dawn', src: '/music/melodies-of-dusk-and-dawn.m4a' },
  { id: 'pathways-of-fantasy',       title: 'Pathways Of Fantasy',       src: '/music/pathways-of-fantasy.m4a' },
  { id: 'whispers-in-the-abyss',     title: 'Whispers In The Abyss',     src: '/music/whispers-in-the-abyss.m4a' },
]

// Declared newest-first; the page sorts non-favourited releases by releaseDate anyway.
// `altered-states-of-consciousness` has no public streaming date yet, so it carries none
// and sorts after the dated releases.
// `genres` hold slugs from the managed Genres dataset (DatasetContext) — the same
// source covers use. Labels are resolved for display via the dataset.
export const releases: Release[] = [
  {
    id: 'eerie-endeavours',
    title: 'Eerie Endeavours',
    type: 'ep',
    releaseDate: '2025-04-08',
    artworkUrl: '/music/eerie-endeavours.jpg',
    hyperfollowUrl: 'https://distrokid.com/hyperfollow/antoinevlieghe/eerie-endeavours',
    genres: ['instrumental'],
    storyExcerpt:
      'An enhanced version re-uploaded in 2025, exploring the world’s mysterious motion.',
  },
  {
    id: 'eyes-and-heart-wide-open',
    title: 'Eyes And Heart Wide Open',
    type: 'ep',
    releaseDate: '2024-11-06',
    artworkUrl: '/music/eyes-and-heart-wide-open.jpg',
    hyperfollowUrl: 'https://distrokid.com/hyperfollow/antoinevlieghe/eyes-and-heart-wide-open-4',
    genres: ['rock', 'alternative'],
    storyExcerpt:
      'An EP that invites you on a journey through the delicate balance of life and death.',
  },
  {
    id: 'my-icarus-sun',
    title: 'My Icarus Sun',
    type: 'album',
    releaseDate: '2024-09-14',
    artworkUrl: '/music/my-icarus-sun.jpg',
    hyperfollowUrl: 'https://distrokid.com/hyperfollow/antoinevlieghe/my-icarus-sun',
    genres: ['pop', 'rock', 'metal'],
    storyExcerpt:
      'An album using the Icarus myth as a metaphor for ambition and its consequences.',
  },
  {
    id: 'a-wish-for-another-life',
    title: 'A Wish For Another Life',
    type: 'ep',
    releaseDate: '2024-09-13',
    artworkUrl: '/music/a-wish-for-another-life.jpg',
    hyperfollowUrl: 'https://distrokid.com/hyperfollow/antoinevlieghe/a-wish-for-another-life',
    genres: ['pop', 'soul'],
    storyExcerpt:
      'A Pop and Soul EP exploring the bittersweet passage of time.',
  },
  {
    id: 'from-distant-shores',
    title: 'From Distant Shores',
    type: 'ep',
    releaseDate: '2024-09-09',
    artworkUrl: '/music/from-distant-shores.jpg',
    hyperfollowUrl: 'https://distrokid.com/hyperfollow/antoinevlieghe/from-distant-shores',
    genres: ['instrumental'],
    storyExcerpt:
      'Instrumental coastal landscapes and nature themes, moving through “Hatching Turtles”, “Sunset”, and “Shifting Tides”.',
  },
  {
    id: 'echoes-of-the-unseen',
    title: 'Echoes Of The Unseen',
    type: 'ep',
    releaseDate: '2024-07-17',
    artworkUrl: '/music/echoes-of-the-unseen.jpg',
    hyperfollowUrl: 'https://distrokid.com/hyperfollow/antoinevlieghe/echoes-of-the-unseen',
    genres: ['instrumental'],
    storyExcerpt:
      'An instrumental EP that creates a space for introspection and imagination.',
  },
  {
    id: 'altered-states-of-consciousness',
    title: 'Altered States Of Consciousness',
    type: 'ep',
    artworkUrl: '/music/altered-states-of-consciousness.jpg',
    hyperfollowUrl: 'https://distrokid.com/hyperfollow/antoinevlieghe/altered-states-of-consciousness-2',
    genres: ['instrumental'],
    storyExcerpt:
      'An instrumental EP flowing between calm and intensity.',
  },
  {
    id: 'on-the-rim-of-the-sky',
    title: 'On The Rim Of The Sky',
    type: 'album',
    releaseDate: '2021-01-01',
    artworkUrl: '/music/on-the-rim-of-the-sky.jpg',
    hyperfollowUrl: 'https://distrokid.com/hyperfollow/antoinevlieghe/on-the-rim-of-the-sky',
    genres: ['instrumental'],
    storyExcerpt:
      'My very first release — an instrumental journey across the changing skies, from dusk to dawn.',
  },
]
