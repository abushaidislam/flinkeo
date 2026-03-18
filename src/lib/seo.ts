import type { Metadata } from "next";

export const siteConfig = {
  name: "Flinkeo",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://flinkeo.vercel.app",
  defaultTitle:
    "Premium Web Design Agency for Portfolio, Company & Documentation Sites",
  description:
    "Flinkeo designs and builds premium portfolio websites, company sites, documentation systems, and product showcases with calm structure, responsive execution, and clean performance.",
  googleVerificationDnsValue:
    "google-site-verification=HG1-F32iR40pXCHwFDYyDxekuAc0hfbKZaWm0YN26RQ",
  contactEmail: "hello@flinkeo.online",
  keywords: [
    "web design agency",
    "website development agency",
    "portfolio website design",
    "company website design agency",
    "documentation website design",
    "product showcase website design",
    "premium web studio",
    "minimalist web design agency",
    "Next.js web design agency",
    "Tailwind website development agency",
  ],
};

export const googleVerificationToken =
  siteConfig.googleVerificationDnsValue.replace("google-site-verification=", "");

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.siteUrl).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    email: siteConfig.contactEmail,
    logo: absoluteUrl("/favicon.ico"),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contactEmail,
        availableLanguage: ["English"],
      },
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  };
}

export function getProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    areaServed: "Worldwide",
    serviceType: [
      "Portfolio website design",
      "Company website design",
      "Documentation site development",
      "Product showcase website design",
    ],
    email: siteConfig.contactEmail,
  };
}
