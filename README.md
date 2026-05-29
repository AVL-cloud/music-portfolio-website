# Music Portfolio Website

A portfolio website for musicians, built with Next.js, NextAuth, and Oracle DB. End-to-end tests are written with Playwright.

## Tech stack

- **Frontend**: React, TipTap (rich text editor)
- **Auth**: NextAuth
- **Database**: Oracle DB (`oracledb`)
- **Forms**: React Hook Form + Zod
- **Tests**: Playwright

## Getting started

```bash
npm install
```

Configure your environment variables in a `.env.local` file (see `.env.example` if available), then start the development server:

```bash
npm run dev
```

## Running tests

```bash
npx playwright test
```
