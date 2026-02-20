"use client";

import { useState } from "react";
import {
    SearchIcon,
    ChevronDownIcon,
    MoreVerticalIcon,
    EditIcon,
    EyeIcon
} from "@/components/ui/Icons";
import Avatar from "@/components/ui/Avatar";
import { useRouter } from "next/navigation";

interface User {
    id: number;
    name: string;
    email: string;
    status: string;
    joiningDate: string;
    image: string;
}

const users: User[] = [
    {
        id: 1,
        name: "Ayaan Khan",
        email: "ayaan.khan@maildemo.com",
        status: "Active",
        joiningDate: "12 Jan 2025",
        image: "/pic.png",
    },
    {
        id: 2,
        name: "Zara Ahmed",
        email: "zara.ahmed@maildemo.com",
        status: "Blocked",
        joiningDate: "25 Jan 2025",
        image: "/pic.png",

    },
    {
        id: 3,
        name: "Hamza Malik",
        email: "hamza.malik@maildemo.com",
        status: "Active",
        joiningDate: "3 Feb 2025",
        image: "/pic.png",
    },
    {
        id: 4,
        name: "Noor Fatima",
        email: "noor.fatima@maildemo.com",
        status: "Active",
        joiningDate: "18 Dec 2024",
        image: "/pic.png",
    },
    {
        id: 5,
        name: "Ali Raza",
        email: "ali.raza@maildemo.com",
        status: "Blocked",
        joiningDate: "6 Feb 2025",
        image: "/pic.png",
    },
    {
        id: 6,
        name: "Mustafa Sheikh",
        email: "mustafa@maildemo.com",
        status: "Blocked",
        joiningDate: "8 Feb 2025",
        image: "/pic.png",
    },
];

export default function UserTable() {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const router = useRouter();

    return (
        <div className="space-y-4">
            {/* Filters */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-2xl">
                    <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search user by name or email id"
                        className="w-full rounded-lg border border-[#259A9E]/30 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-[#259A9E] focus:ring-1 focus:ring-[#259A9E]"
                    />
                </div>
                <div className="relative">
                    <button className="flex items-center gap-2 rounded-lg border border-[#259A9E]/30 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <span>All Status</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Table Container */}
            <div className="overflow-hidden rounded-2xl border border-[#259A9E]/20 bg-white">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="bg-[#D1EDEE] text-[#259A9E]">
                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">User</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">Joining Date</th>
                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5F6F7]">
                        {users.map((user, index) => (
                            <tr
                                key={user.id}
                                onClick={() => router.push(`/users/${user.id}`)}
                                className={`
                                    cursor-pointer
                                    ${index % 2 === 0 ? "bg-white" : "bg-[#c6e6e8]"}
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
                                            className="rounded-full p-2 text-gray-400 hover:bg-100 hover:text-gray-600"
                                        >
                                            <MoreVerticalIcon className="h-5 w-5" />
                                        </button>

                                        {openMenuId === user.id && (
                                            <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1" role="menu">
                                                    <button
                                                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                        role="menuitem"
                                                    >
                                                        <EditIcon className="h-4 w-4" />
                                                        <span>Edit</span>
                                                    </button>
                                                    <button
                                                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                        onClick={() => router.push(`/users/${user.id}`)}
                                                        role="menuitem"
                                                    >
                                                        <EyeIcon className="h-4 w-4" />
                                                        <span>View Profile</span>
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
        </div>
    );
}
