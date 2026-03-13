"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { MenuIcon } from "@/components/ui/Icons";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="section-wrap flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Logo className="h-8 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-[#374151] transition-colors hover:text-[#259A9E]"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/auth/login"
            className="rounded-lg bg-[#259A9E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e7a7d]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/auth/login"
            className="rounded-lg bg-[#259A9E] px-4 py-2 text-xs font-semibold text-white"
          >
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600"
            aria-label="Toggle menu"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#374151] hover:bg-gray-50 hover:text-[#259A9E]"
              >
                {label}
              </a>
            ))}
            <div className="mt-3 border-t border-gray-100 pt-3">
              <Link
                href="/auth/login"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg bg-[#259A9E] px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
