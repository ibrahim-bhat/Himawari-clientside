"use client";

import { useState, useMemo } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@/components/ui/Icons";
import ReelFilters from "@/components/reels/ReelFilters";
import ReelTable from "@/components/reels/ReelTable";
import ReelUploadModal from "@/components/reels/ReelUploadModal";
import {
  getReels,
  createReel,
  updateReelStatus,
  updateReelComments,
  deleteReel,
} from "@/lib/services/reelService";
import type { ReelStatus } from "@/types";

export default function ReelsPage() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<ReelStatus | "all">("all");
  const [uploadOpen, setUploadOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const reels = useMemo(
    () => getReels(categoryFilter || undefined, statusFilter === "all" ? undefined : statusFilter),
    [categoryFilter, statusFilter, refreshKey]
  );

  const categories = useMemo(() => Array.from(new Set(reels.map((r) => r.category))), [reels]);
  const allCategories = useMemo(() => ["Myth Busting", "Stories", ...categories].filter((c, i, a) => a.indexOf(c) === i), [categories]);

  const handleUpload = (title: string, category: string) => {
    createReel({ title, category, status: "pending", commentsEnabled: false });
    setRefreshKey((k) => k + 1);
  };

  const handleApprove = (id: number) => {
    updateReelStatus(id, "approved");
    setRefreshKey((k) => k + 1);
  };

  const handleDelete = (id: number) => {
    if (typeof window !== "undefined" && window.confirm("Delete this reel?")) {
      deleteReel(id);
      setRefreshKey((k) => k + 1);
    }
  };

  const handleToggleComments = (id: number, enabled: boolean) => {
    updateReelComments(id, enabled);
    setRefreshKey((k) => k + 1);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Reels Management</h1>
            <p className="mt-1 text-sm sm:text-base text-[#6b7280]">Upload, approve, and manage reels. Control view count and comments.</p>
          </div>
          <Button
            className="bg-[#259A9E] hover:bg-[#1d7a7d] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 min-h-[44px]"
            onClick={() => setUploadOpen(true)}
          >
            <PlusIcon className="h-5 w-5" />
            <span className="font-semibold text-sm">Upload Reel</span>
          </Button>
        </div>

        <ReelFilters
          category={categoryFilter}
          status={statusFilter}
          onCategoryChange={setCategoryFilter}
          onStatusChange={setStatusFilter}
          categories={allCategories}
        />

        <ReelTable
          reels={reels}
          onApprove={handleApprove}
          onDelete={handleDelete}
          onToggleComments={handleToggleComments}
        />
      </div>

      <ReelUploadModal
        isOpen={uploadOpen}
        onClose={() => setUploadOpen(false)}
        onUpload={handleUpload}
        categories={allCategories}
      />
    </DashboardLayout>
  );
}
