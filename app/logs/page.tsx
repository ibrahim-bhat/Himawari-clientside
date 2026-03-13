"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { getCallLogs, getChatLogs, getVCNotes, getReferLogs } from "@/lib/services/logsService";

export default function LogsPage() {
  const [activeTab, setActiveTab] = useState("calls");
  const callLogs = getCallLogs();
  const chatLogs = getChatLogs();
  const vcNotes = getVCNotes();
  const referLogs = getReferLogs();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Call and Chat Logs</h1>
          <p className="mt-1 text-sm sm:text-base text-[#6b7280]">App call logs masked, chat history, VC notes, refer logs.</p>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
          {["calls", "chat", "vc", "refer"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={"min-h-[44px] px-4 py-2 rounded-lg text-sm font-semibold " + (activeTab === tab ? "bg-[#259A9E] text-white" : "bg-gray-100 text-gray-600")}
            >
              {tab === "calls" ? "App call logs" : tab === "chat" ? "Chat history" : tab === "vc" ? "VC notes" : "Refer logs"}
            </button>
          ))}
        </div>

        <Card className="overflow-hidden p-6">
          {activeTab === "calls" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Masked number</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Type</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Duration</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {callLogs.map((log) => (
                    <tr key={log.id}>
                      <td className="px-6 py-4 text-sm font-mono">{log.maskedNumber}</td>
                      <td className="px-6 py-4 text-sm">{log.type}</td>
                      <td className="px-6 py-4 text-sm">{log.duration}</td>
                      <td className="px-6 py-4 text-sm">{log.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "chat" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold uppercase">User ID</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Professional ID</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Date</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Messages</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {chatLogs.map((log) => (
                    <tr key={log.id}>
                      <td className="px-6 py-4 text-sm">{log.userId}</td>
                      <td className="px-6 py-4 text-sm">{log.professionalId}</td>
                      <td className="px-6 py-4 text-sm">{log.date}</td>
                      <td className="px-6 py-4 text-sm font-medium">{log.messageCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "vc" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Session ID</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Listener ID</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Date</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {vcNotes.map((n) => (
                    <tr key={n.id}>
                      <td className="px-6 py-4 text-sm">{n.sessionId}</td>
                      <td className="px-6 py-4 text-sm">{n.listenerId}</td>
                      <td className="px-6 py-4 text-sm">{n.date}</td>
                      <td className="px-6 py-4 text-sm max-w-xs truncate">{n.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "refer" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Referral ID</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Action</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {referLogs.map((log) => (
                    <tr key={log.id}>
                      <td className="px-6 py-4 text-sm">{log.referralId}</td>
                      <td className="px-6 py-4 text-sm">{log.action}</td>
                      <td className="px-6 py-4 text-sm">{log.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
}
