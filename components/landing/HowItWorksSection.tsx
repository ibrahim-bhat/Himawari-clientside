import SectionHeader from "./SectionHeader";
import { UsersIcon, HeadsetIcon, CalendarIcon, PhoneIcon } from "@/components/ui/Icons";

const steps = [
  {
    number: "01",
    title: "Create Account",
    description: "Sign up with your email. It's free and takes a minute.",
    icon: UsersIcon,
  },
  {
    number: "02",
    title: "Choose Expert",
    description: "Browse listeners, counsellors and psychiatrists and pick who fits you.",
    icon: HeadsetIcon,
  },
  {
    number: "03",
    title: "Book Appointment",
    description: "Select a date and time that works for you and confirm your session.",
    icon: CalendarIcon,
  },
  {
    number: "04",
    title: "Start Counseling",
    description: "Join via video, audio or chat and begin your mental health journey.",
    icon: PhoneIcon,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-wrap">
        <SectionHeader
          badge="Our Process"
          title="How we work"
          subtitle="Our process ensures you get quality support on time."
        />
        {/* Teal container */}
        <div className="rounded-2xl bg-[#259A9E] px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div key={number} className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-3xl font-bold text-white">{number}</span>
                <h3 className="mt-2 text-base font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
