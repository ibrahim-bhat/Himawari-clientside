import { BellIcon, MessageIcon, MenuIcon } from "../ui/Icons";
import Logo from "../ui/Logo";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="flex w-full items-center justify-between">
      {/* Mobile Logo */}
      <div className="flex items-center lg:hidden">
        <Logo className="h-8 lg:h-12" />
      </div>

      <div className="hidden lg:block" />

      <div className="flex items-center gap-2 lg:gap-6">
        <div className="flex items-center gap-1 lg:gap-3 text-sm text-[#6b7280]">
          <button className="relative flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full bg-white lg:bg-[#f3f4f6] text-[#6b7280]">
            <MessageIcon className="h-5 w-5 lg:h-4 lg:w-4" />
          </button>
          <button className="relative flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full bg-white lg:bg-[#f3f4f6] text-[#6b7280]">
            <BellIcon className="h-5 w-5 lg:h-4 lg:w-4" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 bg-red-500 rounded-full"></span>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          <div className="relative h-8 w-8 lg:h-10 lg:w-10 rounded-full overflow-hidden border border-gray-100">
            <img src="/pic.png" alt="Profile" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:flex flex-col text-sm">
            <span className="font-semibold text-[#111827]">Saima Yousuf</span>
            <span className="text-xs text-[#6b7280]">saima11@gmail.com</span>
          </div>
          {/* Notification Badge */}
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white lg:hidden">
            2
          </div>
        </div>
      </div>
    </div>
  );
}
