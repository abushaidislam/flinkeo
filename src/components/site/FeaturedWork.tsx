import { Card, InlineLink, SectionTitle } from "@/components/site/Primitives";
import { cn } from "@/lib/utils";

const work = [
  {
    title: "Kairo - Architecture Studio",
    category: "Portfolio Website",
    desc: "A gallery-like system with strict rhythm, image discipline, and calm typographic hierarchy.",
  },
  {
    title: "Ordin - Product Documentation",
    category: "Documentation Site",
    desc: "Structured navigation, semantic content, and an editorial reading experience across devices.",
  },
  {
    title: "Vanta - Company Website",
    category: "Company Website",
    desc: "Reduced surfaces, confident spacing, and a clean narrative arc with minimal interaction.",
  },
  {
    title: "Helio - Product Showcase",
    category: "Product Showcase",
    desc: "A precise presentation layer for features, tokens, and systems built for clarity, not hype.",
  },
];

export function FeaturedWork() {
  return (
    <div id="work" className="grid gap-8">
      <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
        <SectionTitle
          eyebrow="Selected work"
          title="Projects presented as documents: clean, deliberate, and durable."
          description="A small selection that reflects our preferred language: bounded layouts, precise hierarchy, and calm interactivity."
        />
        <div className="md:justify-self-end text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
          Index / 04
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {work.map((item, index) => (
          <Card
            key={item.title}
            className={cn(
              "p-4 md:p-5 transition-colors",
              "hover:border-[color:var(--text)] hover:bg-[color:var(--panel)]",
            )}
          >
            <div className="grid gap-4">
              <div className="aspect-[16/9] border border-[color:var(--border)] bg-[color:var(--panel)]" />

              <div className="grid gap-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                    {item.category}
                  </div>
                  <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="text-[15px] font-semibold tracking-[-0.01em] text-[color:var(--text)]">
                  {item.title}
                </div>
                <div className="text-[13px] leading-relaxed text-[color:var(--textSecondary)]">
                  {item.desc}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-[color:var(--border)] pt-3">
                <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                  Case studies
                </div>
                <InlineLink href="/work" className="text-[12px] text-[color:var(--text)]">
                  View all work
                </InlineLink>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
