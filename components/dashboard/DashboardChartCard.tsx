"use client";

import { useState } from "react";
import Card from "../ui/Card";
import Chart from "../ui/Chart";
import { BarChartIcon } from "../ui/Icons";
import { getChartData } from "@/lib/services/reportService";

export default function DashboardChartCard() {
  const [period, setPeriod] = useState<"weekly" | "monthly">("weekly");
  const chartData = getChartData(period);

  return (
    <Card className="h-full min-h-[500px] w-full max-w-full overflow-hidden">
      <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg bg-[#259A9E] text-xs font-bold text-white">
        10
      </div>
      <div className="flex items-center gap-3 border-b border-[#259A9E] px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#259A9E] text-white">
          <BarChartIcon className="h-5 w-5" />
        </div>
        <div className="flex items-baseline gap-2 flex-wrap">
          <h2 className="text-xl font-bold text-[#111827]">Growth</h2>
          <span className="text-sm font-medium text-[#6b7280]">
            [{" "}
            <button
              type="button"
              onClick={() => setPeriod("monthly")}
              className={period === "monthly" ? "text-[#259A9E] underline underline-offset-4" : "hover:text-[#259A9E]"}
            >
              Monthly
            </button>{" "}
            /{" "}
            <button
              type="button"
              onClick={() => setPeriod("weekly")}
              className={period === "weekly" ? "text-[#259A9E] underline underline-offset-4" : "hover:text-[#259A9E]"}
            >
              Weekly
            </button>{" ]"}
          </span>
        </div>
      </div>
      <div className="flex-1 px-4 sm:px-8 py-8 overflow-x-auto">
        <Chart data={chartData} />
      </div>
    </Card>
  );
}
