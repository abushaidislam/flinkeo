import { ButtonLink, Card } from "@/components/site/Primitives";

function MiniDocCard({
  title,
  meta,
  note,
}: {
  title: string;
  meta: string;
  note: string;
}) {
  return (
    <Card className="p-4">
      <div className="grid gap-2">
        <div className="flex items-start justify-between gap-4">
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[color:var(--textMuted)]">
            {meta}
          </div>
          <div className="h-2 w-2 border border-[color:var(--border)]" aria-hidden />
        </div>
        <div className="text-[14px] font-semibold tracking-[-0.01em] text-[color:var(--text)]">
          {title}
        </div>
        <div className="text-[12px] leading-relaxed text-[color:var(--textSecondary)]">
          {note}
        </div>
      </div>
    </Card>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="px-6 pt-12 pb-12 sm:px-10 sm:pt-14 sm:pb-14 lg:px-12 lg:pt-16 lg:pb-16"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="grid content-start gap-8">
            <div className="grid gap-5">
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                Premium web design agency
              </div>
              <h1 className="text-[color:var(--text)] font-semibold tracking-[-0.035em] leading-[1.02] text-[clamp(40px,5vw,64px)]">
                Portfolio,
                <br />
                <span className="inline-block border-b-4 border-[color:var(--accent)] pb-1">
                  company, and docs
                </span>{" "}
                websites
                <br />
                built with clarity
              </h1>
              <p className="max-w-[60ch] text-[15px] leading-[1.7] text-[color:var(--textSecondary)]">
                Flinkeo designs and builds premium portfolio websites, company
                sites, documentation systems, and product showcases with calm
                structure, responsive execution, and clean performance.
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

            <div className="grid gap-3 pt-4">
              <div className="flex items-center justify-between gap-6 border-t border-[color:var(--border)] pt-4">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                  Principles
                </div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                  Precision / Restraint / Structure
                </div>
              </div>

              <svg
                className="h-14 w-full"
                viewBox="0 0 820 90"
                fill="none"
                aria-hidden
              >
                <path
                  d="M10 70H280L320 18H520L560 70H810"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <path
                  d="M280 70V42H320V18"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <path
                  d="M520 18V42H560V70"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <circle cx="320" cy="18" r="3" fill="var(--accent)" />
                <circle cx="520" cy="18" r="3" fill="var(--accent)" />
              </svg>
            </div>
          </div>

          <div className="grid content-start gap-4">
            <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
              <MiniDocCard
                meta="Project File / 01"
                title="Architecture Portfolio System"
                note="A disciplined grid, quiet motion, and adaptive image handling for a studio archive."
              />
              <MiniDocCard
                meta="Project File / 02"
                title="Documentation for a Product Suite"
                note="Tokenized typography, navigation clarity, and readable density across devices."
              />
              <MiniDocCard
                meta="Project File / 03"
                title="Company Website, Reduced"
                note="Minimal surface design with confident hierarchy and crisp details."
              />
              <MiniDocCard
                meta="Specification"
                title="Design System: Panel + Card Language"
                note="A bounded layout vocabulary to scale pages without visual drift."
              />
            </div>

            <Card className="p-4">
              <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center">
                <div className="grid gap-1">
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                    Current focus
                  </div>
                  <div className="text-[13px] leading-relaxed text-[color:var(--textSecondary)]">
                    Custom website design and development for teams that need
                    strong structure, better readability, and a premium finish.
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--text)]">
                  2026
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
