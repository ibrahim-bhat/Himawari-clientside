export default function CTASection() {
  return (
    <section className="scroll-mt-20 py-8 sm:py-10">
      <div className="section-wrap">
        <div className="rounded-2xl bg-[#259A9E] px-8 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Start your mental health journey today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Join thousands who have found support through Himawari. Create an account
            and book your first session in minutes.
          </p>
          <button className="mt-8 inline-flex min-h-[48px] items-center rounded-lg bg-white px-8 text-sm font-bold text-[#259A9E] transition-colors hover:bg-gray-50">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
