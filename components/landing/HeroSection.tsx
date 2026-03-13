import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[500px] overflow-hidden sm:min-h-[580px] lg:min-h-[660px]">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-therapy.png"
          alt="Mental health support"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark teal overlay for text readability */}
      <div className="absolute inset-0 bg-[#259A9E]/70" />

      {/* Left-side gradient for stronger text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      {/* Content */}
      <div className="section-wrap relative z-10">
        <div className="flex min-h-[500px] max-w-xl flex-col justify-center py-16 sm:min-h-[580px] sm:py-20 lg:min-h-[660px] lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Your safe mental wellness space
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Access mental<br />health support<br />easily.
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/90 sm:text-base">
            Himawari connects you with trusted listeners, counsellors, and psychiatrists
            for online counselling, appointments, and mental health resources.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex min-h-[46px] items-center justify-center rounded-lg bg-white px-6 text-sm font-bold text-[#259A9E] shadow-md">
              Get Started
            </span>
            <span className="inline-flex min-h-[46px] items-center justify-center rounded-lg border-2 border-white/70 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm">
              Book a Session
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
