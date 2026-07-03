import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = "https://mubasharhassan.com";

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
