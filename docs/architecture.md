# Architecture

## Overview

Single-page marketing site with a handful of stub routes. Built on Next.js 15 App Router with static generation — almost everything is rendered at build time with zero runtime server cost.

```
Browser → Vercel CDN → Static HTML + JS chunks
                     ↘ /api/contact → Resend API (only on form submit)
```

---

## Rendering Strategy

| Route | Strategy | Why |
|---|---|---|
| `/` | Static (SSG) | Pure marketing content, no user-specific data |
| `/research`, `/ai-agents`, etc. | Static (SSG) | Placeholder pages, no dynamic data |
| `/api/contact` | Dynamic (Server) | Needs to call Resend at request time |

All static pages are pre-rendered at build time by Vercel and served from the CDN edge — no Node.js process involved for page loads.

---

## Component Tree

```
app/layout.tsx          ← fonts, global metadata, <html> shell
└── app/page.tsx        ← landing page, server component, assembles sections
    ├── <Nav>           ← 'use client' (scroll listener)
    ├── <Hero>          ← 'use client' (Framer Motion entrance)
    ├── <Pillars>       ← 'use client' (Framer Motion whileInView)
    ├── <Synergy>       ← 'use client' (Framer Motion whileInView)
    ├── <Contact>       ← 'use client' (form state, fetch)
    └── <Footer>        ← server component (static links)
```

All `'use client'` components are client components because they use either browser APIs (scroll events) or Framer Motion (which requires the React reconciler to run in the browser). The root `page.tsx` itself is a server component — it just composes the sections.

---

## Styling

**Tailwind CSS v4** — configured entirely via CSS in `app/globals.css` using `@theme {}` blocks. No `tailwind.config.ts` theme values are active (the file exists but v4 ignores it in favour of CSS config).

Custom utilities (`.glass-gradient`, `.cyan-border-gradient`, `.hero-mesh`, `.text-glow`) are defined as plain CSS in `globals.css` rather than Tailwind plugins — simpler and works identically.

---

## Animations

**Framer Motion** handles all animations:

- **Hero**: `initial`/`animate` with staggered delays — runs on mount, no scroll trigger
- **Pillars**: `whileInView` + `custom` prop for per-card delay — fires once as each card enters the viewport
- **Synergy**: `whileInView` with directional slide (`x: ±40`) — fires once
- **Contact**: `whileInView` fade-up — fires once

All `whileInView` animations use `viewport={{ once: true }}` so they don't replay on scroll-back.

---

## Contact Form Data Flow

```
User fills form
→ handleSubmit (Contact.tsx)
→ POST /api/contact  { name, email, interest, message }
→ app/api/contact/route.ts
  → if RESEND_API_KEY present: send email via Resend
  → else: console.log (dev fallback)
→ { ok: true } or { error: '...' }
→ UI shows success state or error message
```

The API route is a Next.js Route Handler (App Router). It runs server-side only — the Resend API key is never exposed to the browser.

---

## Fonts

Two Google Fonts loaded via `next/font/google` in `app/layout.tsx`:

- **Plus Jakarta Sans** → CSS variable `--font-jakarta` → Tailwind classes `font-headline`, `font-body`, `font-label`
- **Inter** → CSS variable `--font-inter-var` → Tailwind class `font-inter`

`next/font` self-hosts the fonts at build time — no runtime requests to Google Fonts CDN (except for Material Symbols, which is loaded via a `<link>` tag since `next/font` doesn't support variable icon fonts).

---

## Adding Server-Side Data

If a section needs dynamic data (e.g. fetching blog posts, case studies from a CMS):

1. Make the relevant component a server component (remove `'use client'`)
2. Fetch data directly in the component using `async/await`
3. If the component needs both server data AND client interactivity, split it: server wrapper fetches data, client child handles interaction

---

## Future Considerations

| Area | Current | When Needed |
|---|---|---|
| Content | Hardcoded in JSX | Add a headless CMS (Contentlayer, Sanity, Payload) when copy changes frequently |
| Blog | Not present | Add `app/blog/[slug]/page.tsx` with MDX or CMS |
| Analytics | None | Add Vercel Analytics (`@vercel/analytics`) — one import |
| Auth | None | Not needed for a marketing site |
| i18n | None | Next.js has built-in i18n routing if needed |
