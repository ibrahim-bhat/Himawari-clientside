"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Blog post error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="rounded-2xl border border-[#259A9E]/20 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-8 max-w-md text-center">
        <h2 className="text-xl font-bold text-gray-900">Something went wrong</h2>
        <p className="mt-2 text-sm text-gray-600">We couldn’t load this post.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#259A9E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e7d80] transition"
          >
            Try again
          </button>
          <Link
            href="/blog"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#259A9E] px-4 py-2 text-sm font-semibold text-[#259A9E] hover:bg-[#259A9E]/10 transition"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
