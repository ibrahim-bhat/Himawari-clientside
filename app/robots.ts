import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/blog/site-url";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/content/", "/listeners/", "/counselors/", "/psychiatrists/", "/users/", "/bookings/", "/settings/", "/reports/", "/logs/", "/referrals/", "/cms/", "/sub-admin/"] },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
