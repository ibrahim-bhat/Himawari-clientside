"use client";

import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { VideoIcon, FileTextIcon } from "@/components/ui/Icons";

export default function ContentPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Content Management</h1>
          <p className="mt-1 text-sm sm:text-base text-[#6b7280]">Manage reels, stories, and blog.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/reels" className="block">
            <Card className="!p-8 min-h-[180px] flex flex-col justify-center border border-[#259A9E] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F6F7] text-[#259A9E]">
                  <VideoIcon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#111827]">Reels (Myth busting videos)</h2>
                  <p className="text-sm text-[#6b7280] mt-1">Upload, approve, and manage myth busting reels.</p>
                </div>
              </div>
            </Card>
          </Link>
          <Link href="/content/stories" className="block">
            <Card className="!p-8 min-h-[180px] flex flex-col justify-center border border-[#259A9E] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F6F7] text-[#259A9E]">
                  <FileTextIcon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#111827]">Stories (Kashmir stories)</h2>
                  <p className="text-sm text-[#6b7280] mt-1">Manage Kashmir stories content.</p>
                </div>
              </div>
            </Card>
          </Link>
          <Link href="/content/blog" className="block">
            <Card className="!p-8 min-h-[180px] flex flex-col justify-center border border-[#259A9E] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5F6F7] text-[#259A9E]">
                  <FileTextIcon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#111827]">Blog</h2>
                  <p className="text-sm text-[#6b7280] mt-1">Create and manage blog posts. Sync with Google Blogger.</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
