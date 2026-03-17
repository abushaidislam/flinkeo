"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-(--border) last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-(--text-primary) group-hover:text-(--text-link) transition-colors pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-(--text-muted) shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-(--text-secondary) leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  // Group FAQs by category
  const groupedFAQs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);
  
  const categories = Object.keys(groupedFAQs).sort();
  
  if (faqs.length === 0) {
    return (
      <div className="text-center py-12">
        <HelpCircle className="w-12 h-12 text-(--text-muted) mx-auto mb-4" />
        <p className="text-(--text-muted)">
          No FAQs available at the moment.
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-sm font-medium text-(--text-muted) uppercase tracking-wider mb-4">
            {category}
          </h3>
          <div className="bg-(--surface) border border-(--border) rounded-2xl px-6">
            {groupedFAQs[category].map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
