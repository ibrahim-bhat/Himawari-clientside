import type { CMSPage, CMSPageSlug } from "@/types";

const mockPages: CMSPage[] = [
  { slug: "privacy-policy", title: "Privacy Policy", content: "Lorem ipsum privacy policy content...", updatedAt: "2025-01-10" },
  { slug: "terms-conditions", title: "Terms & Conditions", content: "Lorem ipsum terms content...", updatedAt: "2025-01-12" },
  { slug: "onboarding", title: "Onboarding Screens", content: "Onboarding content...", updatedAt: "2025-01-05" },
  { slug: "faq", title: "FAQ", content: "Frequently asked questions...", updatedAt: "2025-01-15" },
  { slug: "about-us", title: "About Us", content: "About our platform...", updatedAt: "2025-01-08" },
];

export function getCMSPages(): CMSPage[] {
  return [...mockPages];
}

export function getCMSPageBySlug(slug: CMSPageSlug): CMSPage | undefined {
  return mockPages.find((p) => p.slug === slug);
}

export function updateCMSPage(slug: CMSPageSlug, content: string, title?: string): CMSPage | undefined {
  const p = mockPages.find((p) => p.slug === slug);
  if (p) {
    p.content = content;
    if (title) p.title = title;
    p.updatedAt = new Date().toISOString().slice(0, 10);
  }
  return p;
}
