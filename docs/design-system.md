# Design System

## Colors

Defined as Tailwind v4 CSS variables in `app/globals.css`.

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#15ffd1` | CTAs, highlights, glows, icons |
| `--color-primary-container` | `#004d40` | Selection background |
| `--color-on-primary` | `#00372e` | Text on primary buttons |
| `--color-on-primary-container` | `#b9ffe8` | Text on primary container |
| `--color-surface` | `#070f12` | Page background |
| `--color-background` | `#070f12` | Same as surface |
| `--color-surface-container` | `#121d21` | Cards, elevated surfaces |
| `--color-surface-container-low` | `#0c1518` | Section backgrounds |
| `--color-surface-container-high` | `#1c272c` | Hover states, nav gradient |
| `--color-surface-container-highest` | `#273236` | Ghost button background |
| `--color-on-surface` | `#e0e3e1` | Body text |
| `--color-on-surface-variant` | `#6e777a` | Secondary text, nav links (idle) |
| `--color-outline` | `#899390` | Borders (strong) |
| `--color-outline-variant` | `#41494d` | Borders (subtle), dividers |

### Logo Colors (not Tailwind tokens — used in Nav/Footer inline)

| Element | Hex |
|---|---|
| "Zeerak" wordmark text | `#15ffd1` (same as primary) |
| "Labs" wordmark text | `#ffffff` |

---

## Typography

### Fonts

| Variable | Family | Usage |
|---|---|---|
| `--font-jakarta` (→ `font-headline`, `font-body`, `font-label`) | Plus Jakarta Sans | All headings, nav, buttons, labels |
| `--font-inter-var` (→ `font-inter`) | Inter | Footer copy, form labels, body prose |
| Helvetica Bold (inline) | System Helvetica | Logo wordmark text in Nav/Footer only |

### Scale

| Class | Usage |
|---|---|
| `text-8xl` + `tracking-tighter` + `leading-[0.9]` | Hero H1 |
| `text-5xl` + `tracking-tight` | Section H2 |
| `text-3xl` + `font-bold` | Card H3 |
| `text-xl` + `font-light` | Hero body |
| `text-lg` | Section body |
| `text-xs` + `tracking-widest` + `uppercase` | Labels, CTAs, eyebrows |

---

## Border Radius

The design uses very subtle rounding — almost sharp:

| Token | Value | Usage |
|---|---|---|
| `rounded` (default) | `0.125rem` | Buttons, form inputs |
| `rounded-lg` | `0.25rem` | Cards |
| `rounded-xl` | `0.5rem` | — |
| `rounded-full` | `0.75rem` | Pills (badge chips) |

---

## Custom Utilities

Defined in `app/globals.css`:

### `.glass-gradient`
Semi-transparent cyan tint with backdrop blur. Used on the CTA/contact block.

### `.text-glow`
`text-shadow` in primary cyan. Used on the hero "Intelligence" word.

### `.hero-mesh`
Radial gradient mesh background — subtle cyan glow at top-left and bottom-right. Hero section only.

### `.cyan-border-gradient`
Gradient border effect using `padding-box` / `border-box` trick. Used on Research and Software pillar cards.

---

## Logo Assets

All assets in `public/` — SVG only, no raster images:

| File | Description | Use Where |
|---|---|---|
| `logo-mark.svg` | Z mark only, `#15ffd1`, viewBox `0 0 124 124` | Nav, Footer (paired with inline JSX text), favicon |
| `logo.svg` | Full logo: Z mark + "Zeerak Labs" wordmark, viewBox `0 0 340 124` | General purpose |

### Hero animated Z mark
The hero watermark is not an asset file — it is an inline `<svg>` in `components/Hero.tsx` with Framer Motion animations:
- Z stroke draws itself on load via `pathLength` animation
- 4 tick lines extend from Z corners to edge nodes
- Signal pulse (small circle) travels from Z → along tick line → to dot
- Dot glows (opacity only, no size change) + ripple ring on arrival
- SVG viewBox: `-15 -15 154 154` (extra padding for ripple ring overflow)
- 4 nodes fire independently, 11s cycle, staggered initial delays

Source SVG files are in `/Users/numan/Documents/ZeerakTech/logo-v1/`.

---

## Spacing

Sections use consistent vertical padding:
- Large sections: `py-40`
- Standard sections: `py-32`
- Max content width: `max-w-screen-2xl` (most sections), `max-w-screen-xl` (contact/CTA)
- Horizontal padding: `px-12`
