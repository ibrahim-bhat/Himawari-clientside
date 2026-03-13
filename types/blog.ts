export type BlogStatus = "draft" | "published";

export const BLOG_CATEGORIES = ["All", "Anxiety", "Depression", "Stress Management", "Therapy Tips", "Self Care"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  status: BlogStatus;
  publishedAt: string;
  updatedAt: string;
  url?: string;
  author?: string;
  image?: string;
  category?: string;
  tags?: string[];
}
