# CLAUDE.md

Stable project rules. Treat as a lookup table — keep it small.

---

## Project

**Sonic Wave Studio** — personal music portfolio (Antoine Vlieghe).
Stack: Next.js 15 App Router · TypeScript strict · Tailwind CSS v4 + CSS tokens · Cloudflare Workers via OpenNext.

---

## Commands

```bash
npm run dev              # Dev server → http://localhost:3000
npm run build            # Next.js build
npm run build:cf         # Next.js + OpenNext (Cloudflare)
npm run preview          # Preview Cloudflare build locally
npm run deploy           # Deploy to Cloudflare Workers
npm run lint             # ESLint
npm run test             # Playwright against prod (https://sonicwavestudio.com)
npm run test:local       # Playwright against localhost:3000
npm run test:smoke       # Smoke tests only (chromium)
npm run test:nrt         # Smoke + pages + interactions + courses (chromium)
```

---

## Architecture

| Path | Purpose |
|---|---|
| `src/app/` | Next.js App Router. Route groups `(public)/(member)/(admin)` are planned but not yet applied. |
| `src/components/ui/` | Base design-system components (Button, Card, Dialog, Input…) |
| `src/components/music/` | Portfolio-specific components (CoverCard, ReleaseCard, GearCard, MusicPlayer…) |
| `src/components/layout/` | Header, Footer, AdminBar, PageShell, PageVisibilityGate |
| `src/contexts/` | Client state (AdminContext, CoversContext, MusicContext, FavouritesContext, PagesContext, DatasetContext, NotificationContext) |
| `src/lib/` | Pure helpers — auth, db, i18n, gear, music, courses |
| `src/styles/tokens.css` | All CSS custom properties |
| `docs/` | Functional and technical specs — update before every PR |

### Current state
- Auth: custom JWT cookie (`swc-session`, HS256). `IS_ADMIN`/`IS_LOGGED_IN` derive from the real session, not env flags.
- Data stores: localStorage-backed contexts (covers, music, datasets, favourites, pages) + JSON files under `.data/` (users, notifications, contact requests). Both pending Cloudflare D1 + Drizzle migration.
- File assets: audio (`.m4a`) and images under `public/music/` and `public/gear/`. Will move to R2.
- Target DB: Cloudflare D1 + Drizzle ORM. Target auth: NextAuth v5. Target storage: R2.

### Design system
Always use CSS variables from `src/styles/tokens.css`:
`var(--color-bg)`, `var(--color-text)`, `var(--color-accent-1)`, `var(--color-accent-2)` …
Dark theme via `[data-theme='dark']` (next-themes). Class utility: `cn()` in `src/lib/utils.ts`.

---

## Conventions

- **data-testid**: every interactive or structurally meaningful component gets one. Pattern: `{component}-{action/variant}-{id}`. Required on all new components.
- **Contexts**: localStorage key naming is `swc-{name}` (e.g. `swc-covers`, `swc-favourites`).
- **Genres**: stored as dataset slugs (from `DatasetContext`), resolved to labels for display. Same source for covers and releases.
- **i18n**: translations in `src/lib/i18n/en.ts` and `fr.ts`, types in `types.ts`. Every new user-facing string needs entries in both locales.

---

## Tests

Playwright targets prod by default; use `test:local` or `BASE_URL=http://localhost:3000` for local runs.

Spec files: `smoke`, `pages`, `interactions`, `courses-integrity`, plus one file per feature domain (`music`, `gear`, `covers`, `header`…).

Patterns:
- Target elements via `data-testid`, not text or CSS classes.
- Preference/session-dependent state: inject via `page.addInitScript(() => localStorage.setItem(…))` or seed a session cookie with `tests/helpers/session.ts` — never pollute the dev `.data` store permanently.
- Logged-in-only flows (notification bell, etc.) that need a real session: seed with `makeSessionToken` + `context.addCookies`, skip against prod with `test.skip(!IS_LOCAL, …)`.

### PR test requirement (mandatory)
Every PR that adds or changes a feature, page, route, or user flow **must include Playwright coverage** in the same PR:
- At least one test per observable new or modified behaviour.
- Update any existing tests broken by the change (renamed testids, changed seed data, etc.).
- All new tests must pass locally (`npm run test:local`) before opening the PR.
- Admin/member-only flows not testable without a session: cover the visitor state (login redirect, route guard) at minimum and note it in the PR.

---

## Specs (reference docs)

Load on demand — do not auto-include in context:
- `docs/functional-spec.md` — user roles, pages, expected features
- `docs/technical-spec.md` — target stack, DB schema, API conventions

**Update both docs before every PR** to reflect changes introduced (new features, routes, data models, current vs target state). Include the updates in the PR itself.

---

## Session hygiene

- Run `/compact` at the end of a phase (feature complete, PR merged) to compress context before the next phase.
- Run `/clear` only when switching to a **truly unrelated task** (different domain, different codebase).
- When a new task seems unrelated to the current one, **prompt the user** to confirm whether to `/clear` before starting. Example: *"This looks unrelated to what we were working on — want me to /clear before starting?"*
