# NovaLeads

NovaLeads is a Next.js marketing site for an AI-powered lead generation business focused on service companies and SMEs.

## Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- React Three Fiber / Drei

## Local Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run start
```

## Runtime Content Settings

The homepage stat, footer client portal URL, footer privacy line, and form
submission destinations load from `public/novaleads-site-settings.json` by
default. Set `NEXT_PUBLIC_NOVALEADS_SITE_SETTINGS_URL` to point at a hosted CMS
or JSON endpoint when those values should be editable without changing code.

Empty values are intentional until Miguel provides the final inputs:

- `homepageHeroStat.value` keeps the hero stat hidden until a real number is
  approved.
- `footer.clientPortalUrl` keeps the Client Login link hidden until the GHL URL
  is ready.
- `leadCapture.auditFormEndpoint` / `leadCapture.referralFormEndpoint` should be
  set before launch, or pair the forms with the matching fallback recipient
  email fields.
- `footer.privacyStatement` should only contain legal-reviewed copy.

## Vercel

This repository is structured so Vercel can deploy it directly from the repo root with the default Next.js settings.
