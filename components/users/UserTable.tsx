"use client";

import { useState, useMemo } from "react";
import {
    SearchIcon,
    ChevronDownIcon,
    MoreVerticalIcon,
    EditIcon,
    EyeIcon
} from "@/components/ui/Icons";
import Avatar from "@/components/ui/Avatar";
import { useRouter } from "next/navigation";
import { getUsers, updateUserStatus } from "@/lib/services/userService";
import type { User } from "@/types";

import UserModal from "./UserModal";

export default function UserTable() {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [refreshKey, setRefreshKey] = useState(0);
    const users = useMemo(
        () => getUsers(searchQuery || undefined, statusFilter === "All Status" ? undefined : (statusFilter as "Active" | "Blocked")),
        [searchQuery, statusFilter, refreshKey]
    );
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const router = useRouter();
    const filteredUsers = users;

    const handleEditClick = (user: User) => {
        setEditingUser(user);
        setIsEditModalOpen(true);
        setOpenMenuId(null);
    };

    const handleSaveUser = (_data: Partial<User>) => {
        if (editingUser) setRefreshKey((k) => k + 1);
    };

    const handleBlockUnblock = (user: User, e: React.MouseEvent) => {
        e.stopPropagation();
        const newStatus = user.status === "Active" ? "Blocked" : "Active";
        updateUserStatus(user.id, newStatus);
        setRefreshKey((k) => k + 1);
        setOpenMenuId(null);
    };

    return (
        <div className="space-y-4">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:flex-1 max-w-2xl">
                    <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search user by name or email id"
                        className="w-full rounded-lg border border-[#259A9E]/30 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-[#259A9E] focus:ring-1 focus:ring-[#259A9E] transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="relative w-full sm:w-auto">
                    <button
                        onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                        className="flex w-full items-center justify-between sm:justify-start gap-2 rounded-lg border border-[#259A9E]/30 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        <span>{statusFilter}</span>
                        <ChevronDownIcon className={`h-4 w-4 transition-transform ${isStatusDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isStatusDropdownOpen && (
                        <div className="absolute right-0 z-20 mt-2 w-full sm:w-40 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {["All Status", "Active", "Blocked"].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => {
                                            setStatusFilter(status);
                                            setIsStatusDropdownOpen(false);
                                        }}
                                        className={`flex w-full items-center px-4 py-2 text-sm ${statusFilter === status ? 'bg-[#EAF6F7] text-[#259A9E] font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto rounded-2xl border border-[#259A9E] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                <table className="w-full border-collapse text-left min-w-[600px]">
                    <thead>
                        <tr className="bg-[#D1EDEE] text-[#259A9E]">
                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">User</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">Joining Date</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5F6F7]">
                        {filteredUsers.map((user, index) => (
                            <tr
                                key={user.id}
                                onClick={() => router.push(`/users/${user.id}`)}
                                className={`
                                    cursor-pointer
                                    ${index % 2 === 0 ? "bg-white" : "bg-[#effbfc]"}
                                    hover:bg-[#EAF6F7]
                                    transition-colors
                                `}
                            >

                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <Avatar src={user.image} name={user.name} />
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">{user.name}</div>
                                            <div className="text-xs text-gray-500">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`h-2 w-2 rounded-full ${user.status === 'Active' ? 'bg-[#22C55E]' : 'bg-[#EF4444]'}`} />
                                        <span className={`text-sm font-semibold ${user.status === 'Active' ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
                                            {user.status}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center text-sm text-gray-600">
                                    {user.joiningDate}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="relative inline-block text-left" onClick={(e) => e.stopPropagation()}>
                                        <button
                                            onClick={() => setOpenMenuId(openMenuId === user.id ? null : user.id)}
                                            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                                        >
                                            <MoreVerticalIcon className="h-5 w-5" />
                                        </button>

                                        {openMenuId === user.id && (
                                            <div className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                                                <div className="py-1" role="menu">
                                                    <button
                                                        onClick={() => handleEditClick(user)}
                                                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#EAF6F7] transition-colors"
                                                        role="menuitem"
                                                    >
                                                        <EditIcon className="h-4 w-4" />
                                                        <span>Edit Details</span>
                                                    </button>
                                                    <button
                                                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#EAF6F7] transition-colors"
                                                        onClick={() => router.push(`/users/${user.id}`)}
                                                        role="menuitem"
                                                    >
                                                        <EyeIcon className="h-4 w-4" />
                                                        <span>View Profile</span>
                                                    </button>
                                                    <button
                                                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#EAF6F7] transition-colors min-h-[44px]"
                                                        onClick={(e) => handleBlockUnblock(user, e)}
                                                        role="menuitem"
                                                    >
                                                        <span>{user.status === "Active" ? "Block" : "Unblock"}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredUsers.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                    <p className="text-lg font-medium">No users found matching your criteria</p>
                    <button
                        onClick={() => { setStatusFilter("All Status"); setSearchQuery(""); }}
                        className="mt-2 text-[#259A9E] hover:underline"
                    >
                        Clear filters
                    </button>
                </div>
            )}

            <UserModal
                isOpen={isEditModalOpen}
                onClose={() => { setIsEditModalOpen(false); setEditingUser(null); }}
                onSave={handleSaveUser}
                initialData={editingUser ? {
                    name: editingUser.name,
                    email: editingUser.email,
                    phone: editingUser.phone || "",
                    image: editingUser.image
                } : undefined}
                title="Edit User Details"
            />
        </div>
    );
}

