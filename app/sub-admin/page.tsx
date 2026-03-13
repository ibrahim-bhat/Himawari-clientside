"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@/components/ui/Icons";
import { getSubAdmins, getRolePermissions, getActivityLogs } from "@/lib/services/subAdminService";

export default function SubAdminPage() {
  const [activeSection, setActiveSection] = useState<"admins" | "permissions" | "logs">("admins");
  const admins = getSubAdmins();
  const permissions = getRolePermissions();
  const activityLogs = getActivityLogs(50);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Sub-admin Roles</h1>
            <p className="mt-1 text-sm sm:text-base text-[#6b7280]">Create admin, role permissions, activity logs.</p>
          </div>
          <Button className="bg-[#259A9E] hover:bg-[#1d7a7d] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 min-h-[44px]" onClick={() => alert("Create admin modal.")}>
            <PlusIcon className="h-5 w-5" />
            <span className="font-semibold text-sm">Create Admin</span>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
          {(["admins", "permissions", "logs"] as const).map((s) => (
            <button key={s} onClick={() => setActiveSection(s)} className={"min-h-[44px] px-4 py-2 rounded-lg text-sm font-semibold " + (activeSection === s ? "bg-[#259A9E] text-white" : "bg-gray-100 text-gray-600")}>
              {s === "admins" ? "Admins" : s === "permissions" ? "Role permissions" : "Activity logs"}
            </button>
          ))}
        </div>

        <Card className="overflow-hidden p-6">
          {activeSection === "admins" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Name</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Email</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Role</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Created</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {admins.map((a) => (
                    <tr key={a.id}>
                      <td className="px-6 py-4 text-sm font-medium">{a.name}</td>
                      <td className="px-6 py-4 text-sm">{a.email}</td>
                      <td className="px-6 py-4 text-sm">{a.role}</td>
                      <td className="px-6 py-4 text-sm">{a.createdAt}</td>
                      <td className="px-6 py-4"><span className={"rounded-full px-3 py-1 text-xs font-bold " + (a.isActive ? "bg-[#C6F6D5] text-[#2F855A]" : "bg-gray-200 text-gray-600")}>{a.isActive ? "Active" : "Inactive"}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeSection === "permissions" && (
            <div className="space-y-2">
              <p className="text-sm text-gray-500 mb-4">Permission matrix (checkboxes per feature).</p>
              {permissions.map((p) => (
                <label key={p.key} className="flex items-center gap-3 min-h-[44px] hover:bg-gray-50 p-2 rounded-lg">
                  <input type="checkbox" checked={p.enabled} readOnly className="rounded border-gray-300" />
                  <span className="text-sm font-medium">{p.label}</span>
                </label>
              ))}
            </div>
          )}

          {activeSection === "logs" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left">
                <thead className="bg-[#D1EDEE] text-[#259A9E]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Admin</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Action</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Resource</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {activityLogs.map((log) => (
                    <tr key={log.id}>
                      <td className="px-6 py-4 text-sm font-medium">{log.adminName}</td>
                      <td className="px-6 py-4 text-sm">{log.action}</td>
                      <td className="px-6 py-4 text-sm">{log.resource}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{log.timestamp}</td>
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
