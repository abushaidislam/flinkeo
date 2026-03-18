import { notFound } from "next/navigation";
import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ButtonLink, Card, InlineLink } from "@/components/site/Primitives";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { getServicePage, servicePages } from "@/lib/service-pages";

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return createPageMetadata({
      title: "Service Not Found",
      description: "The service page you requested is not available.",
      path: `/services/${slug}`,
    });
  }

  return createPageMetadata({
    title: service.name,
    description: service.heroDescription,
    path: `/services/${service.slug}`,
    keywords: [service.keyword, service.name.toLowerCase()],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.keyword,
    description: service.heroDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@type": "ProfessionalService",
      name: "Flinkeo",
      url: absoluteUrl("/"),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: absoluteUrl(`/services/${service.slug}`),
      },
    ],
  };

  return (
    <Frame>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />

        <PanelSection>
          <div className="grid gap-10">
            <div className="grid gap-4">
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                Service
              </div>
              <h1 className="text-[32px] leading-tight font-semibold tracking-[-0.03em] text-[color:var(--text)] md:text-[46px]">
                {service.name}
              </h1>
              <p className="max-w-[72ch] text-[16px] leading-relaxed text-[color:var(--textSecondary)]">
                {service.heroDescription}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/contact">Start a Project</ButtonLink>
                <ButtonLink href="/work" variant="secondary">
                  View Work
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-5 md:col-span-1">
                <div className="grid gap-3">
                  <h2 className="text-[18px] font-semibold text-[color:var(--text)]">
                    Ideal for
                  </h2>
                  <ul className="grid gap-2 text-[14px] leading-relaxed text-[color:var(--textSecondary)]">
                    {service.idealFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="p-5 md:col-span-2">
                <div className="grid gap-3">
                  <h2 className="text-[18px] font-semibold text-[color:var(--text)]">
                    What is included
                  </h2>
                  <div className="grid gap-2 md:grid-cols-2 text-[14px] leading-relaxed text-[color:var(--textSecondary)]">
                    {service.deliverables.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-5">
                <div className="grid gap-3">
                  <h2 className="text-[18px] font-semibold text-[color:var(--text)]">
                    Outcomes
                  </h2>
                  <ul className="grid gap-2 text-[14px] leading-relaxed text-[color:var(--textSecondary)]">
                    {service.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="p-5">
                <div className="grid gap-3">
                  <h2 className="text-[18px] font-semibold text-[color:var(--text)]">
                    Workflow
                  </h2>
                  <ol className="grid gap-2 text-[14px] leading-relaxed text-[color:var(--textSecondary)]">
                    {service.process.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                  <InlineLink href="/process">See the full process</InlineLink>
                </div>
              </Card>
            </div>

            <Card className="p-5">
              <div className="grid gap-4">
                <h2 className="text-[18px] font-semibold text-[color:var(--text)]">
                  Frequently asked questions
                </h2>
                <div className="grid gap-4">
                  {service.faqs.map((faq) => (
                    <div key={faq.question} className="grid gap-1">
                      <h3 className="text-[15px] font-semibold text-[color:var(--text)]">
                        {faq.question}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-[color:var(--textSecondary)]">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </PanelSection>

        <div className="border-t border-(--border)">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}
