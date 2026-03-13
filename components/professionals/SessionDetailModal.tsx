"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { VideoIcon, MicIcon, FileTextIcon } from "@/components/ui/Icons";

export type SessionRow = {
  id: number;
  patient: string;
  date: string;
  time: string;
  type: string;
  status: string;
  action: string;
};

interface SessionDetailModalProps {
  session: SessionRow | null;
  onClose: () => void;
}

export default function SessionDetailModal({ session, onClose }: SessionDetailModalProps) {
  if (!session) return null;

  const Icon = session.type === "Video Call" ? VideoIcon : session.type === "Audio Call" ? MicIcon : FileTextIcon;
  const reason = session.status === "Cancelled" ? "Patient requested cancellation." : null;

  return (
    <Modal isOpen={!!session} onClose={onClose} title={session.action}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <span className="text-gray-500 font-medium">Patient</span>
          <span className="font-semibold text-gray-900">{session.patient}</span>
          <span className="text-gray-500 font-medium">Date & Time</span>
          <span className="font-semibold text-gray-900">{session.date}, {session.time}</span>
          <span className="text-gray-500 font-medium">Type</span>
          <span className="flex items-center gap-2 font-semibold text-gray-900">
            <Icon className="h-4 w-4 text-[#259A9E]" />
            {session.type}
          </span>
          <span className="text-gray-500 font-medium">Status</span>
          <span
            className={`inline-flex w-fit px-3 py-1 rounded-lg text-xs font-bold ${
              session.status === "Upcoming"
                ? "bg-[#BFDBFE] text-[#1E40AF]"
                : session.status === "Completed"
                  ? "bg-[#BBF7D0] text-[#166534]"
                  : "bg-[#FECACA] text-[#991B1B]"
            }`}
          >
            {session.status}
          </span>
        </div>
        {reason && (
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Cancellation reason</p>
            <p className="text-sm text-gray-700">{reason}</p>
          </div>
        )}
        <div className="flex justify-end pt-2">
          <Button variant="primary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}
