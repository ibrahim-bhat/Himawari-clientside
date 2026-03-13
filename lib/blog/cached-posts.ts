import { unstable_cache } from "next/cache";
import { getBlogPosts, getPublishedBlogPosts, getBlogPostBySlug, slugify } from "@/lib/services/blogService";
import type { BlogPost, BlogStatus } from "@/types";
import { getAllBloggerPosts, getBloggerPostById, parseIdFromSlug } from "@/lib/blogger";

const CACHE_TAG_BLOG = "blog-posts";
const REVALIDATE_SECONDS = 60;

/** Cached list of published posts (for public pages and sitemap). Revalidates every 60s. */
export async function getCachedPublishedPosts(): Promise<BlogPost[]> {
  return unstable_cache(
    async () => {
      const blogger = await getAllBloggerPosts();
      return blogger.length ? blogger : getPublishedBlogPosts();
    },
    [CACHE_TAG_BLOG, "published"],
    { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG_BLOG] }
  )();
}

/** Cached single post by slug (for public post page). */
export async function getCachedPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return unstable_cache(
    async (s: string) => {
      const id = parseIdFromSlug(s);
      const blogger = await getBloggerPostById(id);
      if (blogger) return blogger;
      return getBlogPostBySlug(s);
    },
    [CACHE_TAG_BLOG, "post", slug],
    { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG_BLOG] }
  )(slug);
}

/** Cached list for admin API (all statuses when filtered). */
export async function getCachedBlogPosts(status?: BlogStatus): Promise<BlogPost[]> {
  return unstable_cache(
    async (s?: BlogStatus) => getBlogPosts(s),
    [CACHE_TAG_BLOG, status ?? "all"],
    { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG_BLOG] }
  )(status);
}

export { slugify };
