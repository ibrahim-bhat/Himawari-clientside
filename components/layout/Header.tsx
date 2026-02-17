import { BellIcon, NotificationIcon } from "../ui/Icons";
import Image from "public//pic.png";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between">
      <div />
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 text-sm text-[#6b7280]">
          <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f4f6] text-[#6b7280]">
            <BellIcon className="h-4 w-4" />
             <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f4f6] text-[#6b7280]">
            <NotificationIcon className="h-4 w-4" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
        <div className="flex items-center gap-3">
         <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <img src="/pic.png" alt="Profile" className="h-full w-full object-cover" />
</div>
          <div className="flex flex-col text-sm">
            <span className="font-semibold text-[#111827]">Saima Yousuf</span>
            <span className="text-xs text-[#6b7280]">saima11@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
