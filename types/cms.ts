export type CMSPageSlug =
  | "privacy-policy"
  | "terms-conditions"
  | "onboarding"
  | "faq"
  | "about-us";

export interface CMSPage {
  slug: CMSPageSlug;
  title: string;
  content: string;
  updatedAt: string;
}
