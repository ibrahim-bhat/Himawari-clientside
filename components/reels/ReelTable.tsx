"use client";

import type { Reel } from "@/types";
import { Button } from "@/components/ui/Button";

interface ReelTableProps {
  reels: Reel[];
  onApprove: (id: number) => void;
  onDelete: (id: number) => void;
  onToggleComments: (id: number, enabled: boolean) => void;
}

export default function ReelTable({ reels, onApprove, onDelete, onToggleComments }: ReelTableProps) {
  if (reels.length === 0) {
    return (
      <div className="rounded-2xl border border-[#259A9E] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-8 text-center text-[#6b7280]">
        No reels match your filters.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-[#259A9E] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
      <table className="w-full border-collapse text-left min-w-[600px]">
        <thead>
          <tr className="bg-[#D1EDEE] text-[#259A9E]">
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider">Title</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider">Category</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">Views</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">Status</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">Comments</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E5F6F7]">
          {reels.map((reel, index) => (
            <tr key={reel.id} className={`${index % 2 === 0 ? "bg-white" : "bg-[#effbfc]"} hover:bg-[#EAF6F7]`}>
              <td className="px-4 sm:px-6 py-4">
                <span className="text-sm font-medium text-gray-900">{reel.title}</span>
              </td>
              <td className="px-4 sm:px-6 py-4 text-sm text-gray-600">{reel.category}</td>
              <td className="px-4 sm:px-6 py-4 text-center text-sm font-medium text-gray-900">{reel.viewCount.toLocaleString()}</td>
              <td className="px-4 sm:px-6 py-4 text-center">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${reel.status === "approved" ? "bg-[#C6F6D5] text-[#2F855A]" : "bg-[#FEEBC8] text-[#744210]"}`}>
                  {reel.status}
                </span>
              </td>
              <td className="px-4 sm:px-6 py-4 text-center">
                <button
                  type="button"
                  onClick={() => onToggleComments(reel.id, !reel.commentsEnabled)}
                  className={`min-h-[44px] text-sm font-semibold ${reel.commentsEnabled ? "text-[#259A9E]" : "text-gray-400"}`}
                >
                  {reel.commentsEnabled ? "On" : "Off"}
                </button>
              </td>
              <td className="px-4 sm:px-6 py-4 text-right">
                <div className="flex flex-wrap justify-end gap-2">
                  {reel.status === "pending" && (
                    <Button className="min-h-[44px] bg-[#259A9E] hover:bg-[#1d7a7d] text-white text-sm" onClick={() => onApprove(reel.id)}>
                      Approve
                    </Button>
                  )}
                  <Button className="min-h-[44px] border border-red-500 text-red-600 hover:bg-red-50 text-sm" onClick={() => onDelete(reel.id)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
