type ChartProps = {
  highlightLabel?: string;
};

export default function Chart({ highlightLabel = "Feb" }: ChartProps) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const heights = [40, 96, 24, 18, 22, 20, 16, 14, 12, 10, 8, 6];

  return (
    <div className="flex h-64 flex-col justify-between">
      <div className="flex flex-1 items-end gap-4 border-b border-[#e5e7eb] pb-6">
        {months.map((month, index) => {
          const isHighlight = month === highlightLabel;
          return (
            <div key={month} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={`w-6 rounded-full bg-[#e5f6f7] ${isHighlight ? "bg-[#2a9ba0]" : ""}`}
                style={{ height: `${heights[index]}px` }}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-between text-xs text-[#9ca3af]">
        {months.map((month) => (
          <span
            key={month}
            className={month === highlightLabel ? "font-medium text-[#111827]" : ""}
          >
            {month}
          </span>
        ))}
      </div>
    </div>
  );
}
