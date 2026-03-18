import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Flinkeo",
  description:
    "Learn how Flinkeo approaches premium website design, responsive execution, and durable content systems for modern brands.",
  path: "/about",
  keywords: [
    "about Flinkeo",
    "web design studio",
    "website development agency",
  ],
});

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
