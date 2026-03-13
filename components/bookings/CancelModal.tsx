"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import type { Booking } from "@/types";

interface CancelModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: Booking | null;
  onConfirm: (bookingId: number) => void;
}

export default function CancelModal({ isOpen, onClose, booking, onConfirm }: CancelModalProps) {
  if (!booking) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cancel Booking">
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Cancel booking for <strong>{booking.user.name}</strong> with <strong>{booking.professional.name}</strong> on {booking.date}?
        </p>
        <div className="flex gap-3 justify-end pt-4">
          <Button variant="ghost" onClick={onClose}>
            Keep
          </Button>
          <Button
            variant="dangerSolid"
            onClick={() => {
              onConfirm(booking.id);
              onClose();
            }}
          >
            Cancel Booking
          </Button>
        </div>
      </div>
    </Modal>
  );
}
