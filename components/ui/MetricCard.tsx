import { ReactNode } from "react";
import Card from "./Card";

type MetricCardProps = {
  index: number;
  label: string;
  value: string;
  badgeText?: string;
  icon?: ReactNode;
  alertDot?: boolean;
};

export default function MetricCard({
  index,
  label,
  value,
  badgeText = "10%",
  icon,
  alertDot = false,
}: MetricCardProps) {
  return (
    <Card className="p-5 h-[160px] w-full max-w-[370px] flex flex-col">
      <div className="flex justify-between items-start">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E5F6F7] text-[#259A9E]">
          {icon ?? (
            <span className="text-lg font-semibold">
              {label.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#259A9E] text-[10px] font-bold text-white">
          {index}
        </div>
      </div>
      <div className="mt-auto">
        <p className="text-sm text-[#6b7280]">{label}</p>
        <p className="text-lg font-semibold text-[#111827]">{value}</p>
        {badgeText && (
          <span className="inline-flex items-center rounded-full bg-[#E5F6F7] px-2 py-0.5 text-[11px] font-medium text-[#259A9E] mt-1">
            {badgeText}
          </span>
        )}
      </div>
    </Card>
  );
}
