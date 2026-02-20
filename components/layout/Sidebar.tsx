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
  StethoscopeIcon

} from "../ui/Icons";


const navItems = [
  { label: "Dashboard", icon: DashboardIcon, href: "/" },
  { label: "Users", icon: UsersIcon, href: "/users" },
  { label: "Listener", icon: HeadsetIcon, href: "/listener" },
  { label: "Counselors", icon: BrainIcon, href: "/counselors" },
  { label: "Psychiatrists", icon: StethoscopeIcon, href: "/psychiatrists" },
  { label: "Bookings", icon: CalendarIcon, href: "/bookings" },
  { label: "Settings", icon: SettingsIcon, href: "/settings" },
];


export default function Sidebar() {
   const pathname = usePathname();
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-20 items-center border-b border-[#e5e7eb] px-6">
        <Logo />
      </div>

      <nav className="mt-7 flex-1 space-y-1 px-3 text-sm font-medium text-[#6b7280]">
        {navItems.map(({ label, icon: Icon, href }, index) => {
const isActive = pathname === href;

          return (
   <Link
      key={label}
      href={href}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
        isActive
          ? "bg-[#259a9e] text-white"
          : "text-[#4b5563] hover:bg-[#f3f4f6]"
      }`}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm ${
          isActive
            ? "bg-white/10 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <Icon className="h-4 w-4" />
      </span>

      {label}
    </Link>
            );
        })}
      </nav>

      <div className="border-t border-[#e5e7eb] px-6 py-4 text-sm text-[#6b7280]">
        <button className="flex items-center gap-3 text-left text-[#9ca3af]]">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f3f4f6]">
            <LogoutIcon className="h-4 w-4 text-[#6b7280d6]" />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
