"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  DashboardIcon,
  UsersIcon,
  BookingsIcon,
  SettingsIcon,
  HeadsetIcon,
  BrainIcon,
  StethoscopeIcon,
  FileTextIcon,
  DollarIcon,
  BarChartIcon,
} from "../ui/Icons";

const mainNavItems = [
  { label: "Dashboard", icon: DashboardIcon, href: "/dashboard" },
  { label: "Users", icon: UsersIcon, href: "/users" },
  { label: "Bookings", icon: BookingsIcon, href: "/bookings" },
];

const moreNavItems = [
  { label: "Content", icon: FileTextIcon, href: "/content" },
  { label: "Reels", icon: FileTextIcon, href: "/reels" },
  { label: "Listeners", icon: HeadsetIcon, href: "/listeners" },
  { label: "Counselors", icon: BrainIcon, href: "/counselors" },
  { label: "Psychiatrists", icon: StethoscopeIcon, href: "/psychiatrists" },
  { label: "Payments", icon: DollarIcon, href: "/payments" },
  { label: "Logs", icon: FileTextIcon, href: "/logs" },
  { label: "Referrals", icon: UsersIcon, href: "/referrals" },
  { label: "Reports", icon: BarChartIcon, href: "/reports" },
  { label: "CMS", icon: FileTextIcon, href: "/cms" },
  { label: "Settings", icon: SettingsIcon, href: "/settings" },
  { label: "Sub-admin", icon: UsersIcon, href: "/sub-admin" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [moreOpen, setMoreOpen] = useState(false);

  const isMoreActive = moreNavItems.some((item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/")));

  const handleMoreLink = (href: string) => {
    router.push(href);
    setMoreOpen(false);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-16 min-h-[56px] items-center border-t border-gray-100 bg-white px-2 safe-area-pb lg:hidden">
        {mainNavItems.map(({ label, icon: Icon, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-1 flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px]"
            >
              <Icon className={`h-6 w-6 ${isActive ? "text-[#259a9e]" : "text-gray-400"}`} />
              <span className={`text-[10px] font-medium ${isActive ? "text-[#259a9e]" : "text-gray-400"}`}>{label}</span>
            </Link>
          );
        })}
        <button
          type="button"
          onClick={() => setMoreOpen(true)}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px]"
        >
          <span className={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-xs font-bold ${isMoreActive ? "border-[#259a9e] text-[#259a9e]" : "border-gray-300 text-gray-500"}`}>+</span>
          <span className="text-[10px] font-medium text-gray-500">More</span>
        </button>
      </nav>

      {moreOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMoreOpen(false)} aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-white shadow-xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
              <h2 className="text-lg font-bold text-gray-900">More</h2>
              <button type="button" onClick={() => setMoreOpen(false)} className="min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-500 hover:text-gray-700">
                <span className="text-2xl">×</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1 p-4">
              {moreNavItems.map(({ label, icon: Icon, href }) => (
                <button
                  key={href}
                  type="button"
                  onClick={() => handleMoreLink(href)}
                  className="flex items-center gap-3 rounded-xl p-4 text-left min-h-[52px] hover:bg-[#EAF6F7] active:bg-[#E5F6F7]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5F6F7] text-[#259A9E]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-gray-900">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
