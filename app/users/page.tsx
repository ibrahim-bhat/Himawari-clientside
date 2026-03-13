

"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import UserProfileHeader from "@/components/users/UserProfileHeader";
import MetricCard from "@/components/ui/MetricCard";
import UserTable from "@/components/users/UserTable";
import { UsersIcon, PhoneIcon, ShieldAlertIcon } from "@/components/ui/Icons";
import UserModal from "@/components/users/UserModal";
import { getUsers } from "@/lib/services/userService";

export default function UsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add New User");

  const handleAddUserClick = (role: string) => {
    const titles: Record<string, string> = {
      user: "Add New User",
      counselor: "Add New Counselor",
      listener: "Add New Listener",
      psychiatrist: "Add New Psychiatrist",
    };
    setModalTitle(titles[role] || "Add New User");
    setIsModalOpen(true);
  };

  const handleSaveUser = (data: any) => {
    console.log("Saving user data:", data);
    // Logic to save data to backend would go here
  };

  return (
    <DashboardLayout>
      <UserProfileHeader onAddUserClick={handleAddUserClick} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          index={1}
          label="Total Users"
          value={String(getUsers().length)}
          badgeText="10%"
          icon={<UsersIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={2}
          label="Active Now"
          value={String(getUsers(undefined, "Active").length)}
          badgeText="15%"
          icon={<PhoneIcon className="h-5 w-5" />}
          alertDot
        />
        <MetricCard
          index={3}
          label="Blocked Accounts"
          value={String(getUsers(undefined, "Blocked").length)}
          badgeText="0%"
          icon={<ShieldAlertIcon className="h-5 w-5 text-red-500" />}
        />
      </div>

      <UserTable />

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveUser}
        title={modalTitle}
      />
    </DashboardLayout>
  );
}