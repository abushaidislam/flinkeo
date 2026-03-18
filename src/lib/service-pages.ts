export type ServicePageData = {
  slug: string;
  name: string;
  keyword: string;
  shortDescription: string;
  heroDescription: string;
  idealFor: string[];
  deliverables: string[];
  outcomes: string[];
  process: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const servicePages: ServicePageData[] = [
  {
    slug: "portfolio-websites",
    name: "Portfolio Websites",
    keyword: "portfolio website design",
    shortDescription:
      "Portfolio website design with gallery-led layouts, disciplined grids, image handling, and quiet hierarchy.",
    heroDescription:
      "Custom portfolio websites for architects, creatives, founders, and studios that need stronger presentation, cleaner navigation, and a premium finish.",
    idealFor: [
      "Architecture and interior studios",
      "Creative professionals with visual work",
      "Personal brands that need a strong first impression",
    ],
    deliverables: [
      "Custom homepage and work index",
      "Project detail page system",
      "Responsive image handling and typography",
      "Contact and inquiry flow",
    ],
    outcomes: [
      "Clearer presentation of selected work",
      "Higher trust from premium clients",
      "Better conversion from portfolio traffic",
    ],
    process: [
      "Audit the current portfolio and content gaps",
      "Build a visual hierarchy around projects and proof",
      "Develop the site in Next.js with responsive testing",
      "Polish content, metadata, and launch details",
    ],
    faqs: [
      {
        question: "Who is this service best for?",
        answer:
          "It fits creative professionals and studios that need a portfolio site that feels premium, readable, and easy to update.",
      },
      {
        question: "Can you migrate an existing portfolio?",
        answer:
          "Yes. Existing projects, images, and copy can be restructured into a cleaner content system without losing core material.",
      },
    ],
  },
  {
    slug: "company-websites",
    name: "Company Websites",
    keyword: "company website design agency",
    shortDescription:
      "Company website design with reduced surfaces and confident narrative structure that stays premium, readable, and precise.",
    heroDescription:
      "Custom company websites for service businesses, startups, and modern brands that need a clearer offer, sharper messaging, and stronger conversion paths.",
    idealFor: [
      "Startups preparing for growth",
      "Service businesses with weak positioning",
      "Teams replacing generic website templates",
    ],
    deliverables: [
      "Homepage, service, and company pages",
      "Conversion-focused calls to action",
      "SEO metadata and structured page hierarchy",
      "CMS-ready content patterns when needed",
    ],
    outcomes: [
      "Stronger positioning in search and sales",
      "Clearer user paths from landing to inquiry",
      "More confidence from high-intent visitors",
    ],
    process: [
      "Clarify messaging, offer, and audience",
      "Map page structure and conversion goals",
      "Design and build responsive page templates",
      "Refine launch details, SEO, and quality checks",
    ],
    faqs: [
      {
        question: "Do you write the website copy too?",
        answer:
          "We can refine positioning, headlines, and section structure, then work from your source material or draft supporting copy with you.",
      },
      {
        question: "Can the site grow with new pages later?",
        answer:
          "Yes. The system is built with reusable page patterns so you can expand services, case studies, and resources over time.",
      },
    ],
  },
  {
    slug: "documentation-sites",
    name: "Documentation Sites",
    keyword: "documentation site development",
    shortDescription:
      "Documentation site development with strong information architecture and durable content patterns.",
    heroDescription:
      "Documentation sites for product teams and service businesses that need cleaner navigation, durable page templates, and readable technical content.",
    idealFor: [
      "Product teams with growing docs",
      "Internal systems that need structure",
      "Brands publishing guides, frameworks, or knowledge bases",
    ],
    deliverables: [
      "Documentation information architecture",
      "Searchable content layout and nav design",
      "Reusable article and category templates",
      "Performance-minded implementation",
    ],
    outcomes: [
      "Faster content discovery",
      "Lower friction for onboarding and support",
      "A docs system that stays legible as it grows",
    ],
    process: [
      "Review current documentation gaps and user flows",
      "Group content into scalable sections",
      "Design templates for guides, references, and updates",
      "Ship a durable system with clean semantics",
    ],
    faqs: [
      {
        question: "Can you handle both public and internal docs?",
        answer:
          "Yes. The same structural approach can be adapted for public documentation or internal knowledge systems.",
      },
      {
        question: "Do you support migration from existing docs tools?",
        answer:
          "Yes. We can map current content into a cleaner structure and preserve the useful material while reducing clutter.",
      },
    ],
  },
  {
    slug: "product-showcases",
    name: "Product Showcases",
    keyword: "product showcase website design",
    shortDescription:
      "Product showcase website design with structured presentation, calm interaction, and clarity-first detail.",
    heroDescription:
      "Product showcase websites for teams that need to explain features, communicate trust, and present a product with more clarity and less noise.",
    idealFor: [
      "Software products with weak marketing sites",
      "Launch pages that need stronger hierarchy",
      "Teams introducing a product, platform, or system",
    ],
    deliverables: [
      "Landing page and feature storytelling",
      "Product section hierarchy and content flow",
      "Visual system for screenshots and proof",
      "CTA paths for demo, inquiry, or signup",
    ],
    outcomes: [
      "Clearer product understanding",
      "Stronger conversion from product traffic",
      "A more confident launch surface",
    ],
    process: [
      "Clarify the product story and audience",
      "Structure feature blocks, proof, and CTA flow",
      "Build a calm presentation layer around the product",
      "Refine performance, readability, and launch details",
    ],
    faqs: [
      {
        question: "Is this only for SaaS products?",
        answer:
          "No. It works for digital products, systems, tools, or any offering that needs clear explanation and stronger presentation.",
      },
      {
        question: "Can you use our existing screenshots and assets?",
        answer:
          "Yes. Existing screenshots, diagrams, and UI captures can be reworked into a more structured product narrative.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug) || null;
}
