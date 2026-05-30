import { PageShell } from '@/components/layout/PageShell'
import { CoversClient } from './CoversClient'
import type { Cover } from '@/components/music/CoverCard'

// Mock data — will be replaced with D1 query in Phase 3
const MOCK_COVERS: Cover[] = [
  { id: '1', title: 'Comfortably Numb', bandName: 'Pink Floyd', style: 'rock', coverType: 'solo', instruments: ['guitar'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', socialLinks: { YouTube: 'https://youtube.com', Instagram: 'https://instagram.com' } },
  { id: '2', title: 'Nothing Else Matters', bandName: 'Metallica', style: 'metal', coverType: 'acoustic', instruments: ['guitar'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '3', title: 'Hallelujah', bandName: 'Leonard Cohen', style: 'acoustic', coverType: 'fingerpicking', instruments: ['guitar', 'vocals'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '4', title: 'Hotel California', bandName: 'Eagles', style: 'rock', coverType: 'solo', instruments: ['guitar'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '5', title: 'Stairway to Heaven', bandName: 'Led Zeppelin', style: 'rock', coverType: 'acoustic', instruments: ['guitar'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '6', title: 'Blackbird', bandName: 'The Beatles', style: 'acoustic', coverType: 'fingerpicking', instruments: ['guitar'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

export default function CoversPage() {
  return (
    <PageShell>
      <CoversClient covers={MOCK_COVERS} />
    </PageShell>
  )
}
