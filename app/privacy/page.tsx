import PublicPageShell from "@/components/landing/PublicPageShell";

export default function PrivacyPage() {
  return (
    <PublicPageShell>
      <main className="section-wrap py-10 sm:py-12">
        <div className="mx-auto max-w-4xl">
          <header className="rounded-[34px] border border-[#d8e3dd] bg-white/88 px-6 py-10 text-center shadow-[0_18px_40px_rgba(21,38,33,0.04)] sm:px-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#7b8984]">Privacy</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#22322e] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm leading-7 text-[#687873]">
              Last updated: {new Date().toLocaleDateString("en-US")}
            </p>
          </header>

          <div className="mt-8 rounded-[30px] border border-[#d8e3dd] bg-white p-6 shadow-[0_16px_36px_rgba(21,38,33,0.04)] sm:p-8 lg:p-10">
            <div className="space-y-6 text-sm leading-8 text-[#5f6e69] sm:text-base">
              <p>
                Himawari (&quot;we&quot;) is committed to protecting your privacy. This policy describes how we collect,
                use, and safeguard your information when you use our mental health platform.
              </p>
              <p>
                We collect information you provide when signing up, booking sessions, and using our services.
                We use it to deliver care, improve our platform, and communicate with you. We do not sell your
                personal data to third parties.
              </p>
              <p>
                For full terms and data practices, please contact us at support@himawari.com or via the
                contact form on our website.
              </p>
            </div>
          </div>
        </div>
      </main>
    </PublicPageShell>
  );
}
