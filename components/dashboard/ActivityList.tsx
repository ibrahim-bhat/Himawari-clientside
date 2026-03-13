"use client";

import Card from "../ui/Card";
import { FileTextIcon } from "../ui/Icons";
import { getRecentActivities } from "@/lib/services/dashboardService";

export default function ActivityList() {
  const activities = getRecentActivities();
  return (
    <Card className="relative h-full min-h-[380px] flex flex-col min-w-0">
      <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg bg-[#259A9E] text-xs font-bold text-white">
        9
      </div>
      <div className="flex items-center gap-3 border-b border-[#259A9E] px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E5F6F7] text-[#259A9E]">
          <FileTextIcon className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-bold text-[#111827]">Recent Activities</h2>
      </div>
      <div className="flex-1 overflow-auto px-6 py-6">
        <ul className="space-y-6">
          {activities.map((activity, index) => (
            <li key={index} className="flex gap-3">
              <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#111827]" />
              <div className="flex-1 space-y-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-[#111827]">{activity.title}</p>
                  <span className="text-xs text-[#6b7280] shrink-0">{activity.time}</span>
                </div>
                <p className="text-sm text-[#6b7280]">
                  {activity.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-[#259A9E] px-6 py-4 text-right">
        <button type="button" className="text-sm font-semibold text-[#259A9E] hover:underline">
          View All
        </button>
      </div>
    </Card>
  );
}