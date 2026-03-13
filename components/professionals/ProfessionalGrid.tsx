"use client";

import { useState, useMemo } from "react";
import SearchBar from "@/components/ui/SearchBar";
import Dropdown from "@/components/ui/Dropdown";
import ProfessionalCard from "./ProfessionalCard";
import { getProfessionals } from "@/lib/services/professionalService";
import type { ProfessionalRole } from "@/types";

const roleLabels: Record<ProfessionalRole, string> = {
  listener: "Listener",
  counselor: "Counselor",
  psychiatrist: "Psychiatrist",
};

interface ProfessionalGridProps {
  role: ProfessionalRole;
}

export default function ProfessionalGrid({ role }: ProfessionalGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("Specialties");
  const [statusFilter, setStatusFilter] = useState("Status");

  const all = useMemo(() => getProfessionals(role), [role]);
  const filtered = useMemo(() => {
    return all.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSpecialty = specialtyFilter === "Specialties" || (p.specialty && p.specialty === roleLabels[role]) || p.specialties?.includes(specialtyFilter);
      const matchesStatus = statusFilter === "Status" || (statusFilter === "Active" && p.isActive) || (statusFilter === "Inactive" && !p.isActive);
      return matchesSearch && matchesSpecialty && matchesStatus;
    });
  }, [all, searchQuery, specialtyFilter, statusFilter, role]);

  const specialtyOptions = ["Specialties", ...Object.values(roleLabels), ...Array.from(new Set(all.flatMap((p) => p.specialties || [])))];

  return (
    <div className="space-y-8">
      <div className="bg-[#F9FAFB] p-4 sm:p-6 rounded-[20px] flex flex-col lg:flex-row items-center gap-4 border border-[#259A9E]">
        <div className="flex items-center w-full bg-[#F3F4F6] border border-[#259A9E] rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#259A9E]/20">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-3 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 min-h-[44px]"
          />
        </div>
        <div className="flex w-full lg:w-auto gap-4">
          <Dropdown
            label="Specialties"
            options={specialtyOptions}
            value={specialtyFilter}
            onChange={setSpecialtyFilter}
            className="flex-1 lg:min-w-[160px]"
          />
          <Dropdown
            label="Status"
            options={["Status", "Active", "Inactive"]}
            value={statusFilter}
            onChange={setStatusFilter}
            className="flex-1 lg:min-w-[140px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((professional) => (
          <ProfessionalCard key={professional.id} professional={professional} roleLabel={roleLabels[professional.role]} basePath={role === "psychiatrist" ? "psychiatrists" : role + "s"} />
        ))}
      </div>
    </div>
  );
}
