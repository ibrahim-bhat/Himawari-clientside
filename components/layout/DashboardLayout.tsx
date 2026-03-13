"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BottomNav from "./BottomNav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#f4f6f8]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col border-r border-[#e5e7eb] bg-white transition-transform">
        <Sidebar />
      </aside>

      <div className="flex min-h-screen flex-1 flex-col lg:pl-64 overflow-hidden">
        <header className="fixed top-0 left-0 right-0 lg:left-64 z-40 flex h-16 lg:h-20 shrink-0 items-center border-b border-[#e5e7eb] bg-white px-4 lg:px-8">
          <Header />
        </header>

        <main className="flex-1 overflow-y-auto px-4 pt-20 lg:pt-24 pb-20 lg:pb-8 lg:px-8">
          <div className="w-full">
            {children}
          </div>
        </main>

        {/* Mobile Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
