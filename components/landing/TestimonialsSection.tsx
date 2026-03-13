import Card from "@/components/ui/Card";
import SectionHeader from "./SectionHeader";
import { StarIcon } from "@/components/ui/Icons";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Noor",
    role: "User",
    content: "The professional listened patiently and offered practical guidance. I felt much more at ease after the session. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Imran Qazi",
    role: "User",
    content: "Very professional and compassionate. The calm and supportive approach made the session very comfortable for me.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sana Rahman",
    role: "User",
    content: "Himawari creates a safe space to talk. The session helped me identify the root causes of my stress. Grateful for this platform.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-wrap">
        <SectionHeader
          badge="Testimonials"
          title="What people say"
          subtitle="Real reviews from people who used Himawari for mental health support."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.id} className="p-6 sm:p-7">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-[#374151] italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#259A9E] text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{t.name}</p>
                  <p className="text-xs text-[#9ca3af]">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
