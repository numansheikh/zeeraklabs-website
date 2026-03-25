# Zeerak Labs — Website

The official website for [zeeraklabs.com](https://zeeraklabs.com). Built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 11 |
| Email | Resend |
| Hosting | Vercel |
| Language | TypeScript |

## Getting Started

```bash
npm install
cp .env.local.example .env.local   # add RESEND_API_KEY
npm run dev                         # → http://localhost:3000
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Production only | Get from [resend.com](https://resend.com) |

Without a key the contact form logs to console and returns success — safe for local dev.

## Project Structure

```
app/
├── page.tsx              # Landing page (assembles sections)
├── layout.tsx            # Root layout, fonts, metadata
├── globals.css           # Tailwind v4 theme + custom utilities
├── api/contact/          # Contact form API (Resend)
├── research/             # Placeholder page
├── ai-agents/            # Placeholder page
├── software/             # Placeholder page
├── solutions/            # Placeholder page
├── privacy/              # Placeholder page
└── terms/                # Placeholder page

components/
├── Nav.tsx               # Sticky nav, scroll-aware backdrop
├── Hero.tsx              # Hero with logo + entrance animations
├── Pillars.tsx           # Three Pillars bento grid
├── Synergy.tsx           # Cross-wing synergy section
├── Contact.tsx           # Contact form with Resend integration
└── Footer.tsx            # Footer

public/
├── logo-mark.png         # Z mark only (nav / favicon contexts)
├── logo-wordmark.png     # Full horizontal wordmark (hero)
├── logo.png              # Transparent-on-dark full logo
├── favicon.png           # 32px favicon
└── og-logo.png           # OG / Twitter card image
```

## Docs

| Document | Contents |
|---|---|
| [docs/design-system.md](docs/design-system.md) | Colors, typography, logo usage, spacing |
| [docs/deployment.md](docs/deployment.md) | Vercel setup, domain, env vars, Resend DNS |
| [docs/content.md](docs/content.md) | Updating copy, adding pages, placeholder roadmap |
| [docs/architecture.md](docs/architecture.md) | Component structure, routing, data flow |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Branch naming, PR process, code style |
| [CHANGELOG.md](CHANGELOG.md) | Version history |

## Repository

[github.com/numansheikh/zeeraklabs-website](https://github.com/numansheikh/zeeraklabs-website)
