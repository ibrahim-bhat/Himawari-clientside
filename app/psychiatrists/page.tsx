"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ProfessionalListPage from "@/components/professionals/ProfessionalListPage";

export default function PsychiatristsPage() {
  return (
    <DashboardLayout>
      <ProfessionalListPage role="psychiatrist" />
    </DashboardLayout>
  );
}
