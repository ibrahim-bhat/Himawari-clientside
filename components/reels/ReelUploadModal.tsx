"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";

interface ReelUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (title: string, category: string) => void;
  categories: string[];
}

export default function ReelUploadModal({ isOpen, onClose, onUpload, categories }: ReelUploadModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0] ?? "Myth Busting");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpload(title, category);
    setTitle("");
    setCategory(categories[0] ?? "Myth Busting");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Reel">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]"
            placeholder="Reel title"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <p className="text-xs text-gray-500">Video file upload can be wired to your storage later.</p>
        <div className="flex gap-3 justify-end pt-4">
          <button type="button" onClick={onClose} className="min-h-[44px] px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" className="min-h-[44px] px-4 py-2 rounded-lg bg-[#259A9E] text-white hover:bg-[#1d7a7d]">
            Upload
          </button>
        </div>
      </form>
    </Modal>
  );
}
