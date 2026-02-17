import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#f4f6f8]">
      <aside className="flex w-64 shrink-0 flex-col border-r border-[#e5e7eb] bg-white">
        <Sidebar />
      </aside>
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex h-20 items-center border-b border-[#e5e7eb] bg-white px-8">
          <Header />
        </header>
        <main className="flex-1 overflow-y-auto px-8 py-6">{children}</main>
      </div>
    </div>
  );
}
