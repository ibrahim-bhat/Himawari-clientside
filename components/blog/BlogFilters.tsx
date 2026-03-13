"use client";

import type { BlogStatus } from "@/types";

interface BlogFiltersProps {
  status: BlogStatus | "all";
  onStatusChange: (v: BlogStatus | "all") => void;
}

export default function BlogFilters({ status, onStatusChange }: BlogFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
      <div className="min-w-[140px]">
        <label className="sr-only">Status</label>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value as BlogStatus | "all")}
          className="w-full rounded-lg border border-[#259A9E]/30 bg-white py-2.5 pl-3 pr-8 text-sm outline-none focus:border-[#259A9E] min-h-[44px]"
        >
          <option value="all">All statuses</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>
    </div>
  );
}
