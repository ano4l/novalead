# NovaLeads

NovaLeads is a Next.js site for growth systems serving South African businesses and institutions. The primary journey is Home → Nova Intelligence or BizStack → Growth Audit.

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

## Website brief implementation

- `/`: approved animated hero, process, two solution cards and growth-audit section.
- `/nova-intelligence`: market research, self-hosted LawOS demonstration and capabilities, and the RiskOS/AuditOS pipeline.
- `/bizstack`: integration overview, approved orbit visual, SME growth system, benefits and supplied case studies.
- Existing product, service, work and legal routes remain accessible.
- English and Portuguese copy uses `lib/i18n.ts` and the existing language provider.

The LawOS video and poster are served from `public/`. Ferreira's is labelled built/launching soon; no measured results are claimed. RiskOS and AuditOS are labelled in development. Unprovided dashboard screenshots, pipeline descriptions and current-project details are omitted.

## Audit requests and analytics

When no audit destination is configured, the form clearly offers to save a local draft. The draft is restored when the form is reopened; nothing is sent. Configure the endpoint or existing recipient fields to enable delivery. An email fallback opens a draft in the visitor's email application and does not report it as sent.

`lib/analytics.ts` emits `book_growth_audit` and `open_lawos_demo` into `window.dataLayer` and as `novaleads:analytics` browser events. Connect the project's analytics collector to report these events; no reporting account is bundled.
