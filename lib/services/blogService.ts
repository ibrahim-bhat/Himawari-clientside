import type { BlogPost, BlogStatus } from "@/types";

/** Create URL-safe slug from title */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const mockPosts: BlogPost[] = [
  { id: "1", slug: "understanding-mental-wellness", title: "Understanding Mental Wellness: A Practical Guide", excerpt: "A short guide to daily habits that support mental health. Small changes in routine can make a significant difference in how you feel.", status: "published", publishedAt: "2025-01-10", updatedAt: "2025-01-15", author: "Dr. Adeel Rashid", category: "Self Care", tags: ["wellness", "habits", "mindfulness"], image: "/pic.png" },
  { id: "2", slug: "myth-busting-therapy-only-for-crisis", title: "Myth Busting: Therapy Is Only for Crisis", excerpt: "Why regular check-ins with a professional can help everyone. Prevention and maintenance are just as important as intervention.", status: "published", publishedAt: "2025-01-18", updatedAt: "2025-01-18", author: "Dr. Farhana Malik", category: "Therapy Tips", tags: ["therapy", "myths", "mental health"], image: "/pic.png" },
  { id: "3", slug: "managing-anxiety-daily", title: "Managing Anxiety in Daily Life", excerpt: "Evidence-based strategies to reduce anxiety and regain a sense of calm. Learn techniques you can use at home and at work.", status: "published", publishedAt: "2025-01-22", updatedAt: "2025-01-22", author: "Dr. Sana Mir", category: "Anxiety", tags: ["anxiety", "CBT", "coping"], image: "/pic.png" },
  { id: "4", slug: "signs-of-depression-when-to-seek-help", title: "Signs of Depression: When to Seek Help", excerpt: "Recognizing the signs of depression early can lead to better outcomes. Here’s what to look for and when to reach out.", status: "published", publishedAt: "2025-01-25", updatedAt: "2025-01-25", author: "Dr. Adeel Rashid", category: "Depression", tags: ["depression", "awareness", "support"], image: "/pic.png" },
  { id: "5", slug: "stress-management-techniques", title: "5 Stress Management Techniques That Work", excerpt: "From breathing exercises to time management, discover practical ways to lower stress and protect your mental health.", status: "published", publishedAt: "2025-02-01", updatedAt: "2025-02-01", author: "Dr. Farhana Malik", category: "Stress Management", tags: ["stress", "techniques", "self care"], image: "/pic.png" },
  { id: "6", slug: "self-care-for-busy-people", title: "Self-Care for Busy People", excerpt: "You don’t need hours to practice self-care. Short, consistent habits can help you stay balanced even on hectic days.", status: "published", publishedAt: "2025-02-05", updatedAt: "2025-02-05", author: "Dr. Ali Raza", category: "Self Care", tags: ["self care", "busy", "habits"], image: "/pic.png" },
  { id: "7", slug: "therapy-tips-first-session", title: "What to Expect in Your First Therapy Session", excerpt: "Feeling nervous about your first session? Here’s what typically happens and how to get the most out of it.", status: "published", publishedAt: "2025-02-10", updatedAt: "2025-02-10", author: "Dr. Sana Mir", category: "Therapy Tips", tags: ["therapy", "first session", "tips"], image: "/pic.png" },
  { id: "8", slug: "stories-from-the-valley", title: "Stories from the Valley: Resilience and Hope", excerpt: "Personal stories of resilience and hope from Kashmir. Community and connection in mental health recovery.", status: "draft", publishedAt: "", updatedAt: "2025-02-01", author: "Dr. Farhana Malik", category: "Self Care", tags: ["stories", "resilience"] },
];

export function getBlogPosts(status?: BlogStatus): BlogPost[] {
  let list = [...mockPosts];
  if (status) list = list.filter((p) => p.status === status);
  return list;
}

/** Published posts only (for public routes and sitemap) */
export function getPublishedBlogPosts(): BlogPost[] {
  return getBlogPosts("published");
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return mockPosts.find((p) => p.id === id);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return mockPosts.find((p) => p.slug === slug && p.status === "published");
}
