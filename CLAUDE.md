# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Sonic Wave Studio** — portfolio musical personnel (Antoine Vlieghe). Next.js 15 App Router, déployé sur Cloudflare Workers via OpenNext.

## Commands

```bash
npm run dev              # Serveur de dev local (http://localhost:3000)
npm run build            # Build Next.js standard
npm run build:cf         # Build Next.js + OpenNext pour Cloudflare
npm run preview          # Prévisualiser le build Cloudflare localement
npm run deploy           # Déployer sur Cloudflare Workers
npm run lint             # ESLint
npm run test             # Playwright (cible prod par défaut)
npm run test:local       # Playwright contre localhost:3000
npm run test:smoke       # Smoke tests seulement (chromium)
npm run test:nrt         # Smoke + pages + interactions + courses (chromium)
npx playwright test tests/smoke.spec.ts   # Un fichier de test spécifique
```

Les tests Playwright ciblent `https://sonicwavestudio.com` par défaut. Pour cibler le local, utiliser `test:local` ou passer `BASE_URL=http://localhost:3000`.

## Architecture

### Structure de l'app

- `src/app/` — App Router Next.js. Les routes existent, mais la séparation en groupes `(public)`, `(member)`, `(admin)` décrite dans la spec technique n'est **pas encore implémentée**.
- `src/components/ui/` — Design system de base (Button, Card, Dialog, Input, etc.)
- `src/components/music/` — Composants spécifiques au portfolio (CoverCard, CourseCard, MusicPlayer…)
- `src/components/layout/` — Header, Footer, AdminBar, PageShell
- `src/contexts/` — `AdminContext` (mode édition), `NotificationContext` (notifications in-app)
- `src/lib/courses.ts` — Fonctions d'accès aux cours (slugify, getCourse, getChapter)
- `src/lib/db/seed-courses.ts` — Contenu statique du cours "Passion À Six Cordes" (102 sections, 14 chapitres)

### État actuel vs spec (important)

L'app est en cours de construction. Beaucoup de données sont encore **mockées ou statiques** :
- Les covers sont des données mock dans `src/app/covers/page.tsx`
- Les cours sont des données statiques dans `seed-courses.ts` (pas encore en base de données)
- L'auth (NextAuth) n'est pas encore branchée : `IS_ADMIN` et `IS_LOGGED_IN` sont `true` en dev, `false` en prod
- La base de données cible est **Cloudflare D1 + Drizzle ORM** (pas encore implémentée — Oracle DB listé dans README est obsolète)
- Le stockage fichiers cible est **Cloudflare R2**

### Design system

Tokens CSS dans `src/styles/tokens.css` — toujours utiliser les variables CSS plutôt que des valeurs hardcodées :
- Couleurs : `var(--color-bg)`, `var(--color-text)`, `var(--color-accent-1)`, `var(--color-accent-2)`…
- Thème sombre via `[data-theme='dark']`, géré par `next-themes` (attribut `data-theme`)
- Utilitaire de classes : `cn()` dans `src/lib/utils.ts` (clsx + tailwind-merge)

### Tests Playwright

Les tests utilisent `data-testid` pour cibler les éléments (ex: `header-nav-music`, `course-chapter-fondamentaux`). Ajouter les `data-testid` appropriés sur tous les nouveaux composants interactifs ou structurants.

## Specs de référence

Ne pas charger automatiquement en contexte — appeler au besoin :
- **`docs/functional-spec.md`** — rôles utilisateurs, pages, fonctionnalités attendues (CMS admin, système de favoris, paiements Stripe pour les tabs…)
- **`docs/technical-spec.md`** — stack cible complète (D1, Drizzle, R2, NextAuth v5, Stripe), structure de repo cible, schéma DB, conventions API
