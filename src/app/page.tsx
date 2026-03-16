import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { Ecosystem } from "@/components/site/Ecosystem";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <Frame>
      <Navbar />
      <main>
        <Hero />

        <PanelSection>
          <FeaturedWork />
        </PanelSection>

        <PanelSection>
          <Ecosystem />
        </PanelSection>

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
