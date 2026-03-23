"use client";

import Image from "next/image";

const companyLinks = ["About Us", "Himawari", "Doctors", "Blog"];
const supportLinks = ["Online Counseling", "Therapy", "Diagnostics"];
const legalLinks = ["Privacy Policy", "Terms & Conditions", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="bg-[#259A9E] text-white">
      <div className="section-wrap py-12 sm:py-16">

        {/* Main row: logo left + 3 columns right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* Left: Logo + description */}
          <div className="shrink-0 lg:w-72">
            <div className="flex items-center gap-3">
              <Image
                src="/himawari-icon.png"
                alt="Himawari icon"
                width={44}
                height={44}
                className="h-11 w-11 rounded-xl object-cover"
              />
              <span className="text-xl font-bold text-white">Himawari</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/80">
              A mental wellness platform connecting you with trusted listeners,
              counsellors and psychiatrists—private, accessible and stigma-free.
            </p>
          </div>

          {/* Right: 3 columns in one row */}
          <div className="grid flex-1 grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Company</p>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((label) => (
                  <li key={label}>
                    <span className="text-sm text-white/85">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Support</p>
              <ul className="mt-4 space-y-3">
                {supportLinks.map((label) => (
                  <li key={label}>
                    <span className="text-sm text-white/85">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Legal</p>
              <ul className="mt-4 space-y-3">
                {legalLinks.map((label) => (
                  <li key={label}>
                    <span className="text-sm text-white/85">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 rounded-xl border border-white/20 bg-white/10 px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-white">Stay updated</p>
              <p className="mt-1 text-sm text-white/75">
                Get mental wellness resources and product updates delivered to your inbox.
              </p>
            </div>
            <form
              className="flex w-full max-w-md gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/30 bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#259A9E] transition-colors hover:bg-white/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 sm:flex-row">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Himawari. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/70">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
