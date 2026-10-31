# arrestregistry.com

Next.js (App Router) static site. County guides for finding arrest, jail, and court records from official sources.

## Run locally

```
npm install
npm run dev
```

## Deploy (Vercel)

1. Create a GitHub repo (e.g. `bdemorett/arrestregistry`) and push this folder.
2. In Vercel, under the `beforeyoumovethere` team: Add New > Project > import the repo. Framework auto-detects as Next.js.
3. Add environment variables (Settings > Environment Variables), then redeploy:
   - `NEXT_PUBLIC_GA_ID` = your GA4 measurement ID (G-XXXXXXXXXX)
   - `NEXT_PUBLIC_AFFILIATE_URL` / `NEXT_PUBLIC_AFFILIATE_NAME` once an affiliate program approves you (the CTA stays hidden until then)
   - `NEXT_PUBLIC_GSC_VERIFICATION` only if you use the HTML-tag method instead of DNS
4. Settings > Domains: add `arrestregistry.com` and `www.arrestregistry.com`. Set the apex as primary; the www host 301s to the apex in `next.config.mjs`.
5. At Namecheap (or wherever the domain is registered), add the DNS records Vercel shows.

## Google Analytics 4

1. analytics.google.com > Admin > Create property "Arrest Registry", time zone Central.
2. Data streams > Web > `https://arrestregistry.com`. Copy the measurement ID into `NEXT_PUBLIC_GA_ID`.
3. Custom events sent by the site:
   - `affiliate_click` (param `placement`): mark as a key event in Admin > Events.
   - `official_link_click` (param `link_domain`): shows which official tools people use.

## Google Search Console

1. search.google.com/search-console > Add property > **Domain** > `arrestregistry.com`.
2. Copy the TXT record and add it at your DNS host. Verify.
3. Sitemaps > submit `https://arrestregistry.com/sitemap.xml`.
4. URL Inspection > request indexing for `/minnesota/` and each county page.

Bing Webmaster Tools: import the property from Search Console, then submit the same sitemap.

## Adding counties

Everything lives in `data/minnesota.ts`. A county page is generated, linked, and added to the sitemap only when it has a `detail` entry.

For each county, verify on the sheriff's official site:
- jail name, address, phone
- roster/inmate search URL and what it shows (how long after release, update frequency)
- warrant search URL if one exists
- booking photo policy page if one exists

Set `verified` to the date you checked. Add the official pages to `sources`.

Published so far (verified 2026-10-29): Hennepin, Ramsey, Anoka, Dakota, Washington.
