import { Card, SectionTitle } from "@/components/site/Primitives";

const services = [
  {
    name: "Portfolio Websites",
    desc: "Gallery-led layouts with disciplined grids, image handling, and quiet hierarchy.",
  },
  {
    name: "Company Websites",
    desc: "Reduced surfaces and confident narrative structure—premium, readable, and precise.",
  },
  {
    name: "Documentation Sites",
    desc: "Legible systems with strong information architecture and durable content patterns.",
  },
  {
    name: "Product Showcases",
    desc: "Structured product presentation with calm interaction, built for trust and clarity.",
  },
];

export function Services() {
  return (
    <div className="grid gap-8" id="services">
      <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
        <SectionTitle
          eyebrow="Services"
          title="A small menu. Executed with depth."
          description="We keep the offering narrow to maintain precision. Each engagement is built as a system—clean, responsive, and carefully finished."
        />
        <div className="md:justify-self-end text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
          Index / 04
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s, idx) => (
          <Card key={s.name} className="p-5">
            <div className="grid gap-3">
              <div className="flex items-start justify-between gap-4">
                <div className="text-[14px] font-semibold tracking-[-0.01em] text-[color:var(--text)]">
                  {s.name}
                </div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="text-[13px] leading-relaxed text-[color:var(--textSecondary)]">
                {s.desc}
              </div>
              <div className="mt-2 border-t border-[color:var(--border)] pt-3 text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                Deliverables: structure · typography · responsive execution
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

