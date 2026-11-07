import type { MetadataRoute } from "next";
import { states } from "@/states";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const d = new Date(site.lastReviewed);
  return [
    { url: `${site.url}/`, lastModified: d, priority: 1 },
    ...states.flatMap((s) => [
      { url: `${site.url}/${s.slug}/`, lastModified: d, priority: 0.9 },
      ...(s.indexableSlugs ?? s.countySlugs)().map((c) => ({ url: `${site.url}/${s.slug}/${c}/`, lastModified: d, priority: 0.8 })),
    ]),
    { url: `${site.url}/guides/`, lastModified: d, priority: 0.6 },
    ...guides.map((g) => ({ url: `${site.url}/guides/${g.slug}/`, lastModified: d, priority: 0.7 })),
    { url: `${site.url}/about/`, lastModified: d, priority: 0.3 },
    { url: `${site.url}/methodology/`, lastModified: d, priority: 0.3 },
    { url: `${site.url}/affiliate-disclosure/`, lastModified: d, priority: 0.2 },
    { url: `${site.url}/privacy/`, lastModified: d, priority: 0.2 },
    { url: `${site.url}/contact/`, lastModified: d, priority: 0.2 },
  ];
}
