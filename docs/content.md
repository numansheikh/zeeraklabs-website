# Content Guide

## Landing Page Sections

All landing page content lives directly in the component files under `components/`. No CMS yet — edit the JSX.

### Hero (`components/Hero.tsx`)
- **Headline**: `Engineering the Intelligence of Tomorrow.`
- **Subheading**: the paragraph below the headline
- **CTA buttons**: "Explore Labs" (→ `#pillars`) and "View Case Studies" (→ `#solutions`)

### The Three Pillars (`components/Pillars.tsx`)
Content is driven by the `pillars` array near the top of the file:

```ts
const pillars = [
  {
    id: 'research',
    icon: 'science',          // Material Symbol name
    title: 'Research',
    description: '...',
    cta: 'Deep Dive',
    href: '/research',        // update when page is ready
    variant: 'gradient',
  },
  // ...
]
```

To edit a pillar: update the relevant object. To reorder: move the objects. To change the icon: use any name from [fonts.google.com/icons](https://fonts.google.com/icons).

### Synergy (`components/Synergy.tsx`)
- Main copy: the `<p>` block
- Bullet points: the `checks` array at the top of the file
- Image: replace the `<img src="...">` with your own file in `public/` — use `next/image` when you do

### Contact (`components/Contact.tsx`)
- Email address displayed: update the `hello@zeeraklabs.com` span
- Dropdown options: edit the `<option>` elements in the select
- API endpoint: `app/api/contact/route.ts` — update `to:` address and `from:` sender

---

## Placeholder Pages

These pages exist as stubs and need real content:

| Route | File | Status |
|---|---|---|
| `/research` | `app/research/page.tsx` | Placeholder |
| `/ai-agents` | `app/ai-agents/page.tsx` | Placeholder |
| `/software` | `app/software/page.tsx` | Placeholder |
| `/solutions` | `app/solutions/page.tsx` | Placeholder |
| `/privacy` | `app/privacy/page.tsx` | Needs legal copy |
| `/terms` | `app/terms/page.tsx` | Needs legal copy |

Each file exports a `metadata` object — update the `title` and `description` when adding real content.

---

## Adding a New Page

1. Create `app/your-route/page.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | Zeerak Labs',
  description: 'Page description for SEO.',
}

export default function YourPage() {
  return (
    <main className="min-h-screen bg-background pt-32 px-12">
      {/* content */}
    </main>
  )
}
```

2. Add `pt-32` or `pt-40` to `<main>` to clear the fixed nav
3. Link to it from the nav, footer, or a pillar card `href`

---

## Navigation Links

Edit the `links` array in `components/Nav.tsx`:

```ts
const links = [
  { label: 'Research', href: '#research' },   // anchor on landing page
  { label: 'AI Agents', href: '/ai-agents' }, // or a full route
  // ...
]
```

---

## Footer Links

Edit the `footerLinks` array in `components/Footer.tsx`. Set `external: true` for links that should open in a new tab.

---

## SEO & Metadata

Global metadata (title template, OG defaults) lives in `app/layout.tsx`. Per-page metadata is exported from each `page.tsx` file.

To add a Twitter/OG image specific to a page, export `openGraph.images` in that page's metadata.

---

## Images

- Place images in `public/`
- Use `next/image` component — it handles optimization, lazy loading, and responsive sizing automatically
- Always provide descriptive `alt` text; use `alt=""` for purely decorative images
- For the synergy section image placeholder, drop a file into `public/` and update `components/Synergy.tsx`
