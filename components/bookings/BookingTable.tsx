"use client";

import Avatar from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import type { Booking } from "@/types";
import { VideoIcon, MicIcon, FileTextIcon } from "@/components/ui/Icons";

function typeLabel(type: string) {
  if (type === "video") return "Video Call";
  if (type === "voice") return "Audio Call";
  return "Chat";
}

interface BookingTableProps {
  bookings: Booking[];
  onReschedule: (b: Booking) => void;
  onCancel: (b: Booking) => void;
}

export default function BookingTable({ bookings, onReschedule, onCancel }: BookingTableProps) {
  if (bookings.length === 0) {
    return (
      <div className="rounded-2xl border border-[#259A9E] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-8 text-center text-[#6b7280]">
        No bookings match your filters.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-[#259A9E] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
      <table className="w-full border-collapse text-left min-w-[600px]">
        <thead>
          <tr className="bg-[#D1EDEE] text-[#259A9E]">
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider">User / Professional</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider">Type</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider">Date & Time</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider">Status</th>
            <th className="px-4 sm:px-6 py-4 text-sm font-bold uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E5F6F7]">
          {bookings.map((booking, index) => (
            <tr
              key={booking.id}
              className={`${index % 2 === 0 ? "bg-white" : "bg-[#effbfc]"} hover:bg-[#EAF6F7] transition-colors`}
            >
              <td className="px-4 sm:px-6 py-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Avatar src={booking.user.image} name={booking.user.name} size="sm" />
                    <span className="text-sm font-medium text-gray-900">{booking.user.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>with</span>
                    <Avatar src={booking.professional.image} name={booking.professional.name} size="sm" />
                    <span>{booking.professional.name}</span>
                  </div>
                </div>
              </td>
              <td className="px-4 sm:px-6 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  {booking.type === "video" && <VideoIcon className="h-4 w-4" />}
                  {booking.type === "voice" && <MicIcon className="h-4 w-4" />}
                  {booking.type === "chat" && <FileTextIcon className="h-4 w-4" />}
                  <span>{typeLabel(booking.type)}</span>
                </div>
              </td>
              <td className="px-4 sm:px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{booking.date}</div>
                <div className="text-xs text-gray-500">{booking.time}</div>
              </td>
              <td className="px-4 sm:px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                    booking.status === "Completed" ? "bg-[#C6F6D5] text-[#2F855A]" : booking.status === "Upcoming" || booking.status === "Pending" ? "bg-[#BEE3F8] text-[#2B6CB0]" : "bg-[#FED7D7] text-[#C53030]"
                  }`}
                >
                  {booking.status}
                </span>
              </td>
              <td className="px-4 sm:px-6 py-4 text-right">
                <div className="flex flex-wrap justify-end gap-2">
                  {(booking.status === "Upcoming" || booking.status === "Pending") && (
                    <>
                      <Button variant="secondary" onClick={() => onReschedule(booking)}>
                        Reschedule
                      </Button>
                      <Button variant="danger" onClick={() => onCancel(booking)}>
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
