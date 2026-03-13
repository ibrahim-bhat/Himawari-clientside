import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCachedPublishedPosts } from "@/lib/blog/cached-posts";
import { getBaseUrl } from "@/lib/blog/site-url";
import PublicPageShell from "@/components/landing/PublicPageShell";

const baseUrl = getBaseUrl();
const blogUrl = `${baseUrl}/blog`;

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getCachedPublishedPosts();
  const title = "Blog | Himawari";
  const description = "Mental wellness articles, myth busting, and stories from the community.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: blogUrl,
      siteName: "Himawari",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: blogUrl },
  };
}

export default async function BlogListPage() {
  const posts = await getCachedPublishedPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Himawari Blog",
    description: "Mental wellness articles, myth busting, and stories from the community.",
    url: blogUrl,
    publisher: {
      "@type": "Organization",
      name: "Himawari",
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.publishedAt || undefined,
      dateModified: p.updatedAt || undefined,
      author: p.author ? { "@type": "Person", name: p.author } : undefined,
      url: `${baseUrl}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PublicPageShell>
        <div className="section-wrap py-10 sm:py-12">
          <section className="rounded-[34px] border border-[#d8e3dd] bg-white/88 px-6 py-10 shadow-[0_18px_40px_rgba(21,38,33,0.04)] sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#7b8984]">Blog</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#22322e] sm:text-5xl">
                Health Blog
              </h1>
              <p className="mt-4 text-sm leading-7 text-[#687873] sm:text-base">
                Mental wellness articles, myth busting, and stories from the community.
              </p>
            </div>
          </section>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="overflow-hidden rounded-[26px] border border-[#d8e3dd] bg-white shadow-[0_16px_36px_rgba(21,38,33,0.04)]">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="relative h-48 bg-[#dfe8dc]">
                    <Image
                      src={post.image || "/hero-therapy.png"}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#60716c] backdrop-blur-sm">
                      Health Blog
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#22322e]">{post.title}</h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#697874]">{post.excerpt}</p>
                    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8d9b95]">
                      {post.publishedAt && new Date(post.publishedAt).toLocaleDateString("en-US", { dateStyle: "medium" })}
                      {post.author && ` · ${post.author}`}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="mt-10 text-center text-sm text-[#7b8984]">No posts yet. Check back soon.</p>
          )}
        </div>
      </PublicPageShell>
    </>
  );
}
