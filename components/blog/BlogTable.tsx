"use client";

import type { BlogPost } from "@/types";
import { Button } from "@/components/ui/Button";

interface BlogTableProps {
  posts: BlogPost[];
  onView: (post: BlogPost) => void;
}

export default function BlogTable({ posts, onView }: BlogTableProps) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-[#259A9E] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-8 text-center text-[#6b7280]">
        No blog posts match your filters.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-[#259A9E] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
      <table className="w-full border-collapse text-left min-w-[600px]">
        <thead>
          <tr className="bg-[#D1EDEE] text-[#259A9E]">
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider">Title</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider hidden sm:table-cell">Excerpt</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">Status</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider">Updated</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E5F6F7]">
          {posts.map((post, index) => (
            <tr key={post.id} className={`${index % 2 === 0 ? "bg-white" : "bg-[#effbfc]"} hover:bg-[#EAF6F7]`}>
              <td className="px-4 sm:px-6 py-4">
                <span className="text-sm font-medium text-gray-900">{post.title}</span>
              </td>
              <td className="px-4 sm:px-6 py-4 text-sm text-gray-600 hidden sm:table-cell max-w-[280px] truncate">
                {post.excerpt || "—"}
              </td>
              <td className="px-4 sm:px-6 py-4 text-center">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                    post.status === "published" ? "bg-[#C6F6D5] text-[#2F855A]" : "bg-[#FEEBC8] text-[#744210]"
                  }`}
                >
                  {post.status}
                </span>
              </td>
              <td className="px-4 sm:px-6 py-4 text-sm text-gray-600">{post.updatedAt || "—"}</td>
              <td className="px-4 sm:px-6 py-4 text-right">
                <Button variant="secondary" className="!min-h-0 !py-2 text-xs" onClick={() => onView(post)}>
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
