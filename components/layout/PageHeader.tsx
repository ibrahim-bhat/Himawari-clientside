import { UploadIcon } from "../ui/Icons";

export default function PageHeader() {
  return (
    <div className="mb-6 flex items-start justify-between">
      <div>
        <h1 className="text-xl lg:text-3xl font-bold text-[#111827]">
          System Overview
        </h1>
        <p className="mt-1 text-xs lg:text-sm text-[#6b7280] max-w-[240px] lg:max-w-none">
          Monitor your mental health platform&apos;s performance in real-time.
        </p>
      </div>

      <button className="flex items-center gap-2  mr-7 rounded-lg border border-black-300 bg-white px-5 py-4 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
        <UploadIcon className="h-4 w-4" />
        <span>Export</span>
      </button>
    </div>
  );
}
