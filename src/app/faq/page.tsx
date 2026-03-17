import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FAQAccordion } from "@/components/site/FAQAccordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

async function getFAQs(): Promise<FAQ[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("faqs")
    .select("*")
    .eq("published", true)
    .order("order_index", { ascending: true });
  
  return data || [];
}

export const metadata = {
  title: "FAQ | Flinkeo — Frequently Asked Questions",
  description: "Find answers to common questions about our services, process, and how we work.",
};

export default async function FAQPage() {
  const faqs = await getFAQs();
  
  return (
    <Frame>
      <Navbar />
      <main>
        <PanelSection>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-(--surface) border border-(--border) mb-6">
                <HelpCircle className="w-8 h-8 text-(--text-muted)" />
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--text-primary) mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-(--text-secondary) max-w-xl mx-auto">
                Find answers to common questions about our services, process, and how we work.
              </p>
            </div>
            
            {/* FAQ Accordion */}
            <FAQAccordion faqs={faqs} />
            
            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <div className="bg-(--surface) border border-(--border) rounded-2xl p-8">
                <MessageCircle className="w-10 h-10 text-(--text-muted) mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-(--text-primary) mb-2">
                  Still have questions?
                </h2>
                <p className="text-(--text-secondary) mb-6">
                  Can&apos;t find the answer you&apos;re looking for? Feel free to reach out to our team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-(--text-primary) text-(--background) rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </PanelSection>
        
        <div className="border-t border-(--border)">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}
