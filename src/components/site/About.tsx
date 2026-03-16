import { Card, SectionTitle } from "@/components/site/Primitives";

const points = [
  {
    title: "Minimalist design, not empty design",
    desc: "Restraint is a tool: clear hierarchy, intentional spacing, and a disciplined reading experience.",
  },
  {
    title: "Structured web systems",
    desc: "We build reusable page patterns and component language that scale without visual drift.",
  },
  {
    title: "Responsive execution",
    desc: "Grids are designed across breakpoints. Typography is tuned for legibility and rhythm.",
  },
  {
    title: "Clean architecture",
    desc: "Careful semantics, performance-minded implementation, and maintainable structure.",
  },
];

export function About() {
  return (
    <div className="grid gap-8" id="about">
      <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
        <SectionTitle
          eyebrow="Approach"
          title="Calm, precise, and built to last."
          description="We treat the homepage as the first page of a publication. The system matters as much as the surface."
        />
        <div className="md:justify-self-end text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
          Index / 04
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="grid gap-4 md:grid-cols-2">
          {points.map((p) => (
            <Card key={p.title} className="p-5">
              <div className="grid gap-2">
                <div className="text-[14px] font-semibold tracking-[-0.01em] text-[color:var(--text)]">
                  {p.title}
                </div>
                <div className="text-[13px] leading-relaxed text-[color:var(--textSecondary)]">
                  {p.desc}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-5">
          <div className="grid gap-4">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
              Working format
            </div>
            <div className="grid gap-3">
              <div className="flex items-start justify-between gap-6">
                <div className="text-[13px] text-[color:var(--textSecondary)]">
                  Discovery → layout system → build → polish.
                </div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                  2–6 weeks
                </div>
              </div>
              <div className="border-t border-[color:var(--border)]" />
              <div className="flex items-start justify-between gap-6">
                <div className="text-[13px] text-[color:var(--textSecondary)]">
                  Tailwind-first styling with a bespoke design language.
                </div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                  Next.js
                </div>
              </div>
              <div className="border-t border-[color:var(--border)]" />
              <div className="flex items-start justify-between gap-6">
                <div className="text-[13px] text-[color:var(--textSecondary)]">
                  Accessibility and performance as baseline constraints.
                </div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                  WCAG
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

