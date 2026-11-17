# Google Search launch guide

The website includes search metadata and crawlable HTML. A public HTTPS domain and an approved deployment are still required for Google to discover it. Running on localhost does not publish the site or make it searchable. Search visibility and rich results are not guaranteed.

## Implemented

- Distinct titles and descriptions for Home, About, Services, five service pages, Contact and Privacy.
- Local search intent in service titles: accounting/bookkeeping in Kigali, tax/VAT in Rwanda, business registration assistance, consultancy and QuickBooks support.
- Canonical URLs when the confirmed production origin is configured. Contact query-string variants share the `/contact` canonical.
- Page-specific Open Graph and social sharing descriptions with a generated preview image.
- XML sitemap and robots.txt routes.
- ProfessionalService, WebSite, Service and BreadcrumbList JSON-LD based on supplied company details. The business address is Kigali City Tower, 14th floor, Kigali, Rwanda. No fictional reviews, ratings, opening hours, coordinates or social accounts.
- Server-rendered service content, semantic headings, visible breadcrumb links and internal links between related services.
- Device-width viewport, responsive layouts, large readable copy, descriptive image alt text and explicit image sizing.
- Optional Search Console verification through `GOOGLE_SITE_VERIFICATION`.
- Local previews remain noindex. The sitemap and production schema activate only when `NEXT_PUBLIC_SITE_URL` is supplied.

## Before launch

1. Confirm the domain and approve public deployment.
2. Set `NEXT_PUBLIC_SITE_URL` to the exact production origin, for example the actual approved HTTPS domain without a path. Do not enter a sample or test domain. Rebuild after setting it.
3. Deploy the Next.js application on the approved host and connect the domain. Redirect alternate domain versions to the chosen canonical origin at the host. Confirm HTTPS and absence of password walls on public pages.
4. Check the live HTML: distinct title and description, one H1, canonical on the correct domain, index/follow robots, company schema and service breadcrumbs. Check a missing page returns 404 and API endpoints remain outside the sitemap.
5. Inspect `/robots.txt` and `/sitemap.xml`. Verify all ten public URLs use the final domain and return successful responses. Keep the API excluded from the sitemap.
6. Verify domain ownership in the owner’s Google Search Console account. DNS verification is an option. For HTML-tag verification, put the supplied token in `GOOGLE_SITE_VERIFICATION`, rebuild and complete verification.
7. Submit `/sitemap.xml` in Search Console. Use URL Inspection on Home, Services and the main service pages, then request indexing if available.
8. Run Google’s Rich Results Test and Schema.org Validator on the deployed pages. The current checks validate our structured-data content and rendering; they do not replace Google’s live eligibility test.
9. Run production Lighthouse and PageSpeed Insights. Monitor Core Web Vitals and indexing after launch.
10. Create or update an owner-managed Google Business Profile if eligible. Use the same business name, address and phone as the website. The owner must complete verification and provide approved hours/categories/photos. No profile was created for this delivery.

## Ongoing discovery

Publish approved, useful business content when available. Keep service descriptions and contact details current. Seek legitimate references from relevant organisations and business listings. Avoid invented testimonials, keyword stuffing, purchased links or unsupported tax claims. Review Search Console queries and coverage to decide which content to improve.

## Sources

Google Search Central, accessed 17 November 2026:
- https://developers.google.com/search/docs/essentials
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/local-business

Search essentials explains that meeting best practices does not guarantee crawling, indexing or appearance in results. Structured data describes a business but does not by itself verify a Maps listing or guarantee a knowledge panel.
