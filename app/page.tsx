import { getCachedPublishedPosts } from "@/lib/blog/cached-posts";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import DoctorsSection from "@/components/landing/DoctorsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhyChooseUsSection from "@/components/landing/WhyChooseUsSection";
import BlogSection from "@/components/landing/BlogSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ServicesPackageSection from "@/components/landing/ServicesPackageSection";
import CTASection from "@/components/landing/CTASection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

export default async function HomePage() {
  let posts: Awaited<ReturnType<typeof getCachedPublishedPosts>> = [];
  try {
    posts = await getCachedPublishedPosts();
  } catch {
    // Blog API may be unconfigured; BlogSection handles empty state
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <BlogSection posts={posts} />
        <TestimonialsSection />
        <ServicesPackageSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
