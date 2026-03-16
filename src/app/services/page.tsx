import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Services } from "@/components/site/Services";
import { Footer } from "@/components/site/Footer";

export const metadata = {
  title: "Services | Flinkeo — Modern Web Systems",
  description:
    "Explore Flinkeo’s focused menu of services for premium websites, documentation systems, and product showcases.",
};

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

