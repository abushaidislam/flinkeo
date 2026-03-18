import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ButtonLink, Card, SectionTitle } from "@/components/site/Primitives";
import { createPageMetadata } from "@/lib/seo";

const steps = [
  {
    title: "Discovery",
    detail:
      "We review your current site, offer, audience, and the content gaps blocking clarity or conversion.",
  },
  {
    title: "Structure",
    detail:
      "We map the page hierarchy, information architecture, and key content flow before the build starts.",
  },
  {
    title: "Build",
    detail:
      "The site is developed as a responsive system with reusable patterns, clean semantics, and stable performance.",
  },
  {
    title: "Polish",
    detail:
      "We refine content, SEO metadata, launch details, and the small decisions that make the site feel complete.",
  },
];

export const metadata = createPageMetadata({
  title: "Website Design Process",
  description:
    "Learn how Flinkeo plans, structures, builds, and polishes portfolio websites, company sites, documentation systems, and product showcases.",
  path: "/process",
  keywords: [
    "website design process",
    "custom website workflow",
    "web design agency process",
  ],
});

export default function ProcessPage() {
  return (
    <Frame>
      <Navbar />
      <main>
        <PanelSection>
          <div className="grid gap-10">
            <SectionTitle
              eyebrow="Process"
              title="A clear process for building websites that stay useful."
              description="Flinkeo keeps the workflow small, structured, and practical. Each step exists to reduce noise and improve clarity before launch."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {steps.map((step, index) => (
                <Card key={step.title} className="p-5">
                  <div className="grid gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-[16px] font-semibold text-[color:var(--text)]">
                        {step.title}
                      </div>
                      <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <p className="text-[14px] leading-relaxed text-[color:var(--textSecondary)]">
                      {step.detail}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div className="grid gap-2">
                  <h2 className="text-[20px] font-semibold text-[color:var(--text)]">
                    Typical timeline
                  </h2>
                  <p className="text-[14px] leading-relaxed text-[color:var(--textSecondary)]">
                    Most engagements move from discovery to launch in 2 to 6
                    weeks, depending on scope, content readiness, and revision
                    speed.
                  </p>
                </div>
                <ButtonLink href="/contact">Start a Project</ButtonLink>
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
