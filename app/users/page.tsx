import DashboardLayout from "@/components/layout/DashboardLayout";
import UserProfileHeader from "@/components/users/UserProfileHeader";
import MetricCard from "@/components/ui/MetricCard";
import UserTable from "@/components/users/UserTable";
import { UsersIcon, PhoneIcon, ShieldAlertIcon } from "@/components/ui/Icons";

export default function UsersPage() {
  return (
    <DashboardLayout>
      <UserProfileHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 min-w-[1000px]">
        <MetricCard
          index={1}
          label="Total Users"
          value="1000"
          badgeText="10%"
          icon={<UsersIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={2}
          label="Active Now"
          value="421"
          badgeText="15%"
          icon={<PhoneIcon className="h-5 w-5" />}
          alertDot
        />
        <MetricCard
          index={3}
          label="Blocked Accounts"
          value="0"
          badgeText="0%"
          icon={<ShieldAlertIcon className="h-5 w-5 text-red-500" />}
        />
      </div>

      <UserTable />
    </DashboardLayout>

  );
}