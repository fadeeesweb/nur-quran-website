import type { MetadataRoute } from "next";
import { BASE_PATH, SITE_URL } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const origin = `${SITE_URL}${BASE_PATH}`;

  return [
    {
      url: `${origin}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${origin}/privacy/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${origin}/terms/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${origin}/contact/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
