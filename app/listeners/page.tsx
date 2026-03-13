"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ProfessionalListPage from "@/components/professionals/ProfessionalListPage";

export default function ListenersPage() {
  return (
    <DashboardLayout>
      <ProfessionalListPage role="listener" />
    </DashboardLayout>
  );
}
