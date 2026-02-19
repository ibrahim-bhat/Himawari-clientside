import Card from "../ui/Card";
import Chart from "../ui/Chart";
import { BarChartIcon } from "../ui/Icons";

export default function DashboardChartCard() {
  return (
    <Card className=" mr-150 h-full min-h-[500px]  min-w-[1050px]">
      <div className=" absolute right-2 top-1 flex h-7 w-7 items-center justify-center rounded-lg bg-[#2aa7a5] text-xs font-bold text-white">
        10
      </div>
      <div className="flex items-center gap-3 border-b border-[#e5e7eb] px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#259a9e] text-white">
          <BarChartIcon className="h-5 w-5" />
        </div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-xl font-bold text-[#111827]">Growth</h2>
          <span className="text-sm font-medium text-[#6b7280]">
            [Monthly / <span className="text-[#2aa7a5] underline underline-offset-4">Weekly</span>]
          </span>
        </div>
      </div>
      <div className="flex-1 px-8 py-8">
        <Chart />
      </div>
    </Card>
  );
}
