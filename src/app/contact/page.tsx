import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { FinalCta } from "@/components/site/FinalCta";
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
        <PanelSection>
          <FinalCta />
        </PanelSection>
        <div className="border-t border-[color:var(--border)]">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}
