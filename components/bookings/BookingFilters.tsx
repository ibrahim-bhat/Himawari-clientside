"use client";

import type { BookingType, BookingStatus } from "@/types";

interface BookingFiltersProps {
  type: BookingType | "all";
  status: BookingStatus | "all";
  onTypeChange: (v: BookingType | "all") => void;
  onStatusChange: (v: BookingStatus | "all") => void;
}

export default function BookingFilters({ type, status, onTypeChange, onStatusChange }: BookingFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
      <div className="relative w-full sm:w-auto min-w-[140px]">
        <label className="sr-only">Type</label>
        <select
          value={type}
          onChange={(e) => onTypeChange(e.target.value as BookingType | "all")}
          className="w-full rounded-lg border border-[#259A9E]/30 bg-white py-2.5 pl-3 pr-8 text-sm outline-none focus:border-[#259A9E] min-h-[44px]"
        >
          <option value="all">All types</option>
          <option value="chat">Chat</option>
          <option value="voice">Voice</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div className="relative w-full sm:w-auto min-w-[140px]">
        <label className="sr-only">Status</label>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value as BookingStatus | "all")}
          className="w-full rounded-lg border border-[#259A9E]/30 bg-white py-2.5 pl-3 pr-8 text-sm outline-none focus:border-[#259A9E] min-h-[44px]"
        >
          <option value="all">All statuses</option>
          <option value="Completed">Completed</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
    </div>
  );
}
