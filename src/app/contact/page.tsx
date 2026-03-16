import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export const metadata = {
  title: "Contact | Flinkeo — Modern Web Systems",
  description:
    "Contact Flinkeo to start a calm, precise, and premium web project tailored to your needs.",
};

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

