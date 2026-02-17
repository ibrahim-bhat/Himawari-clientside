export default function PageHeader() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-[#111827]">
          System Overview
        </h1>
        <p className="mt-1 text-sm text-[#6b7280]">
          Monitor your mental health platform&apos;s performance in real-time.
        </p>
      </div>
      <button className="inline-flex items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-[#374151] shadow-sm">
        <span>⭳</span>
        <span>Export</span>
      </button>
    </div>
  );
}
