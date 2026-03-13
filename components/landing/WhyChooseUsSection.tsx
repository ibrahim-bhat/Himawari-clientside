import Card from "@/components/ui/Card";
import SectionHeader from "./SectionHeader";
import {
  StarIcon,
  UsersIcon,
  ClockIcon,
  HeadsetIcon,
  BrainIcon,
  CalendarIcon,
} from "@/components/ui/Icons";

const features = [
  {
    title: "Proven expertise",
    description: "Trained listeners, certified counsellors and licensed psychiatrists with verified credentials.",
    icon: StarIcon,
  },
  {
    title: "Client-first approach",
    description: "We put your wellbeing first with culturally sensitive, evidence-based support.",
    icon: UsersIcon,
  },
  {
    title: "On-time support",
    description: "Book sessions that fit your schedule and get reminders so you never miss an appointment.",
    icon: ClockIcon,
  },
  {
    title: "24/7 listeners",
    description: "Someone to talk to over call or chat when you need to be heard.",
    icon: HeadsetIcon,
  },
  {
    title: "Confidential & secure",
    description: "Your sessions and data are private and handled with care.",
    icon: BrainIcon,
  },
  {
    title: "Easy booking",
    description: "Choose your professional, pick a slot and start your journey in minutes.",
    icon: CalendarIcon,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-wrap">
        <SectionHeader
          badge="Why Choose Us"
          title="Your trusted mental health partner"
          subtitle="We combine expertise with a client-first approach to deliver support that meets your expectations."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5f5] text-[#259A9E]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#111827]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#6b7280]">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
