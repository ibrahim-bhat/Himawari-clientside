"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import {
  getUserPayments,
  getListenerEarnings,
  getCounselorEarnings,
  getPsychiatristEarnings,
  getPaymentCommissionSettings,
  getRefunds,
} from "@/lib/services/paymentService";

type TabId = "user" | "listener" | "counselor" | "psychiatrist" | "commission" | "refunds";

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("user");

  const userPayments = getUserPayments();
  const listenerEarnings = getListenerEarnings();
  const counselorEarnings = getCounselorEarnings();
  const psychiatristEarnings = getPsychiatristEarnings();
  const commission = getPaymentCommissionSettings();
  const refunds = getRefunds();

  const tabs: { id: TabId; label: string }[] = [
    { id: "user", label: "User payments" },
    { id: "listener", label: "Listener earnings" },
    { id: "counselor", label: "Counselor earnings" },
    { id: "psychiatrist", label: "Psychiatrist earnings" },
    { id: "commission", label: "Commission settings" },
    { id: "refunds", label: "Refunds" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Payment & Revenue</h1>
          <p className="mt-1 text-sm sm:text-base text-[#6b7280]">User payments, professional earnings, commission, and refunds.</p>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-sm font-semibold ${activeTab === tab.id ? "bg-[#259A9E] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Card className="overflow-hidden p-6">
          {activeTab === "user" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Transaction ID</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Date</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Amount</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Method</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {userPayments.map((p) => (
                    <tr key={p.id}><td className="px-6 py-4 text-sm font-medium">{p.transactionId}</td><td className="px-6 py-4 text-sm">{p.date}</td><td className="px-6 py-4 text-sm font-semibold">{p.amount}</td><td className="px-6 py-4 text-sm">{p.method}</td><td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${p.status === "Paid" ? "bg-[#C6F6D5] text-[#2F855A]" : "bg-[#FEEBC8] text-[#744210]"}`}>{p.status}</span></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "listener" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]"><tr><th className="px-6 py-4 text-sm font-bold uppercase">Professional</th><th className="px-6 py-4 text-sm font-bold uppercase">Period</th><th className="px-6 py-4 text-sm font-bold uppercase">Sessions</th><th className="px-6 py-4 text-sm font-bold uppercase">Amount</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {listenerEarnings.map((e) => (<tr key={e.id}><td className="px-6 py-4 text-sm font-medium">{e.professionalName}</td><td className="px-6 py-4 text-sm">{e.period}</td><td className="px-6 py-4 text-sm">{e.sessions}</td><td className="px-6 py-4 text-sm font-semibold">{e.amount}</td></tr>))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "counselor" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]"><tr><th className="px-6 py-4 text-sm font-bold uppercase">Professional</th><th className="px-6 py-4 text-sm font-bold uppercase">Period</th><th className="px-6 py-4 text-sm font-bold uppercase">Amount</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {counselorEarnings.map((e) => (<tr key={e.id}><td className="px-6 py-4 text-sm font-medium">{e.professionalName}</td><td className="px-6 py-4 text-sm">{e.period}</td><td className="px-6 py-4 text-sm font-semibold">{e.amount}</td></tr>))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "psychiatrist" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]"><tr><th className="px-6 py-4 text-sm font-bold uppercase">Professional</th><th className="px-6 py-4 text-sm font-bold uppercase">Period</th><th className="px-6 py-4 text-sm font-bold uppercase">Amount</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {psychiatristEarnings.map((e) => (<tr key={e.id}><td className="px-6 py-4 text-sm font-medium">{e.professionalName}</td><td className="px-6 py-4 text-sm">{e.period}</td><td className="px-6 py-4 text-sm font-semibold">{e.amount}</td></tr>))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "commission" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-[#F9FDFF] border border-[#259A9E]/20"><p className="text-sm text-gray-500">Listener</p><p className="text-2xl font-bold text-[#259A9E]">{commission.listenerPercent}%</p></div>
              <div className="p-4 rounded-xl bg-[#F9FDFF] border border-[#259A9E]/20"><p className="text-sm text-gray-500">Counselor</p><p className="text-2xl font-bold text-[#259A9E]">{commission.counselorPercent}%</p></div>
              <div className="p-4 rounded-xl bg-[#F9FDFF] border border-[#259A9E]/20"><p className="text-sm text-gray-500">Psychiatrist</p><p className="text-2xl font-bold text-[#259A9E]">{commission.psychiatristPercent}%</p></div>
            </div>
          )}
          {activeTab === "refunds" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]"><tr><th className="px-6 py-4 text-sm font-bold uppercase">Transaction ID</th><th className="px-6 py-4 text-sm font-bold uppercase">Amount</th><th className="px-6 py-4 text-sm font-bold uppercase">Reason</th><th className="px-6 py-4 text-sm font-bold uppercase">Status</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {refunds.map((r) => (<tr key={r.id}><td className="px-6 py-4 text-sm font-medium">{r.transactionId}</td><td className="px-6 py-4 text-sm font-semibold">{r.amount}</td><td className="px-6 py-4 text-sm">{r.reason}</td><td className="px-6 py-4"><span className="rounded-full px-3 py-1 text-xs font-bold bg-[#C6F6D5] text-[#2F855A]">{r.status}</span></td></tr>))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
}
