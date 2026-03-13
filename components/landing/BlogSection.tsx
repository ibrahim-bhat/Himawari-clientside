import Image from "next/image";
import Card from "@/components/ui/Card";
import SectionHeader from "./SectionHeader";
import type { BlogPost } from "@/types";

interface BlogSectionProps {
  posts?: BlogPost[];
}

const placeholderPosts = [
  {
    id: "1",
    title: "Understanding anxiety and how therapy helps",
    excerpt: "Anxiety affects millions worldwide. Learn how professional counseling can provide lasting relief and tools to manage daily stress.",
    publishedAt: "2026-01-15",
    image: "/hero-therapy.png",
  },
  {
    id: "2",
    title: "The importance of mental health in daily life",
    excerpt: "Mental wellness is as vital as physical health. Discover practical strategies to maintain balance and emotional wellbeing.",
    publishedAt: "2026-02-10",
    image: "/hero-therapy.png",
  },
  {
    id: "3",
    title: "Breaking the stigma around seeking help",
    excerpt: "Seeking mental health support is a sign of strength. Read real stories from people who found healing through professional guidance.",
    publishedAt: "2026-03-01",
    image: "/hero-therapy.png",
  },
];

export default function BlogSection({ posts = [] }: BlogSectionProps) {
  const displayPosts = posts.length > 0 ? posts.slice(0, 3) : placeholderPosts;

  return (
    <section id="blog" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-wrap">
        <SectionHeader
          badge="Blog"
          title="Health Blog"
          subtitle="Articles, myth-busting and stories from our community."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden p-0">
              <div className="relative h-44 w-full bg-gray-100">
                <Image
                  src={post.image || "/hero-therapy.png"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold leading-snug text-[#111827] line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6b7280] line-clamp-3">{post.excerpt}</p>
                {post.publishedAt && (
                  <p className="mt-3 text-xs text-[#9ca3af]">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", { dateStyle: "medium" })}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
