"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";

export default function StoriesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Stories (Kashmir stories)</h1>
          <p className="mt-1 text-sm sm:text-base text-[#6b7280]">Manage Kashmir stories content.</p>
        </div>
        <Card className="p-8 text-center text-[#6b7280]">Stories management coming soon.</Card>
      </div>
    </DashboardLayout>
  );
}
