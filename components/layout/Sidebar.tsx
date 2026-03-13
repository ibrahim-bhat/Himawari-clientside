"use client";

import Logo from "../ui/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarIcon,
  DashboardIcon,
  HeadsetIcon,
  SettingsIcon,
  UsersIcon,
  LogoutIcon,
  BrainIcon,
  StethoscopeIcon,
  BarChartIcon,
  FileTextIcon,
  DollarIcon,
} from "../ui/Icons";

const managementItems = [
  { label: "Dashboard", icon: DashboardIcon, href: "/dashboard" },
  { label: "Users", icon: UsersIcon, href: "/users" },
  { label: "Listeners", icon: HeadsetIcon, href: "/listeners" },
  { label: "Counselors", icon: BrainIcon, href: "/counselors" },
  { label: "Psychiatrists", icon: StethoscopeIcon, href: "/psychiatrists" },
  { label: "Bookings", icon: CalendarIcon, href: "/bookings" },
];

const contentItems = [
  { label: "Content", icon: FileTextIcon, href: "/content" },
  { label: "Reels", icon: FileTextIcon, href: "/reels" },
];

const financeItems = [
  { label: "Payments", icon: DollarIcon, href: "/payments" },
];

const systemItems = [
  { label: "Call & Chat Logs", icon: FileTextIcon, href: "/logs" },
  { label: "Referrals", icon: UsersIcon, href: "/referrals" },
  { label: "Reports", icon: BarChartIcon, href: "/reports" },
  { label: "CMS Pages", icon: FileTextIcon, href: "/cms" },
  { label: "Settings", icon: SettingsIcon, href: "/settings" },
  { label: "Sub-admin", icon: UsersIcon, href: "/sub-admin" },
];

function NavGroup({ title, items }: { title: string; items: typeof managementItems }) {
  const pathname = usePathname();
  return (
    <div className="mb-4">
      <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">{title}</p>
      <div className="space-y-1">
        {items.map(({ label, icon: Icon, href }) => {
          const isActive = pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
          return (
            <Link
              key={href}
              href={href}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors min-h-[44px] ${isActive ? "bg-[#259a9e] text-white" : "text-[#4b5563] hover:bg-[#f3f4f6]"}`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isActive ? "bg-white/10 text-white" : "bg-gray-100 text-gray-900"}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="flex h-20 shrink-0 items-center border-b border-[#e5e7eb] px-6">
        <Logo />
      </div>

      <nav className="mt-4 flex-1 px-3 pb-4 text-sm font-medium text-[#6b7280]">
        <NavGroup title="Management" items={managementItems} />
        <NavGroup title="Content" items={contentItems} />
        <NavGroup title="Finance" items={financeItems} />
        <NavGroup title="System" items={systemItems} />
      </nav>

      <div className="shrink-0 px-6 py-6 border-t border-[#e5e7eb]">
        <button type="button" className="flex items-center gap-3 text-left text-[#6b7280] hover:text-[#111827] transition-colors min-h-[44px]">
          <LogoutIcon className="h-5 w-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
