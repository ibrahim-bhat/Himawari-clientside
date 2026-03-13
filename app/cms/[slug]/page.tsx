"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getCMSPageBySlug, updateCMSPage } from "@/lib/services/cmsService";
import type { CMSPageSlug } from "@/types";

const slugs: CMSPageSlug[] = ["privacy-policy", "terms-conditions", "onboarding", "faq", "about-us"];

export default function CMSEditPage() {
  const params = useParams();
  const router = useRouter();
  const slug = slugs.includes(params.slug as CMSPageSlug) ? (params.slug as CMSPageSlug) : "privacy-policy";
  const page = useMemo(() => getCMSPageBySlug(slug), [slug]);
  const [content, setContent] = useState(page?.content ?? "");
  const [title, setTitle] = useState(page?.title ?? "");

  if (!page) return null;

  const handleSave = () => {
    updateCMSPage(slug, content, title);
    router.push("/cms");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-[#111827]">Edit: {page.title}</h1>
          <Button className="bg-[#259A9E] hover:bg-[#1d7a7d] text-white min-h-[44px]" onClick={handleSave}>
            Save
          </Button>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={12} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
