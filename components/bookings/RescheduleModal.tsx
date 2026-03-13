"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import type { Booking } from "@/types";

interface RescheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: Booking | null;
  onConfirm: (bookingId: number, date: string, time: string) => void;
}

export default function RescheduleModal({ isOpen, onClose, booking, onConfirm }: RescheduleModalProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (booking) {
      onConfirm(booking.id, date, time);
      onClose();
      setDate("");
      setTime("");
    }
  };

  if (!booking) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Reschedule Booking">
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-gray-600">
          {booking.user.name} with {booking.professional.name} — {booking.date} {booking.time}
        </p>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]"
            required
          />
        </div>
        <div className="flex gap-3 justify-end pt-4">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Reschedule
          </Button>
        </div>
      </form>
    </Modal>
  );
}
