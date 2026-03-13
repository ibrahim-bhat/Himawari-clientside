"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ProfessionalListPage from "@/components/professionals/ProfessionalListPage";

export default function CounselorsPage() {
  return (
    <DashboardLayout>
      <ProfessionalListPage role="counselor" />
    </DashboardLayout>
  );
}
