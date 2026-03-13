"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@/components/ui/Icons";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogTable from "@/components/blog/BlogTable";
import type { BlogPost, BlogStatus } from "@/types";

export default function BlogPage() {
  const [statusFilter, setStatusFilter] = useState<BlogStatus | "all">("all");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = statusFilter === "all" ? "" : `?status=${statusFilter}`;
    fetch(`/api/blog/posts${q}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [statusFilter]);

  const handleView = (post: BlogPost) => {
    if (post.url) window.open(post.url, "_blank");
    else if (post.slug) window.open(`/blog/${post.slug}`, "_blank");
    else alert(`Post: ${post.title}`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Blog Management</h1>
            <p className="mt-1 text-sm sm:text-base text-[#6b7280]">
              Create and manage blog posts. Posts can be synced from Google Blogger when API key is configured.
            </p>
          </div>
          <Button variant="primary" onClick={() => alert("New post form coming soon.")}>
            <PlusIcon className="h-5 w-5" />
            <span className="font-semibold text-sm">New Post</span>
          </Button>
        </div>

        <BlogFilters status={statusFilter} onStatusChange={setStatusFilter} />

        {loading ? (
          <div className="rounded-2xl border border-[#259A9E] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-8 text-center text-[#6b7280]">
            Loading posts…
          </div>
        ) : (
          <BlogTable posts={posts} onView={handleView} />
        )}
      </div>
    </DashboardLayout>
  );
}
