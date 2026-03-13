import MentalHealthIllustration from "./MentalHealthIllustration";

const items = [
  {
    title: "Full support",
    description: "Listeners, counsellors and psychiatrists in one platform.",
  },
  {
    title: "Book easily",
    description: "Choose your professional and slot from the app.",
  },
  {
    title: "Confidential care",
    description: "Private sessions and secure handling of your information.",
  },
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ServicesPackageSection() {
  return (
    <section id="services-package" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-wrap">
        <div className="overflow-hidden rounded-2xl bg-[#f0fafa] border border-[#d1eded]">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            {/* Left: illustration */}
            <div className="flex items-center justify-center bg-[#259A9E] px-8 py-12">
              <MentalHealthIllustration className="h-56 w-full max-w-xs text-white sm:h-64" />
            </div>

            {/* Right: content */}
            <div className="px-8 py-10 sm:px-10 sm:py-12">
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                Our support{" "}
                <span className="text-[#259A9E]">package</span>
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                Get a comprehensive solution for your mental wellness—from listeners to counsellors
                to psychiatrists, powered by a simple booking flow.
              </p>
              <ul className="mt-6 space-y-4">
                {items.map(({ title, description }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#259A9E] text-white">
                      <CheckIcon />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#111827]">{title}</p>
                      <p className="text-sm text-[#6b7280]">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="mt-8 rounded-lg bg-[#259A9E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e7a7d]">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
