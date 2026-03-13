import { unstable_cache } from "next/cache";
import type { BlogPost } from "@/types";
import { slugify } from "@/lib/services/blogService";

type BloggerImage = { url: string };
type BloggerAuthor = { displayName?: string };

type BloggerPost = {
  id: string;
  title?: string;
  content?: string;
  url?: string;
  published?: string;
  updated?: string;
  author?: BloggerAuthor;
  labels?: string[];
  images?: BloggerImage[];
};

type BloggerPostList = {
  items?: BloggerPost[];
  nextPageToken?: string;
};

function getApiKey(): string | null {
  return process.env.BLOGGER_API_KEY || process.env.GOOGLE_API_KEY || null;
}

function getBlogId(): string | null {
  return process.env.BLOGGER_BLOG_ID || process.env.BLOG_ID || null;
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findFirstImageFromHtml(html?: string): string | undefined {
  if (!html) return undefined;
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m?.[1];
}

function excerptFromContent(content: string | undefined, title: string): string {
  const text = content ? stripHtml(content) : "";
  const base = text || title;
  const trimmed = base.slice(0, 150);
  return base.length > 150 ? `${trimmed}…` : trimmed;
}

function mapCategory(labels?: string[]): string | undefined {
  if (!labels || labels.length === 0) return undefined;
  // Use first label as category; remaining as tags.
  return labels[0];
}

function mapTags(labels?: string[]): string[] | undefined {
  if (!labels || labels.length <= 1) return undefined;
  return labels.slice(1);
}

function normalize(p: BloggerPost): BlogPost {
  const title = p.title || "Untitled";
  const image = p.images?.[0]?.url || findFirstImageFromHtml(p.content);
  const category = mapCategory(p.labels);
  const tags = mapTags(p.labels);
  return {
    id: p.id,
    slug: slugify(title) ? `${p.id}-${slugify(title)}` : p.id,
    title,
    excerpt: excerptFromContent(p.content, title),
    status: "published",
    publishedAt: p.published ? p.published.slice(0, 10) : "",
    updatedAt: p.updated ? p.updated.slice(0, 10) : "",
    url: p.url,
    author: p.author?.displayName,
    image,
    category,
    tags,
  };
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    next: { revalidate: 300, tags: ["blogger-posts"] },
  });
  if (!res.ok) {
    const err = await res.text().catch(() => "");
    throw new Error(`Blogger API failed (${res.status}). ${err}`);
  }
  return (await res.json()) as T;
}

const LIST_FIELDS =
  "items(id,title,content,url,published,updated,author/displayName,labels,images/url),nextPageToken";
const SINGLE_FIELDS =
  "id,title,content,url,published,updated,author/displayName,labels,images/url";

async function listPostsUncached(maxResults = 50): Promise<BlogPost[]> {
  const apiKey = getApiKey();
  const blogId = getBlogId();
  if (!apiKey || !blogId) return [];

  const params = new URLSearchParams({
    key: apiKey,
    fetchImages: "true",
    fetchBodies: "true",
    orderBy: "PUBLISHED",
    maxResults: String(Math.min(Math.max(maxResults, 1), 100)),
    fields: LIST_FIELDS,
  });
  const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?${params.toString()}`;
  const data = await fetchJson<BloggerPostList>(url);
  return (data.items || []).map(normalize);
}

async function getPostByIdUncached(id: string): Promise<BlogPost | null> {
  const apiKey = getApiKey();
  const blogId = getBlogId();
  if (!apiKey || !blogId) return null;

  const params = new URLSearchParams({
    key: apiKey,
    fetchImages: "true",
    fields: SINGLE_FIELDS,
  });
  const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${id}?${params.toString()}`;
  const data = await fetchJson<BloggerPost>(url);
  return normalize(data);
}

export function parseIdFromSlug(slug: string): string {
  const idx = slug.indexOf("-");
  return idx > 0 ? slug.slice(0, idx) : slug;
}

export const getAllBloggerPosts = unstable_cache(
  async () => listPostsUncached(50),
  ["blogger", "posts"],
  { revalidate: 300, tags: ["blogger-posts"] }
);

export const getBloggerPostById = unstable_cache(
  async (id: string) => getPostByIdUncached(id),
  ["blogger", "post"],
  { revalidate: 300, tags: ["blogger-posts"] }
);

