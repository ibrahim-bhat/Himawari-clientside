import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-wrap">
        <SectionHeader
          badge="About Us"
          title="Your Partner in Mental Wellness"
          subtitle="Himawari came into being to provide online counseling and emotional support designed to foster the mental wellness of any individual."
        />
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm leading-8 text-[#6b7280] sm:text-base">
            It anonymously connects you with the right expert from our panel consisting of{" "}
            <strong className="font-semibold text-[#111827]">
              Listeners, Counselors, Psychologists, Psychotherapists, Life coaches, Career coaches &amp; Healers
            </strong>{" "}
            who understand you and guide you through completely confidential sessions.
          </p>
        </div>
      </div>
    </section>
  );
}
