import type { MetadataRoute } from "next";
import { novaProducts, services } from "@/lib/site-content";

function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (explicitUrl) {
    return explicitUrl.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const staticRoutes = [
    "",
    "/contact",
    "/pricing",
    "/privacy-policy",
    "/privacy",
    "/process",
    "/products",
    "/refer",
    "/refund-policy",
    "/terms",
    "/terms-of-service",
    "/work",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
    })),
    ...novaProducts.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified: new Date(),
    })),
  ];
}
