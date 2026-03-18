"use client";

import Link from "next/link";
import { ArrowUpRight, HelpCircle, MessageSquareText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  faqsLeft: FAQItem[];
  faqsRight: FAQItem[];
  className?: string;
}

function FAQColumn({
  items,
  columnIndex,
}: {
  items: FAQItem[];
  columnIndex: number;
}) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((faq, index) => (
        <AccordionItem
          key={`${faq.question}-${index}`}
          value={`item-${columnIndex}-${index}`}
          className="overflow-hidden rounded-[20px] border border-[color:var(--border)] bg-[color:rgba(252,250,246,0.92)] px-5 last:border-b"
        >
          <AccordionTrigger className="py-5 text-[16px] font-semibold tracking-[-0.02em]">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-[14px] leading-[1.75] text-[color:var(--textSecondary)]">
            <div className="grid gap-4">
              {faq.category ? (
                <div className="inline-flex w-fit rounded-full border border-[color:var(--border)] bg-[color:rgba(240,200,98,0.14)] px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-[color:var(--textMuted)]">
                  {faq.category}
                </div>
              ) : null}
              <div>{faq.answer}</div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FAQSection({
  title = "Product & Account Help",
  subtitle = "Frequently Asked Questions",
  description = "Get instant answers to the most common questions about your account, product setup, and updates.",
  buttonLabel = "Browse All FAQs",
  buttonHref = "/contact",
  onButtonClick,
  faqsLeft,
  faqsRight,
  className,
}: FAQSectionProps) {
  const hasFaqs = faqsLeft.length > 0 || faqsRight.length > 0;

  return (
    <section className={cn("mx-auto w-full max-w-[1200px]", className)}>
      <div className="overflow-hidden rounded-[32px] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(252,250,246,0.98),rgba(242,238,230,0.88))] shadow-[var(--shadowMd)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="grid gap-5">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:rgba(240,200,98,0.14)] px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[color:var(--text)]">
                <HelpCircle className="size-4" />
                {subtitle}
              </div>
              <div className="grid gap-4">
                <h1 className="max-w-[12ch] text-[clamp(36px,5vw,58px)] font-semibold leading-[0.98] tracking-[-0.045em] text-[color:var(--text)]">
                  {title}
                </h1>
                <p className="max-w-[56ch] text-[15px] leading-[1.8] text-[color:var(--textSecondary)]">
                  {description}
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
              <div className="rounded-[22px] border border-[color:var(--border)] bg-[color:rgba(252,250,246,0.84)] p-5">
                <div className="grid gap-3">
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
                    Support scope
                  </div>
                  <p className="text-[14px] leading-[1.75] text-[color:var(--textSecondary)]">
                    Answers around process, timelines, handoff, revisions,
                    documentation structure, and how projects are scoped.
                  </p>
                </div>
              </div>

              {onButtonClick ? (
                <Button
                  variant="default"
                  className="rounded-full px-5"
                  onClick={onButtonClick}
                >
                  {buttonLabel}
                  <ArrowUpRight className="size-4" />
                </Button>
              ) : (
                <Button asChild variant="default" className="rounded-full px-5">
                  <Link href={buttonHref}>
                    {buttonLabel}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {hasFaqs ? (
            <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2">
              <FAQColumn items={faqsLeft} columnIndex={0} />
              <FAQColumn items={faqsRight} columnIndex={1} />
            </div>
          ) : (
            <div className="rounded-[24px] border border-[color:var(--border)] bg-[color:rgba(252,250,246,0.82)] p-8 text-center">
              <MessageSquareText className="mx-auto mb-4 size-10 text-[color:var(--textMuted)]" />
              <p className="text-[15px] text-[color:var(--textSecondary)]">
                No FAQs available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
