# Functional Specification — sonicwavestudio.com

> Last updated: 2026-05-30
> Status: draft

---

## 1. Overview

sonicwavestudio.com is the personal music portfolio of Antoine Vlieghe — composer, guitarist, and producer. The site serves as a hub for his releases, covers, guitar tabs, courses, and gear, with a member system for fans and students who want deeper access.

The reference aesthetic is antoinevlieghemusic.com: clean, spacious, image-forward, with breathing room between sections.

---

## 2. User Roles

| Role | How obtained | Capabilities |
|---|---|---|
| **Visitor** | No action | Browse all public content |
| **Member** | Self-registration (email/OAuth) | Access member content, manage favourites, set theme preference |
| **Admin** | Hardcoded to Antoine's account only — no visitor can self-register as admin | Full CMS: upload tabs, edit courses, write personal notes, manage all content |

> **Admin access is restricted to a single account identified by a hardcoded email address stored in an environment variable (`ADMIN_EMAIL`). There is no admin registration flow.**

---

## 3. Pages & Sections

### 3.1 Header (global)
- Site title / logo
- Main navigation: Home · Music · Covers · Tabs · Courses · Gear · About
- Social icons: Spotify, Apple Music, YouTube, Deezer, Instagram, TikTok
- Login / Sign up button (if not logged in)
- User avatar + dropdown (if logged in): Favourites · Preferences · Sign out
- On the front page the header is larger (full-height hero treatment)

### 3.2 Footer (global)
- Link to Ultimate Guitar profile
- Link to Distrokid / label (2909574 Records DK)
- Thank you note
- © Antoine Vlieghe / sonicwavestudio.com

---

### 3.3 Front Page (`/`)
- Oversized hero with a photo gallery (carousel or masonry)
- Navigation visible but larger / more prominent than inner pages
- Transitions to the Home feed below the fold

### 3.4 Home Feed (`/home` or scrolled section on `/`)
Featured content cards, e.g.:
- Latest release
- Latest cover
- A personal note from Antoine (admin-editable rich text)
- Upcoming / pinned content

### 3.5 Music (`/music`)
- List of releases (EP, singles, albums)
- Each release: artwork, title, date, streaming links, and Antoine's personal story behind it
- Embedded audio player per release

### 3.6 Covers (`/covers`)
- Paginated list of all covers
- Each cover: embedded video, title, band/artist, style, instruments used, links to same cover on socials
- Filter bar: style · band name · title search · cover type · instruments
- Sort: newest / oldest / most popular

### 3.7 Tabs (`/tabs`)
- Filterable, sortable list: style · band name · title · instruments
- Per-tab metadata: band name, song title, style, instruments, difficulty
- Access model per tab (admin-configurable):
  - **Free** — any visitor can download
  - **Member** — requires login
  - **Paid** — one-time purchase via Stripe
  - **External link** — redirects to Ultimate Guitar tab
- Admin can upload Guitar Pro files (.gp, .gpx, .gp5) and/or PDF
- Download dashboard visible to admin (download counts per tab)

### 3.8 Courses (`/courses`)
- Course index: list of courses with title, description, thumbnail
- Course detail: chapters → sections, each section can contain rich text, images, embedded audio
- **Admin** can create/edit/delete courses, chapters, and sections via an in-page editor (Tiptap)
- **Member** can read; visitors see a preview with a login prompt

### 3.9 Gear (`/gear`)
- Descriptive list of Antoine's gear: guitars, amps, pedals, recording equipment
- Each item: photo, name, brand, description, optional purchase link

### 3.10 About (`/about`)
- Bio
- Support links (Patreon, Buy Me a Coffee, or similar)
- Label / distribution info
- Contact

### 3.11 Preferences (`/preferences`) — member only
- Theme: Light / Dark / System (default: System)
- Notification preferences (future)

### 3.12 Favourites (`/favourites`) — member only
- A personal page of bookmarked content
- Favourites can reference any content on the site with fine-grained anchors:
  - A full page (e.g. /gear)
  - A specific item (e.g. Cover #42, Tab "Comfortably Numb")
  - A specific section inside a course (e.g. Course 1 → Chapter 3 → Section 2)
- Displayed as a grouped list: Covers · Tabs · Courses · Music · Gear
- Each favourite shows: content title, section path if applicable, direct link / anchor
- Members can remove favourites; a "fav" button/icon appears on all favourable content

---

## 4. Authentication

- Email + password registration
- OAuth: Google, optionally GitHub
- Email verification on registration
- Password reset via email
- Session stored in cookie (edge-compatible)
- Admin identity: `process.env.ADMIN_EMAIL` — only this email receives admin privileges; cannot be claimed via any registration flow

---

## 5. Theme System

| User type | Storage |
|---|---|
| Logged-in member | Preference stored in DB, loaded server-side on every request |
| Visitor | Preference stored in `localStorage` + cookie (for SSR) |

- Three modes: **Light**, **Dark**, **System** (follows OS preference)
- Default: System
- No flash on load (theme resolved before paint via cookie read in middleware)

---

## 6. Content Management (Admin)

All admin actions are done in-context — no separate `/admin` dashboard. Each page has an "Edit mode" toggle visible only to the admin:

- **Personal note** (Home): inline Tiptap editor
- **Covers**: add/edit/delete cover entries
- **Tabs**: upload files, set access model, edit metadata
- **Courses**: full chapter/section editor
- **Releases**: add/edit release entries and stories
- **Gear**: add/edit gear items

---

## 7. Payments (Tabs)

- Provider: Stripe
- Model: one-time purchase per tab
- After purchase, the file is accessible in the member's account permanently
- No subscription model at launch

---

## 8. Design Language

- Spacious layouts with generous whitespace
- High-quality photography as primary visual element
- Dominant neutrals: deep space dark / off-white light
- **Highlight colour 1**: bordeaux-purple (`~#7C3AED`)
- **Highlight colour 2**: warm gold (`~#C9973A`) — used for premium/featured content
- Sans-serif body (Geist or Inter); optional serif accent for display headings
- Smooth transitions; no jarring animations
- Fully responsive (mobile-first)

---

## 9. Out of Scope (v1)

- Live streaming / live chat
- Comments system
- Subscription / recurring payments
- Multi-language support
- Admin invitation / multi-admin
