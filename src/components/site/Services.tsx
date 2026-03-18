import { Card, SectionTitle } from "@/components/site/Primitives";

const services = [
  {
    name: "Portfolio Websites",
    desc: "Portfolio website design with gallery-led layouts, disciplined grids, image handling, and quiet hierarchy.",
  },
  {
    name: "Company Websites",
    desc: "Company website design with reduced surfaces and confident narrative structure that stays premium, readable, and precise.",
  },
  {
    name: "Documentation Sites",
    desc: "Documentation site development with strong information architecture and durable content patterns.",
  },
  {
    name: "Product Showcases",
    desc: "Product showcase website design with structured presentation, calm interaction, and clarity-first detail.",
  },
];

export function Services() {
  return (
    <div className="grid gap-8" id="services">
      <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
        <SectionTitle
          eyebrow="Services"
          title="Website design services with depth, not bloat."
          description="We keep the service list narrow to maintain precision. Each website is built as a system: clean, responsive, fast, and carefully finished."
        />
        <div className="md:justify-self-end text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
          Index / 04
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <Card key={service.name} className="p-5">
            <div className="grid gap-3">
              <div className="flex items-start justify-between gap-4">
                <div className="text-[14px] font-semibold tracking-[-0.01em] text-[color:var(--text)]">
                  {service.name}
                </div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="text-[13px] leading-relaxed text-[color:var(--textSecondary)]">
                {service.desc}
              </div>
              <div className="mt-2 border-t border-[color:var(--border)] pt-3 text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                Deliverables: structure / typography / responsive execution
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
