import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Services } from "@/components/site/Services";
import { Footer } from "@/components/site/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Website Design & Development Services",
  description:
    "Explore Flinkeo's services for portfolio websites, company sites, documentation systems, and product showcases built with precise structure and responsive execution.",
  path: "/services",
  keywords: [
    "website design services",
    "portfolio website design",
    "documentation site development",
    "product showcase website design",
  ],
});

export default function ServicesPage() {
  return (
    <Frame>
      <Navbar />
      <main>
        <PanelSection>
          <Services />
        </PanelSection>
        <div className="border-t border-[color:var(--border)]">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}
