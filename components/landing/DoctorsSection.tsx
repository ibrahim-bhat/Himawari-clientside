import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeader from "./SectionHeader";
import { StarIcon } from "@/components/ui/Icons";

const doctors = [
  {
    id: 1,
    name: "Dr. Adeel Rashid",
    specialization: "Psychiatrist",
    experience: "8+ years",
    rating: 4.5,
    image: "/pic.png",
  },
  {
    id: 2,
    name: "Dr. Farhana Malik",
    specialization: "Counselor",
    experience: "6+ years",
    rating: 4.6,
    image: "/pic.png",
  },
  {
    id: 3,
    name: "Dr. Ali Raza",
    specialization: "Listener & Support",
    experience: "5+ years",
    rating: 4.5,
    image: "/pic.png",
  },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-wrap">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeader
            badge="Our Experts"
            title="Doctors &amp; Experts"
            subtitle="Meet our verified therapists and mental health professionals."
            align="left"
          />
          <Link
            href="/experts"
            className="shrink-0 rounded-lg border border-[#259A9E] px-5 py-2.5 text-sm font-semibold text-[#259A9E] transition-colors hover:bg-[#e8f5f5]"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc) => (
            <Card key={doc.id} className="overflow-hidden p-0">
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-[#111827]">{doc.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#259A9E]">{doc.specialization}</p>
                <p className="mt-1 text-xs text-[#9ca3af]">{doc.experience}</p>
                <div className="mt-3 flex items-center gap-1">
                  <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-semibold text-[#111827]">{doc.rating}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
