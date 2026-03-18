"use client";

import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
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
          <Card className="px-6">
            <Accordion type="single" collapsible>
              {groupedFAQs[category].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      ))}
    </div>
  );
}
