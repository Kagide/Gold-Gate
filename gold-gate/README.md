# Gold Gate

Gold Gate’s corporate website, built with Next.js App Router. Built from the supplied Gold Gate flyer on 17 November 2026. Public deployment and real email delivery have not been enabled.

## Run locally

Requires Node.js 22.13+ (Node 24 was used for this build) and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. On Windows, the same commands work in PowerShell from this directory. Production verification:

```bash
npm test
npm run build
npm start
```

`npm test` runs 16 contact-handler checks. It mocks email and distributed limiting, sends no email and needs no secrets. `npm run typecheck` runs TypeScript independently. The dev wrapper supports both standard Next flags and the cloud preview runner’s host/port flags.

## What is included

Home, About, Services, five individual service pages, Contact, Privacy and a custom 404. Accessible service disclosure and mobile navigation, seven-choice deterministic service finder, service-preselected inquiries, local photography, original logo extracted from the flyer, metadata, Open Graph image, sitemap, robots and conditional structured data. Team, insight and locale models are prepared but no unapproved content is published.

## Environment variables

Copy `.env.example` to `.env.local` for local use. Configure the same values in the deployment platform. Never commit real values.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Confirmed origin, e.g. `https://your-approved-domain.rw`. Use exactly the website origin, no path. Enables canonical URLs, sitemap and indexing. Must match browser origin for contact submissions. Omit in review builds. Rebuild after changing this public variable. |
| `RESEND_API_KEY` | Server-only Resend transactional email credential. |
| `CONTACT_FROM` | Verified sender approved by the owner and Resend. |
| `CONTACT_TO` | Owner-approved inquiry recipient. |
| `UPSTASH_REDIS_REST_URL` | Optional distributed rate limiter endpoint. Use together with token for production serverless reliability. |
| `UPSTASH_REDIS_REST_TOKEN` | Server-only credential for the limiter. |

Without the three mail variables, the form announces that delivery is unavailable and the endpoint returns 503. It never shows success for this condition. The configured integration reports success only after the email provider returns an acceptance ID. Provider acceptance does not prove inbox arrival. Verify actual inbox delivery and SPF/DKIM/DMARC before enabling the form publicly. No real email has been tested.

Default rate limit is five validated submissions per IP per ten minutes, in process memory. Memory counters are best effort, do not persist across restarts, and do not coordinate across instances. Configure Upstash for a shared counter before production traffic. Distributed limiter failures fail closed. The IP header relies on the deployment platform replacing forwarded headers; verify this in any non-Vercel hosting environment.

## Deployment on Vercel

1. Obtain owner approval for public deployment and the chosen services/costs.
2. Put the source in an owner-controlled Git repository. Keep `.env.local` excluded.
3. Import the repository in Vercel. Choose Next.js, Node 22 or newer, build `npm run build`. Keep default Next output settings.
4. Configure the owner-approved environment variables, then deploy a preview first.
5. Test the exact production-like origin, including menu keyboard interactions and delivery to the real recipient. Confirm sender verification and review the processor agreements.
6. Approve the privacy policy, contact details, service wording and photographic treatment. Add the approved domain only after explicit authorization.
7. Set `NEXT_PUBLIC_SITE_URL` to that domain, rebuild and verify canonical URLs, robots and sitemap. Submit the sitemap to the owner’s Search Console after approval.

The app needs a Next.js server runtime for `/api/contact`; a plain static export is not sufficient. No paid account, hosting registration or live domain was created for this delivery. The default review build is noindex and disallows crawling. Production-only URLs are deliberately absent until an approved origin exists.

## Editing and future features

- `lib/content.ts`: company facts, offerings, editorial models, future locale keys.
- `components/`: navigation, finder, form and reusable page sections.
- `app/services/[slug]/page.tsx`: service page template.
- `app/api/contact/route.ts`: validation, origin protection, honeypot, limiter and mail handling.
- `app/globals.css`: responsive styling, focus and reduced motion rules.
- `docs/`: research, factual decisions, owner approvals, QA and maintenance.

English is the only published language. Add reviewed dictionaries and locale routes before offering language controls. Populate team and insight models only with approved material, then implement the relevant routes/navigation. Scope any portal separately with proper authentication and document security. No database or AI API is needed for the present website.

## Assets and factual limits

The original flyer’s logo and tagline are preserved as a high-resolution raster extraction. Request the official SVG/AI before brand-final production. The architectural hero is illustrative stock photography, not Kigali City Tower or Gold Gate premises. See `docs/ASSETS.md` for provenance. No fictional staff, testimonials, accreditations, statistics, company history, email address or social accounts are published.

The confirmed office address is Kigali City Tower, 14th floor. Engineering is not promoted as a defined service without an agreed offering. Some tax text refers to foreign terminology and historic institutions. The site avoids reproducing those specifics as current Rwandan advice. Owner and qualified local reviewer approval remains necessary.

## Windows PowerShell

If PowerShell blocks npm.ps1, use `npm.cmd ci` and `npm.cmd run dev`. No execution-policy change is needed. The Services label opens the services page; its arrow opens the service menu.

## Responsive layout and search setup (v1.1)

The design now uses 18px body copy, 16px desktop navigation, readable service lists and a content width up to 1480px. Phone, tablet and desktop layouts reflow at separate breakpoints. At 900px and below, service navigation moves below the main content; at desktop widths it uses a sticky sidebar. Browser zoom remains under the visitor’s control. Use Ctrl+0 to view at 100% while reviewing.

`lib/seo.ts` centralises page titles, descriptions, social previews and company/service structured data. Set the confirmed `NEXT_PUBLIC_SITE_URL` and rebuild to activate production canonicals, sitemap, indexing and JSON-LD. `GOOGLE_SITE_VERIFICATION` optionally adds the owner’s Search Console verification token. Read `docs/SEO-LAUNCH.md` for the launch and Google submission steps. Localhost is deliberately noindex.

Run `npm run test:seo` to check preview and production metadata contracts. It uses a reserved `.test` domain in memory and publishes nothing. `scripts/check-built-seo.mjs` checks the actual generated static HTML after a build. Use it without `SEO_CHECK_ORIGIN` for a preview build; set that variable to the exact build origin when checking production HTML. No Lighthouse or Google indexing result is implied by these checks.
