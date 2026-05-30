export type GearSection = 'instruments' | 'software' | 'hardware'

export interface GearItem {
  id: string
  name: string
  section: GearSection
  category: string
  image?: string
  description: string
  placeholder?: boolean
}

export const GEAR_SECTIONS: GearSection[] = ['instruments', 'software', 'hardware']

/**
 * Antoine's studio & performance gear, grouped into instruments / software / hardware.
 * Images live in `public/gear/`; descriptions mirror antoinevlieghemusic.com.
 * Items without an `image` render a gradient placeholder (marked `placeholder: true`).
 * Static for now — will move to D1 + R2 when the CMS lands.
 */
export const gear: GearItem[] = [
  // ─── Instruments ───────────────────────────────────────────────────
  {
    id: 'esp-ltd-ec-1000',
    name: 'ESP LTD EC-1000 BP BLUNFD',
    section: 'instruments',
    category: 'Electric Guitar',
    image: '/gear/esp-ltd-ec-1000.png',
    description:
      'Mahogany body with a striking burled poplar top in Blue Natural Fade, loaded with Seymour Duncan Pegasus and Sentient humbuckers and a TonePros locking TOM bridge for reliable, professional performance.',
  },
  {
    id: 'fender-cd-140sce',
    name: 'Fender CD-140SCE Sunburst',
    section: 'instruments',
    category: 'Acoustic Guitar',
    image: '/gear/fender-cd-140sce.png',
    description:
      'Dreadnought cutaway acoustic-electric with a solid spruce top and laminated ovangkol back and sides, fitted with a Fishman CD-1 preamp and tuner and Fender DuraTone bronze strings.',
  },
  {
    id: 'nylon-guitar',
    name: 'Nylon-String Guitar',
    section: 'instruments',
    category: 'Classical Guitar',
    placeholder: true,
    description: 'Details coming soon.',
  },
  {
    id: 'keyboard',
    name: 'Keyboard',
    section: 'instruments',
    category: 'Keyboard',
    placeholder: true,
    description: 'Details coming soon.',
  },

  // ─── Software ──────────────────────────────────────────────────────
  {
    id: 'guitar-rig-7',
    name: 'Native Instruments Guitar Rig 7',
    section: 'software',
    category: 'Virtual Amp',
    image: '/gear/guitar-rig-7.png',
    description:
      'Advanced virtual amp and effects suite offering an extensive collection of classic and modern amplifier models, cabinets, and effects with flexible signal routing for studio and live work.',
  },
  {
    id: 'ableton-live-11',
    name: 'Ableton Live 11 Standard',
    section: 'software',
    category: 'DAW',
    image: '/gear/ableton-live-11.png',
    description:
      'Music creation and performance software with multitrack audio recording, MIDI sequencing, audio-to-MIDI conversion, and Session View for nonlinear composition.',
  },
  {
    id: 'izotope-music-production-suite',
    name: 'iZotope Music Production Suite',
    section: 'software',
    category: 'Mixing & Mastering',
    placeholder: true,
    description: 'Details coming soon.',
  },
  {
    id: 'neural-dsp-archetype-gojira',
    name: 'Neural DSP Archetype: Gojira',
    section: 'software',
    category: 'Amp Sim Plugin',
    placeholder: true,
    description: 'Details coming soon.',
  },
  {
    id: 'native-instruments-plugin',
    name: 'Native Instruments Plugin',
    section: 'software',
    category: 'Virtual Instrument',
    placeholder: true,
    description: 'Details coming soon.',
  },

  // ─── Hardware ──────────────────────────────────────────────────────
  {
    id: 'focusrite-scarlett-2i2',
    name: 'Focusrite Scarlett 2i2 3rd Gen',
    section: 'hardware',
    category: 'Audio Interface',
    image: '/gear/focusrite-scarlett-2i2.png',
    description:
      'Compact USB audio interface with two upgraded Scarlett mic preamps featuring Air mode, recording at up to 24-bit / 192 kHz resolution.',
  },
  {
    id: 'nux-c-5rc',
    name: 'Nux C-5RC Wireless System',
    section: 'hardware',
    category: 'Wireless System',
    image: '/gear/nux-c-5rc.png',
    description:
      'Digital 5.8 GHz wireless instrument system delivering 24-bit / 44.1 kHz audio with ultra-low latency under 5 ms and up to 30 meters of range.',
  },
  {
    id: 'shure-mv88',
    name: 'Shure MV88+ Digital Kit',
    section: 'hardware',
    category: 'Microphone',
    image: '/gear/shure-mv88.png',
    description:
      'Professional-grade portable stereo condenser microphone with multiple selectable polar patterns and 24-bit / 48 kHz resolution for high-quality mobile recording.',
  },
  {
    id: 'second-mic',
    name: 'Studio Microphone',
    section: 'hardware',
    category: 'Microphone',
    placeholder: true,
    description: 'Details coming soon.',
  },
  {
    id: 'studio-headset',
    name: 'Studio Headset',
    section: 'hardware',
    category: 'Headphones',
    placeholder: true,
    description: 'Details coming soon.',
  },
]
