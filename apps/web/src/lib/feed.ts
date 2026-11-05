import { Post } from "@/interfaces/post";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function renderFeed(
  posts: Pick<Post, "slug" | "title" | "excerpt" | "date">[],
  site: { name: string; description: string; origin: string },
): string {
  const items = posts
    .map((post) => {
      const url = escapeXml(`${site.origin}/posts/${post.slug}`);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${escapeXml(site.origin)}</link>
    <description>${escapeXml(site.description)}</description>
${items}
  </channel>
</rss>
`;
}
