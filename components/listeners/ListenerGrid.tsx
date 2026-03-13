"use client";

import { useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import Dropdown from "@/components/ui/Dropdown";
import ListenerCard from "./ListenerCard";

interface Listener {
  id: number;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  image: string;
  isActive: boolean;
  lastSeen?: string;
  specialty: string;
}

const initialListeners: Listener[] = [
  {
    id: 1,
    name: "Dr. Adeel Rashid",
    role: "Psychiatrist",
    specialty: "Psychiatrist",
    rating: 4.5,
    reviews: 52,
    image: "/pic.png",
    isActive: true,
  },
  {
    id: 2,
    name: "Dr. Sana Mir",
    role: "Psychiatrist",
    specialty: "Psychiatrist",
    rating: 4.3,
    reviews: 47,
    image: "/pic.png",
    isActive: false,
    lastSeen: "2 hrs ago",
  },
  {
    id: 3,
    name: "Dr. Farhana Malik",
    role: "Counselor",
    specialty: "Counselor",
    rating: 4.6,
    reviews: 85,
    image: "/pic.png",
    isActive: true,
  },
  {
    id: 4,
    name: "Dr. Hina Shah",
    role: "Counselor",
    specialty: "Counselor",
    rating: 5.0,
    reviews: 92,
    image: "/pic.png",
    isActive: true,
  },
  {
    id: 5,
    name: "Dr. Ali Raza",
    role: "Listener",
    specialty: "Listener",
    rating: 4.5,
    reviews: 184,
    image: "/pic.png",
    isActive: true,
  },
  {
    id: 6,
    name: "Dr. Zoya Ahmad",
    role: "Listener",
    specialty: "Listener",
    rating: 4.8,
    reviews: 98,
    image: "/pic.png",
    isActive: true,
  },
  {
    id: 7,
    name: "Dr. Numan Khalid",
    role: "Psychiatrist",
    specialty: "Psychiatrist",
    rating: 4.5,
    reviews: 52,
    image: "/pic.png",
    isActive: false,
    lastSeen: "30 min ago",
  },
  {
    id: 8,
    name: "Dr. Kafeel Shah",
    role: "Counselor",
    specialty: "Counselor",
    rating: 5.0,
    reviews: 68,
    image: "/pic.png",
    isActive: false,
    lastSeen: "17 min ago",
  },
  {
    id: 9,
    name: "Dr. Shaista Khan",
    role: "Psychiatrist",
    specialty: "Psychiatrist",
    rating: 4.6,
    reviews: 99,
    image: "/pic.png",
    isActive: true,
  },
];

export default function ListenerGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("Specialties");
  const [statusFilter, setStatusFilter] = useState("Status");

  const filteredListeners = initialListeners.filter((l) => {
    const matchesSearch = l.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = specialtyFilter === "Specialties" || l.specialty === specialtyFilter;
    const matchesStatus = statusFilter === "Status" ||
      (statusFilter === "Active" && l.isActive) ||
      (statusFilter === "Inactive" && !l.isActive);
    return matchesSearch && matchesSpecialty && matchesStatus;
  });

  return (
    <div className="space-y-8">

      {/* Search and Filters Bar */}
      <div className="bg-[#F9FAFB] p-4 sm:p-6 rounded-[20px] flex flex-col lg:flex-row items-center gap-4 border border-[#259A9E]">

        {/* Search Bar */}
        <div className="flex items-center w-full bg-[#F3F4F6] border border-[#259A9E] rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#259A9E]/20">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search user by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-3 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="flex w-full lg:w-auto gap-4">
          {/* Specialties Dropdown */}
          <Dropdown
            label="Specialties"
            options={["Specialties", "Psychiatrist", "Counselor", "Listener"]}
            value={specialtyFilter}
            onChange={setSpecialtyFilter}
            className="flex-1 lg:min-w-[160px]"
          />

          {/* Status Dropdown */}
          <Dropdown
            label="Status"
            options={["Status", "Active", "Inactive"]}
            value={statusFilter}
            onChange={setStatusFilter}
            className="flex-1 lg:min-w-[140px]"
          />
        </div>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListeners.map((listener) => (
          <ListenerCard key={listener.id} {...listener} />
        ))}
      </div>

    </div>
  );
}