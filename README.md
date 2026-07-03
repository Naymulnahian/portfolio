# AI/ML Portfolio — Next.js + TypeScript + Tailwind + Framer Motion

A premium, dark-mode, single-page portfolio for an AI/ML Software Engineer &
Researcher. Built with Next.js App Router, TypeScript, Tailwind CSS, and
Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize your content

Almost everything on the page is driven from a single file:

```
lib/data.ts
```

Edit the arrays there to update your name-independent content: skills,
projects, research interests, education, experience, certificates, and
social links. Section components read from this file, so most changes never
require touching component code.

A few things to personalize by hand:

- **Name & headline** — `app/layout.tsx` (metadata), `components/navbar.tsx`,
  `components/sections/hero.tsx`.
- **Resume** — drop a `resume.pdf` file into `public/` (the download buttons
  already link to `/resume.pdf`).
- **Profile photo** — replace the placeholder circle in
  `components/sections/hero.tsx` with a Next.js `<Image />`.
- **Project & certificate images** — add files to `public/projects` and
  `public/certificates`, then swap the placeholder blocks in
  `components/sections/projects.tsx` / `certificates.tsx` for `<Image />`.
- **GitHub stats** — `components/sections/github-stats.tsx` currently uses
  static placeholder data; wire it up to the GitHub REST/GraphQL API when
  ready.
- **Contact form** — `components/sections/contact.tsx` simulates a submit;
  connect it to your email service or an API route to make it functional.

## Project structure

```
app/                 App Router entry (layout, page, global styles)
components/
  navbar.tsx         Sticky glass navigation
  footer.tsx          Footer
  sections/           One component per page section
  ui/                 Reusable primitives (reveal animations, timeline, etc.)
lib/
  data.ts             All portfolio content
  utils.ts            Tailwind class-merging helper
types/                Shared TypeScript types
```

## Tech

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS with a custom design-token theme
- Framer Motion for scroll reveals, stagger, and hover motion
- Lucide React icons

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google`
  and are fetched automatically the first time you run `npm run dev` or
  `npm run build` — an internet connection is required for that step.
- The contribution graph and GitHub stats are static placeholders by design,
  so the page renders correctly before you connect a live data source.
