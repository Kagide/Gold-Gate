# Gold Gate verification report — responsive and SEO update

17 November 2026. Source version 1.1.0. This report separates executed checks from launch checks that still require a live domain or credentials.

## Design changes

Replaced the prior small-font rules with a consistent responsive stylesheet. Body text is 18px, desktop navigation 16px, service introductions 21–23px, service lists 17–18px and form controls 18px. Footer links are 15–16px. Small text is reserved for supporting labels, not service descriptions or form instructions.

Desktop content expands to a maximum 1480px, with a wider header. Desktop service pages have a sticky sidebar and two-column offering lists. Tablet layouts reflow; at 900px and below, related service navigation moves below the main content. Phone cards and offering lists use a single column. Inputs, menus and buttons retain large interaction targets.

## Executed checks

- Production build and TypeScript validation: results in `docs/qa/build.txt`.
- Contact handling: 16 checks, with provider responses mocked. No real email sent.
- SEO configuration: 20 checks in production mode and 20 in preview mode. Uses a reserved test origin, without publishing or sending network requests.
- Responsive browser audit: 11 routes at seven widths, totalling 77 cases. Widths are 320, 375, 768, 1024, 1440, 1920 and 2560 CSS pixels. Heights vary by device category: 667, 812, 1024, 768, 900, 1080 and 1440 pixels respectively.
- Browser audit records overflow, H1 count, titles, descriptions, viewport, robots and computed font sizes, plus axe WCAG checks. Raw final evidence is in `docs/qa/audit-matrix.json`.
- Five mobile service destinations exercised again after the stylesheet change. Desktop and mobile menu checks, service inquiry preselection and keyboard focus behaviour are recorded with the handoff evidence.
- Actual generated static HTML is checked separately for branded unique titles, descriptions, viewport, one H1, preview index protection or production canonicals/schema as appropriate.

The iframe tests use real Chromium rendering at fixed CSS viewports. They are not tests on physical devices, Safari or Firefox. Scrollbars reduce available document content width by 15px. No automated violation does not establish complete WCAG conformance. Axe manual-review items, particularly photographic contrast and some overlapping responsive regions, remain separate from violations.

The temporary responsive reviewer and local axe browser script are removed from the delivered app. Reproduction source is `scripts/responsive-review.tsx`: copy to `app/review/page.tsx` with `node_modules/axe-core/axe.min.js` copied to `public/qa-axe.js` only in a local QA branch. Remove both before release.

## SEO implementation

Unique page titles/descriptions, local service search intent, canonical links, per-page Open Graph/Twitter metadata, generated social image, sitemap, robots, visible breadcrumbs and ProfessionalService/WebSite/Service/BreadcrumbList JSON-LD. The confirmed office address appears in the sitewide business schema. No reviews, ratings, opening hours, geo-coordinates or social accounts are fabricated.

The preview is intentionally noindex. `NEXT_PUBLIC_SITE_URL` enables production URLs and indexing after a rebuild. `GOOGLE_SITE_VERIFICATION` supports an owner-provided Search Console token. A full launch checklist and official Google documentation are in `docs/SEO-LAUNCH.md`.

## Limits and launch work

- No public domain has been configured or deployed. Google indexing, Search Console ownership and live structured-data eligibility have not been verified.
- Lighthouse and field Core Web Vitals remain unmeasured because DevTools is blocked in this browser environment. No performance score is claimed.
- Resend inbox delivery and the optional shared Upstash limiter require approved credentials. The form truthfully reports unavailable delivery meanwhile.
- Full screen-reader, keyboard, switch-control, real-device and cross-browser review remain recommended. Reduced-motion CSS is present; OS-level emulation was not exercised.
- Legal review of the privacy notice and service scope, provider agreements, production security headers, sender-domain authentication and imagery approval remain launch tasks.

The application includes origin, validation, payload-size and spam checks, rate limiting and secure response handling. In-memory limits do not coordinate across server instances; use the documented distributed option for production. No penetration test was performed. Security headers include CSP, nosniff, framing restrictions, referrer policy and restricted device permissions. CSP permits eval only in development; a nonce-based production CSP is an optional additional hardening step.
