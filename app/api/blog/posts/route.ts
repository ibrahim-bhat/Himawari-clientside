import { NextResponse } from "next/server";
import { getCachedBlogPosts } from "@/lib/blog/cached-posts";
import { getBlogPosts, slugify } from "@/lib/services/blogService";
import type { BlogPost } from "@/types";

const apiKey = process.env.GOOGLE_API_KEY;
const blogId = process.env.BLOG_ID;

/** Cache-Control: public, s-maxage=60, stale-while-revalidate=300 */
const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") as "draft" | "published" | null;

  if (apiKey && blogId) {
    try {
      const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&fetchBodies=false&fetchImages=false&maxResults=50`;
      const res = await fetch(url, { next: { revalidate: 60 } });
      if (!res.ok) {
        const err = await res.text();
        console.warn("Blogger API error:", res.status, err);
        const posts = await getCachedBlogPosts(status || undefined);
        return NextResponse.json(posts, { headers: CACHE_HEADERS });
      }
      const data = (await res.json()) as { items?: Array<{ id: string; title: string; content?: string; published?: string; updated?: string; url?: string; author?: { displayName?: string } }> };
      const posts: BlogPost[] = (data.items || []).map((p) => {
        const title = p.title || "Untitled";
        const raw = (p.content || "").replace(/<[^>]+>/g, "").trim();
        const excerpt = raw ? raw.slice(0, 120) + (raw.length > 120 ? "…" : "") : title.slice(0, 80) + (title.length > 80 ? "…" : "");
        return {
          id: p.id,
          slug: slugify(title) || p.id,
          title,
          excerpt,
          status: "published" as const,
          publishedAt: p.published ? p.published.slice(0, 10) : "",
          updatedAt: p.updated ? p.updated.slice(0, 10) : "",
          url: p.url,
          author: p.author?.displayName,
        };
      });
      const filtered = status ? posts.filter((p) => p.status === status) : posts;
      return NextResponse.json(filtered, { headers: CACHE_HEADERS });
    } catch (e) {
      console.warn("Blogger fetch failed:", e);
    }
  }

  const posts = await getCachedBlogPosts(status || undefined);
  return NextResponse.json(posts, { headers: CACHE_HEADERS });
}
