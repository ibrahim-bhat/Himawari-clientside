"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StarIcon, PhoneIcon, MessageIcon } from "@/components/ui/Icons";
import type { Professional } from "@/types";

const roleLabels: Record<string, string> = {
  listener: "Listener",
  counselor: "Counselor",
  psychiatrist: "Psychiatrist",
};

const roleColors: Record<string, string> = {
  psychiatrist: "text-[#3B82F6]",
  counselor: "text-[#0D9488]",
  listener: "text-[#259A9E]",
};

interface ExpertCardProps {
  professional: Professional;
}

export default function ExpertCard({ professional }: ExpertCardProps) {
  const { id, name, role, rating, reviews, image, phone, specialties, location } = professional;
  const roleLabel = roleLabels[role] ?? role;
  const roleColor = roleColors[role] ?? "text-[#259A9E]";

  return (
    <Card className="overflow-hidden !p-0">
      <div className="relative h-56 w-full bg-gray-200">
        <Image
          src={image || "/pic.png"}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#22322e]">{name}</h3>
            <p className={`mt-1 text-sm font-medium ${roleColor}`}>{roleLabel}</p>
          </div>
          <div className="rounded-full bg-[#edf5f1] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#60716c]">
            Available
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1">
          <StarIcon className="h-4 w-4 text-[#188F8C] fill-[#188F8C]" />
          <span className="text-sm font-semibold text-[#22322e]">{rating.toFixed(1)}</span>
          <span className="text-xs text-[#7b8985]">({reviews} reviews)</span>
        </div>
        <p className="mt-3 text-sm leading-7 text-[#697874]">
          {specialties.slice(0, 2).join(" • ")}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#92a09b]">
          {location}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a href={`tel:${phone || ""}`} className="inline-flex items-center gap-1.5 rounded-full border border-[#d4e3de] bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#188F8C] transition-colors hover:bg-[#f4faf8]">
            <PhoneIcon className="h-3.5 w-3.5" />
            Call
          </a>
          <Link
            href={`/bookings?chat=${id}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#d4e3de] bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#188F8C] transition-colors hover:bg-[#f4faf8]"
          >
            <MessageIcon className="h-3.5 w-3.5" />
            Chat
          </Link>
          <Link href="/auth/login">
            <Button className="min-h-[42px] px-5 text-xs uppercase tracking-[0.14em]">Book Now</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
