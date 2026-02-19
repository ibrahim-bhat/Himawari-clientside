export default function Chart() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const yAxisLabels = ["10k+", "8000", "6000", "4000", "2000", "0"];

  return (
    <div className="flex h-100 w-full gap-4">
      {/* Y-axis Labels */}
      <div className="flex flex-col justify-between pb-8 text-xs font-medium text-[#9ca3af]">
        {yAxisLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      {/* Chart Area */}
      <div className="relative flex flex-1 flex-col justify-between">
        {/* Grid Lines */}
        <div className="absolute inset-x-0 bottom-8 top-0 flex flex-col justify-between px-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-full border-b border-dashed border-[#e5e7eb]"
            />
          ))}
        </div>

        {/* Bars Container */}
        <div className="relative flex h-full flex-1 items-end justify-around px-2 pb-8">
          {days.map((day) => {
            let height = "0%";
            if (day === "Mon") height = "25%";
            if (day === "Tue") height = "55%";

            return (
              <div
                key={day}
                className="group relative flex h-full w-8 flex-col items-center justify-end"
              >
                <div
                  className="w-4 rounded-t-sm bg-[#2aa7a5] transition-all duration-300"
                  style={{ height: height }}
                />
              </div>
            );
          })}
        </div>

        {/* X-axis Labels */}
        <div className="flex justify-around pt-2 text-xs font-medium text-[#9ca3af]">
          {days.map((day) => (
            <span key={day} className="w-8 text-center">
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
