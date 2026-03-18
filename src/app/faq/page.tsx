import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FAQSection } from "@/components/ui/faqsection";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

async function getFAQs(): Promise<FAQ[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("faqs")
    .select("*")
    .eq("published", true)
    .order("order_index", { ascending: true });

  return data || [];
}

export const metadata = createPageMetadata({
  title: "Web Design FAQ",
  description:
    "Find answers to common questions about Flinkeo's web design services, process, timelines, integrations, and support.",
  path: "/faq",
  keywords: [
    "web design faq",
    "custom website questions",
    "website agency process",
  ],
});

export default async function FAQPage() {
  const faqs = await getFAQs();
  const faqsLeft = faqs.filter((_, index) => index % 2 === 0);
  const faqsRight = faqs.filter((_, index) => index % 2 === 1);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
      url: absoluteUrl("/faq"),
    })),
  };

  return (
    <Frame>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
        <PanelSection>
          <div className="grid gap-8">
            <FAQSection
              title="Answers for planning, process, and handoff"
              subtitle="Frequently Asked Questions"
              description="A cleaner overview of how Flinkeo approaches website projects, timelines, revisions, documentation work, and delivery expectations."
              buttonLabel="Start a Project"
              buttonHref="/contact"
              faqsLeft={faqsLeft}
              faqsRight={faqsRight}
            />

            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:rgba(252,250,246,0.88)] p-6 shadow-[var(--shadowSm)]">
                <div className="grid gap-4">
                  <div className="inline-flex w-fit rounded-full border border-[color:var(--border)] bg-[color:rgba(240,200,98,0.14)] px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[color:var(--textMuted)]">
                    Need a direct answer?
                  </div>
                  <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[color:var(--text)]">
                    If your question is project-specific, send the brief.
                  </h2>
                  <p className="max-w-[58ch] text-[15px] leading-[1.8] text-[color:var(--textSecondary)]">
                    The FAQ covers the common cases. If you need clarity on your
                    own site scope, content structure, or design direction, the
                    contact page is the faster route.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(242,238,230,0.9),rgba(252,250,246,0.94))] p-6 shadow-[var(--shadowSm)]">
                <div className="grid h-full gap-6">
                  <MessageCircle className="size-10 text-[color:var(--textMuted)]" />
                  <div className="grid gap-3">
                    <h3 className="text-[22px] font-semibold tracking-[-0.025em] text-[color:var(--text)]">
                      Still have questions?
                    </h3>
                    <p className="text-[14px] leading-[1.75] text-[color:var(--textSecondary)]">
                      Reach out with your timeline, goals, or current website
                      issues and we will tell you what the next step should be.
                    </p>
                  </div>
                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--text)] bg-[color:var(--text)] px-5 py-3 text-[12px] font-semibold tracking-[0.14em] uppercase text-[color:var(--panel)] transition-colors hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--text)]"
                    >
                      Contact Flinkeo
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PanelSection>

        <div className="border-t border-(--border)">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}
