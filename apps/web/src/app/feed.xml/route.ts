import { getAllPosts } from "@/lib/api";
import { renderFeed } from "@/lib/feed";
import { SITE_DESCRIPTION, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const xml = renderFeed(getAllPosts(), {
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    origin: SITE_ORIGIN,
  });
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
