import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/layout/PageHeader";
import MetricCard from "@/components/ui/MetricCard";
import ActivityList from "@/components/dashboard/ActivityList";
import DashboardChartCard from "@/components/dashboard/DashboardChartCard";
import {
  UsersIcon,
  MapPinIcon,
  BrainIcon,
  StethoscopeIcon,
  CalendarIcon,
  DollarIcon,
  PhoneIcon,
  MessageIcon,
} from "@/components/ui/Icons";
import { getDashboardMetrics } from "@/lib/services/dashboardService";

export default function DashboardPage() {
  const metrics = getDashboardMetrics();

  return (
    <DashboardLayout>
      <PageHeader />

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <MetricCard
          index={1}
          label="Total Users"
          value={String(metrics.totalUsers)}
          badgeText={metrics.usersBadge}
          icon={<UsersIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={2}
          label="Total Listeners"
          value={String(metrics.totalListeners)}
          badgeText={metrics.listenersBadge}
          icon={<MapPinIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={3}
          label="Total Counselors"
          value={String(metrics.totalCounselors)}
          badgeText={metrics.counselorsBadge}
          icon={<BrainIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={4}
          label="Total Psychiatrists"
          value={String(metrics.totalPsychiatrists)}
          badgeText={metrics.psychiatristsBadge}
          icon={<StethoscopeIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={5}
          label="Today's Bookings"
          value={String(metrics.todayBookings)}
          badgeText={metrics.bookingsBadge}
          icon={<CalendarIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={6}
          label="Total Revenue"
          value={metrics.totalRevenue}
          badgeText={metrics.revenueBadge}
          icon={<DollarIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={7}
          label="Active Calls"
          value={String(metrics.activeCalls)}
          badgeText={metrics.callsBadge}
          icon={<PhoneIcon className="h-5 w-5" />}
          alertDot
        />
        <MetricCard
          index={8}
          label="Active Chats"
          value={String(metrics.activeChats)}
          badgeText={metrics.chatsBadge}
          icon={<MessageIcon className="h-5 w-5" />}
          alertDot
        />
      </section>

      <section className="mt-4 lg:mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="lg:col-span-1">
          <ActivityList />
        </div>
        <div className="lg:col-span-3">
          <DashboardChartCard />
        </div>
      </section>
    </DashboardLayout>
  );
}
