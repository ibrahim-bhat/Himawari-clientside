import { ReactNode } from "react";
import Card from "./Card";

type MetricCardProps = {
  index: number;
  label: string;
  value: string;
  badgeText?: string;
  icon?: ReactNode;
};

export default function MetricCard({
  index,
  label,
  value,
  badgeText = "KPI",
  icon,
}: MetricCardProps) {
  return (
    <Card className="relative flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f6f7] text-[#259a9e]">
          {icon ?? (
            <span className="text-xl font-semibold">
              {label.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-[#6b7280]">{label}</p>
          <p className="text-2xl font-semibold text-[#111827]">{value}</p>
          {badgeText && (
            <span className="inline-flex items-center rounded-full bg-[#e5f6f7] px-2 py-0.5 text-[11px] font-medium text-[#059669]">
              {badgeText}
            </span>
          )}
        </div>
      </div>
      <span className="absolute right-4 top-3 text-xs font-semibold text-[#9ca3af]">
        {index}
      </span>
    </Card>
  );
}
