"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export type EditProfessionalForm = {
  name: string;
  email: string;
  phone: string;
  location: string;
};

interface EditProfessionalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initial: EditProfessionalForm;
  onSave: (data: EditProfessionalForm) => void;
}

export default function EditProfessionalModal({ isOpen, onClose, initial, onSave }: EditProfessionalModalProps) {
  const [form, setForm] = useState<EditProfessionalForm>(initial);

  useEffect(() => {
    if (isOpen) setForm(initial);
  }, [isOpen, initial]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Profile">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-lg border border-[#259A9E]/30 px-3 py-2 text-sm min-h-[44px] focus:ring-2 focus:ring-[#259A9E]/20 focus:border-[#259A9E]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full rounded-lg border border-[#259A9E]/30 px-3 py-2 text-sm min-h-[44px] focus:ring-2 focus:ring-[#259A9E]/20 focus:border-[#259A9E]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full rounded-lg border border-[#259A9E]/30 px-3 py-2 text-sm min-h-[44px] focus:ring-2 focus:ring-[#259A9E]/20 focus:border-[#259A9E]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            value={form.location}
            onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
            className="w-full rounded-lg border border-[#259A9E]/30 px-3 py-2 text-sm min-h-[44px] focus:ring-2 focus:ring-[#259A9E]/20 focus:border-[#259A9E]"
          />
        </div>
        <div className="flex gap-3 justify-end pt-4">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save changes
          </Button>
        </div>
      </form>
    </Modal>
  );
}
