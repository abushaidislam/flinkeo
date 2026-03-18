import { Card, InlineLink, SectionTitle } from "@/components/site/Primitives";

const domains = [
  {
    host: "blog.flinkeo.online",
    role: "Editorial publication",
    desc: "Essays, notes, and process documentation—written with the same restraint as the work.",
  },
  {
    host: "docs.flinkeo.online",
    role: "Documentation system",
    desc: "A structured space for frameworks, patterns, and implementation guidance.",
  },
  {
    host: "taslima-hridoy.flinkeo.online",
    role: "Portfolio module",
    desc: "A personal archive presented as a clean, navigable set of artifacts and case files.",
  },
  {
    host: "laboni-adnan.flinkeo.online",
    role: "Portfolio module",
    desc: "A focused presentation layer for work—reduced, precise, and responsive.",
  },
];

export function Ecosystem() {
  return (
    <div id="blog" className="grid gap-8 scroll-mt-24">
      <div id="docs" className="sr-only" aria-hidden />
      <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
        <SectionTitle
          eyebrow="Subdomain ecosystem"
          title="A brand architecture—connected properties, consistent language."
          description="Flinkeo is designed as an ecosystem: distinct destinations, shared principles. This enables scalable publishing, documentation, and modular portfolios without visual drift."
        />
        <div className="md:justify-self-end text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
          Index / 04
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {domains.map((d) => (
          <Card key={d.host} className="p-5 hover:border-[color:var(--text)] transition-colors">
            <div className="grid gap-3">
              <div className="flex items-start justify-between gap-6">
                <div className="grid gap-1">
                  <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[color:var(--text)]">
                    {d.host}
                  </div>
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                    {d.role}
                  </div>
                </div>
                <div
                  className="mt-1 h-2 w-2 bg-[color:var(--accent)]"
                  aria-hidden
                />
              </div>

              <div className="text-[13px] leading-relaxed text-[color:var(--textSecondary)]">
                {d.desc}
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-[color:var(--border)] pt-3">
                <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                  Module
                </div>
                <InlineLink href="#contact" className="text-[12px] text-[color:var(--text)]">
                  Discuss setup
                </InlineLink>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

