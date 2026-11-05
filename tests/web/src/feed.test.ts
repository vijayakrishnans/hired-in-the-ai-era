import { describe, expect, it } from "vitest";
import { renderFeed } from "@/lib/feed";

describe("the RSS feed (apps/web/src/lib/feed.ts)", () => {
  const site = { name: "Site & Co", description: "About <things>", origin: "https://example.com" };
  const post = {
    slug: "a-post",
    title: "Tom & Jerry's <guide>",
    excerpt: "An excerpt",
    date: "2026-11-05T09:00:00.000Z",
  };

  it("links each post by absolute URL with an RFC 822 date", () => {
    const xml = renderFeed([post], site);
    expect(xml).toContain("<link>https://example.com/posts/a-post</link>");
    expect(xml).toContain("<pubDate>Thu, 05 Nov 2026 09:00:00 GMT</pubDate>");
  });

  it("escapes what XML cannot carry literally", () => {
    const xml = renderFeed([post], site);
    expect(xml).toContain("Tom &amp; Jerry&apos;s &lt;guide&gt;");
    expect(xml).toContain("<title>Site &amp; Co</title>");
    expect(xml).toContain("About &lt;things&gt;");
  });
});
