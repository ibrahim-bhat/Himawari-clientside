"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { StarIcon, PhoneIcon, MessageIcon } from "@/components/ui/Icons";
import { getProfessionals } from "@/lib/services/professionalService";
import type { Professional, ProfessionalRole } from "@/types";

const roleLabels: Record<ProfessionalRole, string> = {
  listener: "Listener",
  counselor: "Counselor",
  psychiatrist: "Psychiatrist",
};

const roleColors: Record<ProfessionalRole, string> = {
  psychiatrist: "text-[#3B82F6]",
  counselor: "text-[#0D9488]",
  listener: "text-[#259A9E]",
};

function ProfCard({ p }: { p: Professional }) {
  const roleLabel = roleLabels[p.role];
  const roleColor = roleColors[p.role];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="relative h-52 w-full bg-gray-200">
        <Image
          src={p.image || "/pic.png"}
          alt={p.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-[#111827]">{p.name}</h3>
            <p className={`mt-0.5 text-sm font-medium ${roleColor}`}>{roleLabel}</p>
          </div>
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${p.isActive ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}`}>
            {p.isActive ? "Available" : "Busy"}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1">
          <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-semibold text-[#111827]">{p.rating.toFixed(1)}</span>
          <span className="text-xs text-[#9ca3af]">({p.reviews} reviews)</span>
        </div>
        {p.specialties?.length > 0 && (
          <p className="mt-2 text-xs text-[#6b7280]">{p.specialties.slice(0, 2).join(" · ")}</p>
        )}
        <p className="mt-1 text-xs text-[#9ca3af]">{p.location}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={`tel:${p.phone}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#e5e7eb] px-3 py-2 text-xs font-semibold text-[#259A9E] transition-colors hover:border-[#259A9E] hover:bg-[#e8f5f5]"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            Call
          </a>
          <Link
            href={`/bookings?chat=${p.id}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#e5e7eb] px-3 py-2 text-xs font-semibold text-[#259A9E] transition-colors hover:border-[#259A9E] hover:bg-[#e8f5f5]"
          >
            <MessageIcon className="h-3.5 w-3.5" />
            Chat
          </Link>
          <Link
            href="/auth/login"
            className="rounded-lg bg-[#259A9E] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1e7a7d]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

const sections: { role: ProfessionalRole; label: string; subtitle: string }[] = [
  { role: "psychiatrist", label: "Psychiatrists", subtitle: "Licensed psychiatrists for assessment, diagnosis and medication management." },
  { role: "counselor",    label: "Counsellors",   subtitle: "Certified counsellors for one-on-one sessions over video or chat." },
  { role: "listener",     label: "Listeners",     subtitle: "Trained listeners available over call or chat whenever you need to be heard." },
];

export default function ExpertsPage() {
  const all = getProfessionals();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero banner */}
        <div className="bg-[#259A9E] py-12 sm:py-16">
          <div className="section-wrap text-center">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Our Experts
            </span>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Doctors, Counsellors &amp; Listeners
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/80">
              Browse all verified professionals and find the right support for your mental wellness journey.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="section-wrap py-14 sm:py-16">
          <div className="space-y-16">
            {sections.map(({ role, label, subtitle }) => {
              const list = all.filter((p) => p.role === role);
              if (list.length === 0) return null;
              return (
                <section key={role} id={role} className="scroll-mt-24">
                  {/* Section heading */}
                  <div className="mb-8 border-b border-[#e5e7eb] pb-4">
                    <span className="inline-block rounded-full bg-[#259A9E] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                      {label}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold text-[#111827]">{label}</h2>
                    <p className="mt-1 text-sm text-[#6b7280]">{subtitle}</p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((p) => (
                      <ProfCard key={p.id} p={p} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
