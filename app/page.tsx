import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import MetricCard from "../components/ui/MetricCard";
import ActivityList from "../components/dashboard/ActivityList";
import DashboardChartCard from "../components/dashboard/DashboardChartCard";
import {
  UsersIcon,
  HeadsetIcon,
  CalendarIcon,
  StethoscopeIcon,
  DashboardIcon,
} from "../components/ui/Icons";

export default function Home() {
  return (
    <DashboardLayout>
      <PageHeader />
     

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

        <MetricCard
          index={1}
          label="Total Users"
          value="1000"
          icon={<UsersIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={2}
          label="Total Listeners"
          value="547"
          icon={<HeadsetIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={3}
          label="Total Counselors"
          value="325"
          icon={<HeadsetIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={4}
          label="Total Psychiatrists"
          value="128"
          icon={<StethoscopeIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={5}
          label="Today's Bookings"
          value="29"
          icon={<CalendarIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={6}
          label="Total Revenue"
          value="₹82,000"
          icon={<DashboardIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={7}
          label="Active Calls"
          value="10"
          alertDot
          icon={<HeadsetIcon className="h-5 w-5" />}
        />
        <MetricCard
          index={8}
          label="Active Chats"
          value="59"
          alertDot
          icon={<HeadsetIcon className="h-5 w-5" />}
        />
      </section>
      

      <section className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
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