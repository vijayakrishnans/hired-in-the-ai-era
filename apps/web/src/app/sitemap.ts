import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";
import { SITE_ORIGIN } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_ORIGIN },
    { url: `${SITE_ORIGIN}/about` },
    ...getAllPosts().map((post) => ({
      url: `${SITE_ORIGIN}/posts/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
