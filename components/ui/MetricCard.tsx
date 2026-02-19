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
    <Card className=" mr-12 p-5 h-[160px] w-full max-w-[300px]">

  {/* Top Row */}
  <div className="flex justify-between items-start">

    {/* Icon */}
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f6f7] text-[#259a9e]">
      {icon ?? (
        <span className="text-lg font-semibold">
          {label.charAt(0).toUpperCase()}
        </span>
      )}
    </div>

    {/* Index Badge */}
    <div className="absolute top-2 right-3 flex h-6 w-6 items-center justify-center rounded-md bg-[#2aa7a5] text-[10px] font-bold text-white">
      {index}
    </div>
  </div>

  {/* Bottom Content */}
  <div>
    <p className="text-sm text-[#6b7280]">{label}</p>
    <p className="text-lg font-semibold text-[#111827]">{value}</p>

    {badgeText && (
      <span className="inline-flex items-center rounded-full bg-[#e5f6f7] px-2 py-0.5 text-[11px] font-medium text-[rgb(5,150,104)] mt-1">
        {badgeText}
      </span>
    )}
  </div>

</Card>
  );
} 