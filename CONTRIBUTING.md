# Contributing

## Branch Naming

| Type | Pattern | Example |
|---|---|---|
| Feature | `feat/short-description` | `feat/mobile-nav` |
| Fix | `fix/short-description` | `fix/contact-form-error` |
| Content | `content/short-description` | `content/research-page` |
| Chore | `chore/short-description` | `chore/update-deps` |

## Workflow

1. Branch off `main`
2. Make changes, test locally (`npm run dev`)
3. Run `npm run build` — must pass with zero errors before opening a PR
4. Open PR against `main` with a clear description of what changed and why
5. Merge triggers automatic Vercel deployment

## Code Style

- **TypeScript** — no `any`, no implicit returns in async functions
- **Components** — one component per file, named export matches filename
- **`'use client'`** — only when strictly needed (event handlers, browser APIs, Framer Motion). Keep server components where possible
- **Tailwind** — utility classes in JSX, custom utilities in `globals.css`. No inline `style=` except for values not expressible in Tailwind (e.g. dynamic brand colors)
- **Images** — use `next/image` for all images in `public/`. Always provide `alt` text; use `alt=""` for decorative images

## Adding a New Section

1. Create `components/MySectionName.tsx`
2. Mark `'use client'` only if needed
3. Import and place it in `app/page.tsx` in the correct order
4. Add a scroll-target `id` so nav links can point to it

## Adding a New Page

1. Create `app/page-name/page.tsx`
2. Export `metadata` with `title` and `description`
3. Add a nav link or footer link pointing to `/page-name` if appropriate
4. Update `CHANGELOG.md`

## Environment Variables

Never commit `.env.local`. It is gitignored. Add new variables to `.env.local.example` with a placeholder value and a comment.

## Commit Messages

Follow the pattern: `type: short description`

```
feat: add mobile navigation menu
fix: contact form error state not clearing on retry
content: fill in research page copy
chore: upgrade framer-motion to 12
```
