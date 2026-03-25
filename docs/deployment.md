# Deployment

## Vercel (Production)

The site is deployed on Vercel, connected to the `main` branch of the GitHub repository. Every push to `main` triggers a production deployment automatically.

### Initial Setup (one-time)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `numansheikh/zeeraklabs-website`
3. Framework preset: **Next.js** (auto-detected)
4. No build command changes needed — defaults are correct
5. Add environment variables (see below)
6. Deploy

### Environment Variables

Set these in the Vercel dashboard under **Project → Settings → Environment Variables**:

| Variable | Environment | Value |
|---|---|---|
| `RESEND_API_KEY` | Production | Your Resend API key |

For preview/development deployments the contact form will fall back to console logging — no key needed.

### Custom Domain

Once your domain is registered:

1. Vercel dashboard → **Project → Settings → Domains**
2. Add `zeeraklabs.com` and `www.zeeraklabs.com`
3. Vercel will provide DNS records — add them at your registrar:
   - `A` record: `@` → Vercel IP
   - `CNAME` record: `www` → `cname.vercel-dns.com`
4. SSL is provisioned automatically

---

## Resend (Contact Form Email)

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain (`zeeraklabs.com`) — Resend provides DNS records:
   - SPF, DKIM, and DMARC records to add at your registrar
3. Create an API key in Resend dashboard
4. Add it to Vercel env vars as `RESEND_API_KEY`
5. Update the `from` address in `app/api/contact/route.ts` if needed:
   ```ts
   from: 'Zeerak Labs <noreply@zeeraklabs.com>',
   to: 'hello@zeeraklabs.com',
   ```

---

## Preview Deployments

Every pull request automatically gets a preview URL from Vercel (e.g. `zeeraklabs-website-git-feat-mobile-nav.vercel.app`). These are safe to share for review — they do not affect production.

---

## Local Production Build

To test the production build locally before pushing:

```bash
npm run build
npm start
# → http://localhost:3000
```

Always run this before opening a PR — the CI equivalent of "does it ship".

---

## Rollback

Vercel keeps deployment history. To roll back:

1. Vercel dashboard → **Deployments**
2. Find the last good deployment
3. Click **...** → **Promote to Production**
