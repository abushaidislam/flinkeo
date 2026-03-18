import {
  ArrowUpRight,
  Blocks,
  BookOpenText,
  LayoutTemplate,
  MonitorSmartphone,
  Orbit,
  PencilRuler,
  Sparkles,
  Workflow,
} from "lucide-react";
import { ButtonLink, Card } from "@/components/site/Primitives";

const capabilityGroups = [
  {
    title: "Services",
    items: ["Portfolio websites", "Company sites", "Documentation systems"],
  },
  {
    title: "Structure",
    items: ["Editorial hierarchy", "Navigation systems", "Conversion paths"],
  },
  {
    title: "Delivery",
    items: ["Responsive execution", "Fast pages", "Durable handoff"],
  },
];

const proofCards = [
  {
    title: "Navigation-led layouts",
    note: "Inspired by layered product menus, reworked for a calmer editorial studio presence.",
    icon: Blocks,
  },
  {
    title: "Responsive page systems",
    note: "Desktop structure and mobile clarity designed together instead of patched later.",
    icon: MonitorSmartphone,
  },
  {
    title: "Content-ready architecture",
    note: "Built for portfolios, capability pages, case studies, and documentation growth.",
    icon: BookOpenText,
  },
];

const statCards = [
  {
    label: "Focus",
    value: "Portfolio / Company / Docs",
  },
  {
    label: "Approach",
    value: "Precision / Restraint / Structure",
  },
  {
    label: "Delivery",
    value: "Design + Build in One Flow",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="px-6 pt-8 pb-12 sm:px-10 sm:pt-10 sm:pb-14 lg:px-12 lg:pt-12 lg:pb-16"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid gap-6">
          <div className="overflow-hidden rounded-[32px] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(252,250,246,0.98),rgba(242,238,230,0.92))] shadow-[var(--shadowMd)]">
            <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:p-10">
              <div className="grid content-start gap-8">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:rgba(240,200,98,0.14)] px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[color:var(--text)]">
                  <Sparkles className="size-4" />
                  Prompt-inspired direction
                </div>

                <div className="grid gap-5">
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                    Premium web design agency
                  </div>
                  <h1 className="text-[color:var(--text)] font-semibold tracking-[-0.04em] leading-[0.98] text-[clamp(42px,5vw,72px)]">
                    Navigation-led
                    <br />
                    websites with a
                    <br />
                    <span className="inline-block border-b-4 border-[color:var(--accent)] pb-1">
                      sharper opening move
                    </span>
                  </h1>
                  <p className="max-w-[61ch] text-[15px] leading-[1.8] text-[color:var(--textSecondary)]">
                    Flinkeo designs portfolio sites, company websites, and
                    documentation systems that feel structured from the first
                    screen. This hero reworks the layered menu language from
                    your prompt into a calmer, premium agency presentation.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href="#work" variant="primary">
                    View Selected Work
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    Start a Project
                  </ButtonLink>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {statCards.map((card) => (
                    <Card key={card.label} className="p-4">
                      <div className="grid gap-2">
                        <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                          {card.label}
                        </div>
                        <div className="text-[13px] leading-relaxed text-[color:var(--text)]">
                          {card.value}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="grid content-start gap-4">
                <Card className="relative min-h-[380px] overflow-hidden border-[color:rgba(224,215,204,0.88)] bg-[color:var(--text)] p-0 text-[color:var(--panel)]">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-65"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80')",
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,19,16,0.14),rgba(22,19,16,0.82))]" />
                  <div className="relative grid h-full content-between gap-10 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-white/88 backdrop-blur-sm">
                        Hero concept / 2026
                      </div>
                      <Orbit className="size-5 text-white/80" />
                    </div>

                    <div className="grid gap-4">
                      <div className="max-w-[28ch] text-[28px] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                        A first screen built like a confident product surface.
                      </div>
                      <div className="max-w-[36ch] text-[14px] leading-relaxed text-white/74">
                        Layered content blocks, guided actions, and quiet visual
                        contrast create immediate orientation without clutter.
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid gap-4 md:grid-cols-3">
                  {proofCards.map((card) => (
                    <Card
                      key={card.title}
                      className="h-full border-[color:rgba(224,215,204,0.88)] bg-[color:rgba(252,250,246,0.86)] p-4"
                    >
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="grid size-11 place-items-center rounded-[14px] border border-[color:var(--border)] bg-[color:rgba(240,200,98,0.16)]">
                            <card.icon className="size-5 text-[color:var(--text)]" />
                          </div>
                          <ArrowUpRight className="size-4 text-[color:var(--textMuted)]" />
                        </div>
                        <div className="grid gap-2">
                          <div className="text-[14px] font-semibold tracking-[-0.02em] text-[color:var(--text)]">
                            {card.title}
                          </div>
                          <p className="text-[12px] leading-relaxed text-[color:var(--textSecondary)]">
                            {card.note}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="p-6">
              <div className="grid gap-5">
                <div className="flex items-center justify-between gap-4 border-b border-[color:var(--border)] pb-4">
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                      Dropdown logic, adapted
                    </div>
                    <div className="mt-2 text-[20px] font-semibold tracking-[-0.02em] text-[color:var(--text)]">
                      Structured content clusters instead of generic hero filler
                    </div>
                  </div>
                  <Workflow className="hidden size-5 text-[color:var(--textMuted)] sm:block" />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {capabilityGroups.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-[18px] border border-[color:var(--border)] bg-[color:var(--panel)] p-4"
                    >
                      <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                        {group.title}
                      </div>
                      <ul className="mt-4 space-y-3">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-[13px] leading-relaxed text-[color:var(--textSecondary)]"
                          >
                            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="relative overflow-hidden p-5">
                <div
                  className="absolute inset-0 opacity-18"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <div className="relative grid gap-6">
                  <LayoutTemplate className="size-5 text-[color:var(--text)]" />
                  <div className="grid gap-2">
                    <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                      Visual language
                    </div>
                    <div className="text-[16px] font-semibold tracking-[-0.02em] text-[color:var(--text)]">
                      Layered cards, warm contrast, and deliberate spacing.
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-5">
                <div className="grid gap-6">
                  <PencilRuler className="size-5 text-[color:var(--text)]" />
                  <div className="grid gap-2">
                    <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                      Build intent
                    </div>
                    <div className="text-[16px] font-semibold tracking-[-0.02em] text-[color:var(--text)]">
                      A component-ready direction that can scale into service,
                      work, and docs pages.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
