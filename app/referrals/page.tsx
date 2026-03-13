"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@/components/ui/Icons";
import { getReferrals } from "@/lib/services/referService";
import type { ReferralType, ReferralStatus } from "@/types";

export default function ReferralsPage() {
  const [typeFilter, setTypeFilter] = useState<ReferralType | "all">("all");
  const [statusFilter, setStatusFilter] = useState<ReferralStatus | "all">("all");
  const referrals = getReferrals(typeFilter === "all" ? undefined : typeFilter, statusFilter === "all" ? undefined : statusFilter);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Refer System</h1>
            <p className="mt-1 text-sm sm:text-base text-[#6b7280]">Refer to counselor or psychiatrist. Track status and follow-up notes.</p>
          </div>
          <Button className="bg-[#259A9E] hover:bg-[#1d7a7d] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 min-h-[44px]" onClick={() => alert("Create referral modal.")}>
            <PlusIcon className="h-5 w-5" />
            <span className="font-semibold text-sm">New Referral</span>
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as ReferralType | "all")} className="rounded-lg border border-[#259A9E]/30 bg-white py-2.5 px-3 text-sm min-h-[44px]">
            <option value="all">All types</option>
            <option value="counselor">Counselor</option>
            <option value="psychiatrist">Psychiatrist</option>
          </select>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as ReferralStatus | "all")} className="rounded-lg border border-[#259A9E]/30 bg-white py-2.5 px-3 text-sm min-h-[44px]">
            <option value="all">All statuses</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <Card className="overflow-hidden p-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead className="bg-[#D1EDEE] text-[#259A9E]">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold uppercase">From</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase">To (Professional)</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase">Type</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase">Status</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase">Follow-up notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {referrals.map((r) => (
                  <tr key={r.id}>
                    <td className="px-6 py-4 text-sm font-medium">{r.fromUserName}</td>
                    <td className="px-6 py-4 text-sm">{r.toProfessionalName}</td>
                    <td className="px-6 py-4 text-sm capitalize">{r.type}</td>
                    <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${r.status === "completed" ? "bg-[#C6F6D5]" : r.status === "in_progress" ? "bg-[#BEE3F8]" : "bg-[#FEEBC8]"}`}>{r.status}</span></td>
                    <td className="px-6 py-4 text-sm max-w-xs truncate">{r.followUpNotes ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {referrals.length === 0 && <div className="p-8 text-center text-gray-500">No referrals match your filters.</div>}
        </Card>
      </div>
    </DashboardLayout>
  );
}
