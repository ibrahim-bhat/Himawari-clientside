import Card from "../ui/Card";
import Chart from "../ui/Chart";

export default function DashboardChartCard() {
  return (
    <Card className="h-full">
      <div className="flex items-center justify-between border-b border-[#e5e7eb] px-6 py-4">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
            Growth
          </span>
          <span className="text-xs text-[#9ca3af]">[Monthly / Weekly]</span>
        </div>
        <span className="rounded-full bg-[#e5f6f7] px-2 py-0.5 text-xs font-medium text-[#259a9e]">
          10
        </span>
      </div>
      <div className="px-6 py-4">
        <Chart />
      </div>
    </Card>
  );
}
