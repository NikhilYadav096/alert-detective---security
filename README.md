# Bahnewal & Co. — Website

Vite + React + React Router. Corporate marketing site for Bahnewal & Co.

## Local development

```
npm install
npm run dev      # starts the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

> **Note:** this folder's name contains an `&`, which breaks npm's default
> Windows PowerShell script wrapper for bare `vite`/`vite build` commands.
> The scripts in `package.json` work around it by invoking
> `node ./node_modules/vite/bin/vite.js` directly — keep that pattern if you
> add new npm scripts here, or rename the folder to drop the `&`.

## Before going live — things to update

The production domain is `https://www.bahnewalco.in` — already wired into
`index.html` (canonical + OG/Twitter tags), `public/robots.txt`, `public/sitemap.xml`
and `src/hooks/useDocumentMeta.js` (`SITE_ORIGIN`). If the domain ever changes,
update it in those same four places.

Other things worth doing before launch:

- **Analytics**: none is wired in yet (skipped intentionally — ask if you
  want Google Analytics, Plausible, etc. added; it should be gated behind
  the cookie-consent banner in `src/components/CookieConsent.jsx`).
- **FormSubmit activation**: the contact form posts to FormSubmit.co
  (`src/lib/api.js`). The first submission triggers an activation email to
  the configured inbox — click the activation link or enquiries won't land.
- **Legal pages**: `/privacy-policy` and `/terms` are general-purpose
  templates reflecting what this site actually does (FormSubmit-based
  contact form, no analytics/tracking yet). Have them reviewed by a
  qualified legal professional before relying on them for compliance.
- **Vercel deploy**: `vercel.json` includes the SPA rewrite rule client-side
  routing needs (without it, every route except `/` 404s on refresh) and an
  HSTS header for HTTPS enforcement. Vercel auto-redirects HTTP→HTTPS at the
  platform level regardless.
