"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { getCMSPages } from "@/lib/services/cmsService";

export default function CMSPagesPage() {
  const pages = getCMSPages();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">CMS Pages</h1>
          <p className="mt-1 text-sm sm:text-base text-[#6b7280]">Privacy policy, Terms, Onboarding, FAQ, About us.</p>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left">
              <thead className="bg-[#D1EDEE] text-[#259A9E]">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold uppercase">Page</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase">Last updated</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pages.map((p) => (
                  <tr key={p.slug} className="hover:bg-[#F9FDFF]">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{p.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{p.updatedAt}</td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/cms/${p.slug}`} className="text-[#259A9E] font-semibold hover:underline min-h-[44px] inline-flex items-center">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
