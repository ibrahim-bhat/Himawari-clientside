"use client";

import { useState, useEffect } from "react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { CameraIcon } from "../ui/Icons";

interface UserData {
    name: string;
    email: string;
    phone: string;
    image: string;
}

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: UserData) => void;
    initialData?: UserData;
    title: string;
}

export default function UserModal({
    isOpen,
    onClose,
    onSave,
    initialData,
    title,
}: UserModalProps) {
    const [formData, setFormData] = useState<UserData>({
        name: "",
        email: "",
        phone: "",
        image: "/pic.png",
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({
                name: "",
                email: "",
                phone: "",
                image: "/pic.png",
            });
        }
    }, [initialData, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title}>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col items-center gap-4 mb-6">
                    <div className="relative group cursor-pointer">
                        <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-[#259A9E]/20">
                            <img
                                src={formData.image}
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                            <CameraIcon className="h-8 w-8 text-white" />
                        </div>
                    </div>
                    <p className="text-xs text-gray-500">Click to upload profile picture</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full rounded-lg border border-[#259A9E]/30 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#259A9E] focus:ring-1 focus:ring-[#259A9E] transition-all"
                            placeholder="e.g. Ayaan Khan"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full rounded-lg border border-[#259A9E]/30 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#259A9E] focus:ring-1 focus:ring-[#259A9E] transition-all"
                            placeholder="ayaan.khan@maildemo.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            required
                            className="w-full rounded-lg border border-[#259A9E]/30 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#259A9E] focus:ring-1 focus:ring-[#259A9E] transition-all"
                            placeholder="+92 300 1234567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex gap-3 pt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <div className="flex-1">
                        <Button type="submit" className="w-full justify-center py-2.5">
                            {initialData ? "Save Changes" : "Add User"}
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
}
