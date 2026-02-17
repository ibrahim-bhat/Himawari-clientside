
import Logo from "../ui/Logo";
import {
  CalendarIcon,
  DashboardIcon,
  HeadsetIcon,
  SettingsIcon,
  StethoscopeIcon,
  UsersIcon,
  LogoutIcon

} from "../ui/Icons";
import { LogOutIcon } from "lucide-react";
//import { LogOut } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: DashboardIcon },
  { label: "Users", icon: UsersIcon },
  { label: "Listener", icon: HeadsetIcon},
  { label: "Counselors", icon: HeadsetIcon },
  { label: "Psychiatrists", icon: StethoscopeIcon },
  { label: "Bookings", icon: CalendarIcon },
  { label: "Settings", icon: SettingsIcon },
];

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-20 items-center border-b border-[#e5e7eb] px-6">
        <Logo />
      </div>

      <nav className="mt-7 flex-1 space-y-1 px-3 text-sm font-medium text-[#6b7280]">
        {navItems.map(({ label, icon: Icon }, index) => {
          const isActive = index === 0;
          return (
            <button
              key={label}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                isActive
                  ? "bg-[#259a9e] text-white"
                  : "text-[#4b5563] hover:bg-[#f3f4f6]"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm ${
                  isActive ? "bg-white/10 text-white" : "bg-gray-100 text-gray-900"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span>{label}</span>
            </button>
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
