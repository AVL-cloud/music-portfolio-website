'use client'
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { Cover } from '@/components/music/CoverCard'

// Videos reference symlinks under public/covers/ → Desktop source files (dev only).
// Will be replaced with Cloudflare R2 URLs when the CMS lands.
export const DEFAULT_COVERS: Cover[] = [
  {
    id: 'asking-alexandria-never-gonna-learn', title: 'Never Gonna Learn', bandName: 'Asking Alexandria',
    style: 'metal', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/asking-alexandria-never-gonna-learn.mp4',
    videoDate: '2026-05-14',
  },
  {
    id: 'sting-shape-of-my-heart', title: 'Shape of My Heart', bandName: 'Sting',
    style: 'pop', coverType: 'acoustic', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/sting-shape-of-my-heart.mp4',
    description: 'Acoustic rendition — I made a tab available on Ultimate Guitar.',
    videoDate: '2026-04-19',
  },
  {
    id: 'muse-stockholm-syndrome', title: 'Stockholm Syndrome', bandName: 'Muse',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/muse-stockholm-syndrome.mp4',
    videoDate: '2026-04-12',
  },
  {
    id: 'queen-bohemian-rhapsody', title: 'Bohemian Rhapsody', bandName: 'Queen',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/queen-bohemian-rhapsody.mp4',
    description: 'Working on these bends with some Brian May.',
    videoDate: '2026-04-05',
  },
  {
    id: 'pink-floyd-high-hopes', title: 'High Hopes — Solo Part 1', bandName: 'Pink Floyd',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/pink-floyd-high-hopes.mp4',
    videoDate: '2026-03-17',
  },
  {
    id: 'ratm-killing-in-the-name', title: 'Killing In The Name Of', bandName: 'Rage Against The Machine',
    style: 'metal', coverType: 'riff', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/ratm-killing-in-the-name.mp4',
    videoDate: '2026-03-14',
  },
  {
    id: 'rhcp-californication-acoustic', title: 'Californication — Acoustic', bandName: 'Red Hot Chili Peppers',
    style: 'rock', coverType: 'acoustic', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/rhcp-californication-acoustic.mov',
    videoDate: '2026-03-02',
  },
  {
    id: 'thirty-seconds-to-mars-the-kill', title: 'The Kill — Verse 2', bandName: 'Thirty Seconds To Mars',
    style: 'alternative', coverType: 'guitar', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/thirty-seconds-to-mars-the-kill.mp4',
    videoDate: '2026-02-20',
  },
  {
    id: 'good-charlotte-the-river', title: 'The River', bandName: 'Good Charlotte',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/good-charlotte-the-river.mp4',
    videoDate: '2026-02-14',
  },
  {
    id: 'eric-clapton-autumn-leaves', title: 'Autumn Leaves — Acoustic Solo', bandName: 'Eric Clapton',
    style: 'blues', coverType: 'acoustic', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/eric-clapton-autumn-leaves.mov',
    videoDate: '2026-02-07',
  },
  {
    id: 'muse-new-born', title: 'New Born — Riff', bandName: 'Muse',
    style: 'rock', coverType: 'riff', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/muse-new-born.mp4',
    videoDate: '2026-01-25',
  },
  {
    id: 'rhcp-californication-solo', title: 'Californication — Solo', bandName: 'Red Hot Chili Peppers',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/rhcp-californication-solo.mp4',
    videoDate: '2026-01-19',
  },
  {
    id: 'muse-animals', title: 'Animals — Solo 1', bandName: 'Muse',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/muse-animals.mp4',
    videoDate: '2026-01-11',
  },
  {
    id: 'three-days-grace-riot', title: 'Riot — Verse & Chorus', bandName: 'Three Days Grace',
    style: 'metal', coverType: 'guitar', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/three-days-grace-riot.mp4',
    videoDate: '2026-01-03',
  },
  {
    id: 'muse-mk-ultra', title: 'MK Ultra — Intro', bandName: 'Muse',
    style: 'rock', coverType: 'guitar', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/muse-mk-ultra.mp4',
    videoDate: '2025-12-21',
  },
  {
    id: 'maneskin-iwbys-chorus', title: 'I Wanna Be Your Slave — Chorus Riff', bandName: 'Måneskin',
    style: 'rock', coverType: 'riff', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/maneskin-iwbys-chorus.mp4',
    videoDate: '2025-12-07',
  },
  {
    id: 'mumford-little-lion-man', title: 'Little Lion Man', bandName: 'Mumford and Sons',
    style: 'rock', coverType: 'acoustic', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/mumford-little-lion-man.mov',
    videoDate: '2025-11-30',
  },
  {
    id: 'marilyn-manson-sweet-dreams', title: 'Sweet Dreams (Are Made of This)', bandName: 'Marilyn Manson',
    style: 'metal', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/marilyn-manson-sweet-dreams.mp4',
    videoDate: '2025-11-23',
  },
  {
    id: 'maneskin-iwbys-verse', title: 'I Wanna Be Your Slave — Verse Riff', bandName: 'Måneskin',
    style: 'rock', coverType: 'riff', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/maneskin-iwbys-verse.mp4',
    videoDate: '2025-11-16',
  },
  {
    id: 'muse-hysteria-bass', title: 'Hysteria — Bass Riff on Guitar', bandName: 'Muse',
    style: 'rock', coverType: 'riff', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/muse-hysteria-bass.mp4',
    videoDate: '2025-11-09',
  },
  {
    id: 'rhcp-cant-stop-solo', title: "Can't Stop — Solo", bandName: 'Red Hot Chili Peppers',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/rhcp-cant-stop-solo.mp4',
    videoDate: '2025-11-02',
  },
  {
    id: 'the-strokes-the-adults-are-talking', title: 'The Adults Are Talking — Chorus & Bridge', bandName: 'The Strokes',
    style: 'alternative', coverType: 'guitar', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/the-strokes-the-adults-are-talking.mp4',
    videoDate: '2025-10-25',
  },
  {
    id: 'muse-plug-in-baby', title: 'Plug In Baby — Intro', bandName: 'Muse',
    style: 'rock', coverType: 'guitar', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/muse-plug-in-baby.mov',
    videoDate: '2025-10-19',
  },
  {
    id: 'reamonn-tonight', title: 'Tonight', bandName: 'Reamonn',
    style: 'pop', coverType: 'acoustic', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/reamonn-tonight.mp4',
    videoDate: '2025-10-12',
  },
  {
    id: 'rhcp-cant-stop-riff', title: "Can't Stop — Riff", bandName: 'Red Hot Chili Peppers',
    style: 'rock', coverType: 'riff', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/rhcp-cant-stop-riff.mov',
    videoDate: '2025-10-05',
  },
  {
    id: 'green-day-21-guns', title: '21 Guns — Solo', bandName: 'Green Day',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/green-day-21-guns.mov',
    videoDate: '2025-09-25',
  },
  {
    id: 'papa-roach-last-resort', title: 'Last Resort — Riff', bandName: 'Papa Roach',
    style: 'rock', coverType: 'riff', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/papa-roach-last-resort.mov',
    videoDate: '2025-09-22',
  },
  {
    id: 'coldplay-violet-hill', title: 'Violet Hill — Solo', bandName: 'Coldplay',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/coldplay-violet-hill.mov',
    videoDate: '2025-09-19',
  },
  {
    id: 'maneskin-gossip', title: 'Gossip — Riff', bandName: 'Måneskin',
    style: 'rock', coverType: 'riff', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/maneskin-gossip.mov',
    videoDate: '2025-09-16',
  },
  {
    id: 'gary-jules-mad-world', title: 'Mad World', bandName: 'Gary Jules',
    style: 'pop', coverType: 'acoustic', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/gary-jules-mad-world.mov',
    videoDate: '2025-09-13',
  },
  {
    id: 'rise-against-but-tonight-we-dance', title: 'But Tonight We Dance — Solo', bandName: 'Rise Against',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/rise-against-but-tonight-we-dance.mov',
    videoDate: '2025-09-10',
  },
  {
    id: 'arctic-monkeys-do-i-wanna-know', title: 'Do I Wanna Know — Riff', bandName: 'Arctic Monkeys',
    style: 'alternative', coverType: 'riff', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/arctic-monkeys-do-i-wanna-know.mov',
    videoDate: '2025-09-07',
  },
  {
    id: 'maneskin-honey-are-u-coming', title: 'Honey (Are U Coming?) — Riff', bandName: 'Måneskin',
    style: 'rock', coverType: 'riff', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/maneskin-honey-are-u-coming.mov',
    videoDate: '2025-09-04',
  },
  {
    id: 'green-day-american-idiot', title: 'American Idiot — Solo', bandName: 'Green Day',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/green-day-american-idiot.mov',
    videoDate: '2025-09-02',
  },
  {
    id: 'muse-hysteria-solo', title: 'Hysteria — Solo', bandName: 'Muse',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/muse-hysteria-solo.MOV',
    videoDate: '2025-08-23',
  },
  {
    id: 'green-day-holiday', title: 'Holiday — Solo', bandName: 'Green Day',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'],
    embedUrl: '', videoUrl: '/covers/green-day-holiday.mp4',
    videoDate: '2025-08-22',
  },
]

