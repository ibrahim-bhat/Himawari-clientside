"use client";

import type { ReelStatus } from "@/types";

interface ReelFiltersProps {
  category: string;
  status: ReelStatus | "all";
  onCategoryChange: (v: string) => void;
  onStatusChange: (v: ReelStatus | "all") => void;
  categories: string[];
}

export default function ReelFilters({ category, status, onCategoryChange, onStatusChange, categories }: ReelFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
      <div className="min-w-[140px]">
        <label className="sr-only">Category</label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded-lg border border-[#259A9E]/30 bg-white py-2.5 pl-3 pr-8 text-sm outline-none focus:border-[#259A9E] min-h-[44px]"
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="min-w-[140px]">
        <label className="sr-only">Status</label>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value as ReelStatus | "all")}
          className="w-full rounded-lg border border-[#259A9E]/30 bg-white py-2.5 pl-3 pr-8 text-sm outline-none focus:border-[#259A9E] min-h-[44px]"
        >
          <option value="all">All statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
      </div>
    </div>
  );
}
