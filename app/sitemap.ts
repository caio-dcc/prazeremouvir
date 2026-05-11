import type { MetadataRoute } from "next";
import { POSTS, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/servicos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/produtos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/curiosidades`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
  const postRoutes: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE.url}/curiosidades/${p.slug}`,
    lastModified: new Date(p.dataISO),
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...staticRoutes, ...postRoutes];
}
