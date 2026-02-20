import { PlusIcon } from "@/components/ui/Icons";

export default function UserProfileHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-[#111827]">
          User Management
        </h1>
        <p className="mt-1 text-sm text-[#6b7280]">
          Monitor user activity, manage roles, and handle account status across the platform.
        </p>
      </div>
      <button className="inline-flex items-center gap-2 rounded-lg bg-[#259A9E] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1e7d80] transition-colors">
        <PlusIcon className="h-4 w-4" />
        <span>Add New User</span>
      </button>
    </div>
  );
}