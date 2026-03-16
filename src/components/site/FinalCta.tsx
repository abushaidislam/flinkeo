import { ButtonLink, Card } from "@/components/site/Primitives";
import { ContactForm } from "@/components/site/ContactForm";

export function FinalCta() {
  return (
    <div className="grid gap-6" id="contact">
      <Card className="p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="grid gap-3">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
              Next step
            </div>
            <div className="text-[22px] leading-tight font-semibold tracking-[-0.02em] uppercase text-[color:var(--accent)] sm:text-[26px]">
              Build something
              <br />
              quiet and exact
            </div>
            <div className="max-w-[60ch] text-[14px] leading-relaxed text-[color:var(--textSecondary)]">
              If you’re looking for a premium homepage, a portfolio archive, or a
              documentation system—send a short brief. We’ll respond with a
              structured plan.
            </div>
          </div>

          <div className="grid gap-3 md:justify-self-end md:text-right">
            <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
              Email
            </div>
            <div className="text-[14px] font-semibold text-[color:var(--text)]">
              hello@flinkeo.online
            </div>
            <div className="pt-2">
              <ButtonLink href="/contact" variant="primary">
                Start a Project
              </ButtonLink>
            </div>
          </div>
        </div>
      </Card>

      <ContactForm />

      <div className="grid gap-2 text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
        Response time: typically within 1–2 business days.
      </div>
    </div>
  );
}

