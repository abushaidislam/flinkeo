import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Flinkeo",
  description:
    "Contact Flinkeo to start a portfolio website, company site, documentation system, or product showcase project.",
  path: "/contact",
  keywords: [
    "contact web design agency",
    "hire website designer",
    "start a website project",
  ],
});

export default function ContactPage() {
  return (
    <Frame>
      <Navbar />
      <main>
        <PanelSection className="bg-[linear-gradient(180deg,rgba(252,250,246,0.92),rgba(246,243,236,0.78))]">
          <ContactForm />
        </PanelSection>
        <div className="border-t border-[color:var(--border)]">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}
