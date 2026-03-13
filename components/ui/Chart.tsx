"use client";

import type { ChartDataPoint } from "@/types";

interface ChartProps {
  data?: ChartDataPoint[];
}

export default function Chart({ data: dataProp }: ChartProps) {
  const labels = dataProp?.map((d) => d.label) ?? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const values = dataProp?.map((d) => d.value) ?? [2000, 6000, 4500, 8000, 5500, 7000, 4000];
  const maxVal = Math.max(...values, 1);
  const yAxisItems = [
    { label: `${Math.ceil(maxVal / 1000)}k+`, highlight: false },
    { label: String(Math.round((maxVal * 0.8) / 100) * 100), highlight: false },
    { label: String(Math.round((maxVal * 0.6) / 100) * 100), highlight: false },
    { label: String(Math.round((maxVal * 0.45) / 100) * 100), highlight: true },
    { label: "0", highlight: false },
  ];

  const barData = labels.map((label, i) => ({ label, height: `${(values[i]! / maxVal) * 100}%` }));

  return (
    <div className="relative h-[420px] w-full flex flex-col pt-8">
      <div className="relative flex-1 flex">
        <div className="absolute inset-4 flex flex-col justify-between">
          {yAxisItems.map((item) => (
            <div key={item.label} className="relative flex items-center w-full group h-0">
              <span className={`absolute -left-12 text-[11px] font-medium w-10 text-right pr-3 ${item.highlight ? "text-[#259a9e]" : "text-gray-400"}`}>
                {item.label}
              </span>
              <div className="absolute left-0 h-1.5 w-1.5 rounded-full bg-gray-200 -translate-x-1/2 z-10" />
              <div className={`flex-1 h-[1px] ${item.highlight ? "border-t border-dashed border-[#2aa7a5]/60" : "bg-gray-100"}`} />
            </div>
          ))}
        </div>
        <div className="relative flex-1 flex items-end justify-between px-4 ml-6">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-100" />
          {labels.map((day) => {
            const bar = barData.find((d) => d.label === day);
            return (
              <div key={day} className="relative flex-1 flex flex-col items-center h-full justify-end min-w-0">
                {bar && (
                  <div className="w-2.5 bg-[#259a9e] rounded-sm transition-all duration-700 flex-shrink-0" style={{ height: bar.height }} />
                )}
                <div className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-gray-200 translate-y-1/2 z-10" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex ml-[40px] justify-between text-[11px] font-medium text-gray-400 pt-6">
        {labels.map((label) => (
          <span key={label} className="flex-1 text-center font-medium truncate">
            {label}
          </span>
        ))}
      </div>
      <div className="ml-[24px] h-[1px] bg-gray-100" />
    </div>
  );
}
