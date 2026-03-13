import Card from "@/components/ui/Card";
import SectionHeader from "./SectionHeader";
import {
  HeadsetIcon,
  StethoscopeIcon,
  CalendarIcon,
  FileTextIcon,
} from "@/components/ui/Icons";

const services = [
  {
    title: "Online Counseling",
    description: "One-on-one sessions with certified counsellors over video or chat. Get support for stress, relationships, grief and more.",
    icon: HeadsetIcon,
    tags: ["Video & Chat", "Certified", "Confidential"],
  },
  {
    title: "Psychiatrist Consultation",
    description: "Consult licensed psychiatrists for assessments, diagnosis and medication management when you need clinical care.",
    icon: StethoscopeIcon,
    tags: ["Licensed", "Assessment", "Medication"],
  },
  {
    title: "Appointment Booking",
    description: "Book and manage your sessions easily. Choose your therapist, pick a slot and get reminders—all from one place.",
    icon: CalendarIcon,
    tags: ["Easy booking", "Reminders", "Flexible"],
  },
  {
    title: "Health Blog",
    description: "Articles, myth-busting and stories from the community. Learn and stay informed about mental wellness.",
    icon: FileTextIcon,
    tags: ["Articles", "Myth-busting", "Stories"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-wrap">
        <SectionHeader
          badge="Our Services"
          title="Mental Health Support"
          subtitle="From first contact to ongoing care, we provide end-to-end support tailored to your needs."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map(({ title, description, icon: Icon, tags }) => (
            <Card key={title} className="p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f5f5] text-[#259A9E]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#111827]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#6b7280]">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f0fafa] px-3 py-1 text-xs font-medium text-[#259A9E]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
