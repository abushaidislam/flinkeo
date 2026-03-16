import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";

export const metadata = {
  title: "About | Flinkeo — Modern Web Systems",
  description:
    "Learn more about Flinkeo’s calm, precise, and durable approach to modern web systems.",
};

export default function AboutPage() {
  return (
    <Frame>
      <Navbar />
      <main>
        <PanelSection>
          <About />
        </PanelSection>
        <div className="border-t border-[color:var(--border)]">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}

