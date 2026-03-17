import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

interface Work {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  short_description: string;
  cover_image: string;
  featured: boolean;
}

async function getWorks(): Promise<Work[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("works")
    .select("id, title, slug, client, category, short_description, cover_image, featured")
    .eq("published", true)
    .order("order_index", { ascending: true });
  
  return data || [];
}

export const metadata = {
  title: "Work | Flinkeo — Modern Web Systems",
  description: "Explore our portfolio of premium web design, development, and branding projects.",
};

export default async function WorkPage() {
  const works = await getWorks();
  
  return (
    <Frame>
      <Navbar />
      <main>
        <PanelSection>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--text-primary) mb-4">
                Selected Work
              </h1>
              <p className="text-xl text-(--text-secondary) max-w-2xl mx-auto">
                A curated collection of projects that showcase our commitment to calm, precise, and durable design.
              </p>
            </div>
            
            {/* Works Grid */}
            {works.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {works.map((work) => (
                  <Link
                    key={work.id}
                    href={`/work/${work.slug}`}
                    className="group block"
                  >
                    <article className="relative">
                      {/* Image */}
                      <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 bg-(--surface)">
                        <Image
                          src={work.cover_image}
                          alt={work.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-(--text-muted)">
                            {work.category}
                          </span>
                          {work.client && (
                            <>
                              <span className="text-(--border)">•</span>
                              <span className="text-(--text-muted)">
                                {work.client}
                              </span>
                            </>
                          )}
                        </div>
                        
                        <h2 className="text-xl font-medium text-(--text-primary) group-hover:text-(--text-link) transition-colors">
                          {work.title}
                        </h2>
                        
                        <p className="text-(--text-secondary) text-sm line-clamp-2">
                          {work.short_description}
                        </p>
                        
                        <div className="flex items-center gap-1 text-sm text-(--text-link) pt-2">
                          <span>View project</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-(--text-muted)">
                  No projects to display yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </PanelSection>
        
        <div className="border-t border-(--border)">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}
