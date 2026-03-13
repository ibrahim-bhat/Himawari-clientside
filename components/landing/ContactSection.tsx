"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/ui/Icons";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-wrap">
        <SectionHeader
          badge="Contact"
          title="Contact Us"
          subtitle="Get in touch for support or inquiries. We're here to help."
        />
        <div className="overflow-hidden rounded-2xl border border-[#e5e7eb]">
          <div className="grid lg:grid-cols-[0.9fr,1.1fr]">
            {/* Left: teal panel */}
            <div className="bg-[#259A9E] px-8 py-10 text-white sm:px-10 sm:py-12">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Not sure what you need? The team at Himawari will be happy to listen and suggest
                the right support.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <MailIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">support@himawari.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <PhoneIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">+91 123 456 7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <MapPinIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">Karan Nagar, Srinagar, Kashmir</span>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white px-8 py-10 sm:px-10 sm:py-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-[#374151]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-[#e5e7eb] bg-gray-50 px-4 py-3 text-sm text-[#111827] placeholder:text-[#9ca3af] focus:border-[#259A9E] focus:outline-none focus:ring-1 focus:ring-[#259A9E]/30"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-[#374151]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-[#e5e7eb] bg-gray-50 px-4 py-3 text-sm text-[#111827] placeholder:text-[#9ca3af] focus:border-[#259A9E] focus:outline-none focus:ring-1 focus:ring-[#259A9E]/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-[#374151]">
                    Service Interested In
                  </label>
                  <input
                    type="text"
                    placeholder="Therapy / Counseling / Psychiatry"
                    className="w-full rounded-lg border border-[#e5e7eb] bg-gray-50 px-4 py-3 text-sm text-[#111827] placeholder:text-[#9ca3af] focus:border-[#259A9E] focus:outline-none focus:ring-1 focus:ring-[#259A9E]/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-[#374151]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-lg border border-[#e5e7eb] bg-gray-50 px-4 py-3 text-sm text-[#111827] placeholder:text-[#9ca3af] focus:border-[#259A9E] focus:outline-none focus:ring-1 focus:ring-[#259A9E]/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#259A9E] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e7a7d]"
                >
                  {submitted ? "Message Sent ✓" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
