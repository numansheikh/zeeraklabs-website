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

## [0.4.0] — 2026-03-26

### Changed
- Hero Z mark: signal bead now travels strictly along tick line (fixed radius, no float effect)
- Hero Z mark: endpoint dots glow in place — opacity-only animation, no size/position change
- Hero Z mark: ripple ring emanates from dot on signal arrival, no longer clipped
- SVG viewBox expanded from `-5 -5 134 134` to `-15 -15 154 154` to accommodate ring overflow

---

## [0.3.0] — 2026-03-26

### Added
- Animated Z mark watermark in hero section — fully vector SVG, no video/GIF
  - Z stroke draws itself on load (pathLength animation)
  - 4 tick lines extend from Z corners/midpoints to edge nodes
  - Signal pulse travels from Z stroke → along tick line → to endpoint dot
  - Dot glows on arrival with expanding ripple ring
  - 4 nodes fire independently with staggered delays (2.1s, 3.7s, 5.6s, 7.9s), 11s cycle
- Tick lines briefly brighten as signal passes over them

### Changed
- Replaced hero wordmark logo with animated Z mark (removed visual repetition with nav)
- Unified all green/teal shades to single `#15ffd1`; "Labs" wordmark text changed to `#ffffff`
- Nav/footer logo: switched to `logo-mark.svg` (Z mark only) + inline JSX text for full size control
- Logo text: Helvetica weight 400, size 1.35em, single line ("Zeerak" cyan / "Labs" white)
- All PNG logo assets replaced with SVG (`logo.svg`, `logo-mark.svg`)

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