const STORAGE_KEY = 'swc-covers'

// Which Cover field a managed dataset maps onto.
export type CoverField = 'style' | 'coverType'

interface CoversContextValue {
  covers: Cover[]
  setCovers: (covers: Cover[]) => void
  // CRUD used by the admin edit mode on the covers page.
  addCover: (cover: Cover) => void
  updateCover: (id: string, patch: Partial<Cover>) => void
  deleteCover: (id: string) => void
  // How many covers currently use `value` in the given field.
  countUsing: (field: CoverField, value: string) => number
  // Remove `value` from every cover that uses it (clears the field).
  clearDatasetValue: (field: CoverField, value: string) => void
}

const CoversContext = createContext<CoversContextValue>({
  covers: DEFAULT_COVERS,
  setCovers: () => {},
  addCover: () => {},
  updateCover: () => {},
  deleteCover: () => {},
  countUsing: () => 0,
  clearDatasetValue: () => {},
})

export function CoversProvider({ children }: { children: ReactNode }) {
  const [covers, setCoversState] = useState<Cover[]>(DEFAULT_COVERS)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const stored = JSON.parse(raw) as Cover[]
        if (Array.isArray(stored)) setCoversState(stored)
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  const setCovers = useCallback((next: Cover[]) => {
    setCoversState(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore
    }
  }, [])

  const addCover = useCallback(
    (cover: Cover) => setCovers([cover, ...covers]),
    [covers, setCovers],
  )

  const updateCover = useCallback(
    (id: string, patch: Partial<Cover>) =>
      setCovers(covers.map(c => (c.id === id ? { ...c, ...patch } : c))),
    [covers, setCovers],
  )

  const deleteCover = useCallback(
    (id: string) => setCovers(covers.filter(c => c.id !== id)),
    [covers, setCovers],
  )

  const countUsing = useCallback(
    (field: CoverField, value: string) => covers.filter(c => c[field] === value).length,
    [covers],
  )

  const clearDatasetValue = useCallback(
    (field: CoverField, value: string) => {
      setCovers(covers.map(c => (c[field] === value ? { ...c, [field]: '' } : c)))
    },
    [covers, setCovers],
  )

  return (
    <CoversContext.Provider value={{ covers, setCovers, addCover, updateCover, deleteCover, countUsing, clearDatasetValue }}>
      {children}
    </CoversContext.Provider>
  )
}

export function useCovers() {
  return useContext(CoversContext)
}
