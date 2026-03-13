"use client";

import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@/components/ui/Icons";
import MetricCard from "@/components/ui/MetricCard";
import ProfessionalGrid from "./ProfessionalGrid";
import { getProfessionalCounts } from "@/lib/services/professionalService";
import type { ProfessionalRole } from "@/types";
import { HeadsetIcon, PhoneIcon, StarIcon } from "@/components/ui/Icons";

const roleConfig: Record<ProfessionalRole, { title: string; addLabel: string; totalLabel: string; icon: React.ReactNode }> = {
  listener: { title: "Listener Page", addLabel: "Add New Listener", totalLabel: "Total Listeners", icon: <HeadsetIcon className="h-5 w-5" /> },
  counselor: { title: "Counselor Page", addLabel: "Add New Counselor", totalLabel: "Total Counselors", icon: <HeadsetIcon className="h-5 w-5" /> },
  psychiatrist: { title: "Psychiatrist Page", addLabel: "Add New Psychiatrist", totalLabel: "Total Psychiatrists", icon: <HeadsetIcon className="h-5 w-5" /> },
};

interface ProfessionalListPageProps {
  role: ProfessionalRole;
}

export default function ProfessionalListPage({ role }: ProfessionalListPageProps) {
  const config = roleConfig[role];
  const counts = getProfessionalCounts();
  const totalKey = role === "listener" ? "listeners" : role === "counselor" ? "counselors" : "psychiatrists";
  const total = counts[totalKey];

  return (
    <div className="flex flex-col">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">{config.title}</h1>
          <p className="mt-1 text-sm sm:text-base text-[#6b7280]">Oversee and manage your platform&apos;s mental health professionals.</p>
        </div>
        <Button
          variant="primary"
          className="self-start sm:self-auto"
          onClick={() => alert(config.addLabel + " — form coming soon.")}
        >
          <PlusIcon className="h-5 w-5" />
          <span className="font-semibold text-sm">{config.addLabel}</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <MetricCard index={1} label={config.totalLabel} value={String(total)} badgeText="8%" icon={config.icon} />
        <MetricCard index={2} label="Available Now" value={String(counts.available)} badgeText="12%" icon={<PhoneIcon className="h-5 w-5" />} alertDot />
        <MetricCard index={3} label="Avg. Rating" value={counts.avgRating.toFixed(1)} badgeText="0.5%" icon={<StarIcon className="h-5 w-5 text-yellow-500" />} />
      </div>

      <ProfessionalGrid role={role} />
    </div>
  );
}
