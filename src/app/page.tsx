import { createClient } from "@/lib/supabase/server";
import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { Ecosystem } from "@/components/site/Ecosystem";
import { TestimonialsSection } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

interface Testimonial {
  id: string;
  client_name: string;
  client_title: string;
  client_company: string;
  client_avatar?: string;
  content: string;
  rating: number;
}

async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("testimonials")
    .select("id, client_name, client_title, client_company, client_avatar, content, rating")
    .eq("published", true)
    .eq("featured", true)
    .order("order_index", { ascending: true });
  
  return data || [];
}

export default async function Home() {
  const testimonials = await getTestimonials();
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

        <TestimonialsSection testimonials={testimonials} />

        <PanelSection>
          <FinalCta />
        </PanelSection>

        <div className="border-t border-(--border)">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}
