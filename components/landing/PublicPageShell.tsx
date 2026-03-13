"use client";

import type { ReactNode } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

interface PublicPageShellProps {
  children: ReactNode;
  className?: string;
}

export default function PublicPageShell({ children, className = "" }: PublicPageShellProps) {
  return (
    <div className="public-shell min-h-screen">
      <Navbar />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  );
}
