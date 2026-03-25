# Changelog

All notable changes to the Zeerak Labs website are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Planned
- Mobile navigation (hamburger menu)
- Fill in `/research`, `/ai-agents`, `/software`, `/solutions` content
- `/privacy` and `/terms` legal copy
- OG image (designed, not logo placeholder)
- Blog / case studies section
- Vercel Analytics integration

---

## [0.2.0] — 2026-03-25

### Added
- Real logo assets in nav, footer, hero, favicon, and OG metadata
- `logo-mark.png` (Z mark), `logo-wordmark.png` (full horizontal), `favicon.png`, `og-logo.png`
- Large wordmark in hero section as brand anchor with staggered entrance animation

### Changed
- Nav and footer wordmark text split: `#e9f6f5` for "Zeerak", `#a2d9d1` for "Labs", Helvetica Bold
- Hero entrance animation sequence updated to accommodate logo

---

## [0.1.0] — 2026-03-25

### Added
- Next.js 15 App Router scaffold (migrated from single-file HTML)
- Tailwind CSS v4 with full design token theme
- Framer Motion: hero entrance animations, `whileInView` scroll animations on all sections
- Components: `Nav`, `Hero`, `Pillars`, `Synergy`, `Contact`, `Footer`
- Scroll-aware sticky nav with backdrop blur transition
- Contact form with Resend integration (`/api/contact`)
- Placeholder pages: `/research`, `/ai-agents`, `/software`, `/solutions`, `/privacy`, `/terms`
- All links resolved — no dangling `href="#"`
- SEO metadata: Open Graph, Twitter card, robots
- `.env.local.example` for onboarding
