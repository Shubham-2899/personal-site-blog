import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { getPublishedPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // getPublishedPosts, not getAllPosts — drafts must never reach the sitemap,
  // even when building locally.
  const posts = await getPublishedPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: new Date(), priority: 1 },
    { url: `${site.url}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${site.url}/uses`, lastModified: new Date(), priority: 0.5 },
  ];

  return [
    ...staticRoutes,
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: post.updatedDate ?? post.date,
      priority: 0.7,
    })),
  ];
}
