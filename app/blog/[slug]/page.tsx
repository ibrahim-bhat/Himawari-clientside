import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCachedPostBySlug, getCachedPublishedPosts } from "@/lib/blog/cached-posts";
import { getBaseUrl } from "@/lib/blog/site-url";
import PublicPageShell from "@/components/landing/PublicPageShell";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getCachedPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCachedPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/blog/${post.slug}`;
  const title = `${post.title} | Himawari Blog`;
  const description = post.excerpt.slice(0, 160);
  const image = post.image || `${baseUrl}/og-blog-default.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Himawari",
      type: "article",
      publishedTime: post.publishedAt || undefined,
      modifiedTime: post.updatedAt || undefined,
      authors: post.author ? [post.author] : undefined,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getCachedPostBySlug(slug);
  if (!post) notFound();

  const baseUrl = getBaseUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt || undefined,
    dateModified: post.updatedAt || undefined,
    author: post.author ? { "@type": "Person", name: post.author } : undefined,
    publisher: {
      "@type": "Organization",
      name: "Himawari",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    url: `${baseUrl}/blog/${post.slug}`,
    image: post.image || undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PublicPageShell>
        <article className="section-wrap py-10 sm:py-12">
          <div className="mx-auto max-w-4xl">
            <header className="rounded-[34px] border border-[#d8e3dd] bg-white/90 px-6 py-10 text-center shadow-[0_18px_40px_rgba(21,38,33,0.04)] sm:px-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#7b8984]">Health Blog</p>
              <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#22322e] sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8d9b95]">
                {post.publishedAt && new Date(post.publishedAt).toLocaleDateString("en-US", { dateStyle: "long" })}
                {post.author && ` · ${post.author}`}
              </p>
            </header>

            <div className="mt-8 rounded-[30px] border border-[#d8e3dd] bg-white p-6 shadow-[0_16px_36px_rgba(21,38,33,0.04)] sm:p-8 lg:p-10">
              <p className="whitespace-pre-wrap text-sm leading-8 text-[#5d6d68] sm:text-base">
                {post.excerpt}
              </p>
              {post.url && (
                <p className="mt-8">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-[#d4e3de] px-5 py-2.5 text-sm font-semibold text-[#188F8C] transition-colors hover:bg-[#f4faf8]"
                  >
                    Read full post on Blogger
                  </a>
                </p>
              )}
            </div>

            <div className="mt-8">
              <Link href="/blog" className="inline-flex rounded-full border border-[#d4e3de] bg-white px-5 py-2.5 text-sm font-semibold text-[#22322e] transition-colors hover:bg-[#f8fbf9]">
                Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </PublicPageShell>
    </>
  );
}
