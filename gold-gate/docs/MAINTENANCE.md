# Maintenance recommendation

Monthly: verify telephone/location links and inquiry routing. Review dependency/security updates in a branch, run tests/build, and inspect desktop/mobile before deploying. Check provider delivery failures and spam volumes without recording full message contents in application logs.

Quarterly: have Gold Gate review service descriptions and regulatory references. Test keyboard navigation, contact errors, contrast and the five target widths. Run production Lighthouse on home, service and contact pages. Review Search Console coverage after the approved launch.

When providers or collection change: update the privacy policy and processor arrangements first. Review retention settings in the mailbox, email provider, rate limiter and host. Rotate secrets through environment configuration and redeploy; never place them in source archives.

Before each release: run `npm ci`, `npm test`, `npm run typecheck`, `npm run build`; test real email in a staging mailbox with approved credentials. Check 404, canonicals, robots, sitemap, security headers and image loading. Preview builds must remain noindex. Keep the prior deployment available for rollback.

Future scope: team and insights first when approved content exists. Multilingual routes only with reviewed translations. Treat a client portal as a separate project requiring authentication, authorisation, secure uploads and a retention policy.
