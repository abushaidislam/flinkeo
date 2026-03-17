import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock } from "lucide-react";
import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

interface Work {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge?: string;
  solution?: string;
  results?: string;
  cover_image: string;
  gallery_images?: string[];
  services?: string[];
  technologies?: string[];
  website_url?: string;
  github_url?: string;
  completion_date?: string;
  duration?: string;
}

async function getWork(slug: string): Promise<Work | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("works")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  
  return data;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = await getWork(slug);
  
  if (!work) {
    return {
      title: "Work Not Found | Flinkeo",
    };
  }
  
  return {
    title: `${work.title} | Flinkeo`,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = await getWork(slug);
  
  if (!work) {
    notFound();
  }
  
  return (
    <Frame>
      <Navbar />
      <main>
        <PanelSection>
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--text-primary) transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all work
            </Link>
            
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 text-sm text-(--text-muted) mb-4">
                <span className="px-3 py-1 rounded-full bg-(--surface) border border-(--border)">
                  {work.category}
                </span>
                {work.client && <span>for {work.client}</span>}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--text-primary) mb-4">
                {work.title}
              </h1>
              
              <p className="text-xl text-(--text-secondary)">
                {work.description}
              </p>
              
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-(--text-muted)">
                {work.completion_date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(work.completion_date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                )}
                {work.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {work.duration}
                  </div>
                )}
              </div>
              
              {/* Links */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                {work.website_url && (
                  <a
                    href={work.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-(--text-primary) text-(--background) rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Site
                  </a>
                )}
                {work.github_url && (
                  <a
                    href={work.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-(--border) rounded-lg text-sm font-medium hover:bg-(--surface) transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
            
            {/* Cover Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
              <Image
                src={work.cover_image}
                alt={work.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Content Grid */}
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-10">
                {work.challenge && (
                  <div>
                    <h2 className="text-xl font-semibold text-(--text-primary) mb-3">
                      The Challenge
                    </h2>
                    <p className="text-(--text-secondary) leading-relaxed">
                      {work.challenge}
                    </p>
                  </div>
                )}
                
                {work.solution && (
                  <div>
                    <h2 className="text-xl font-semibold text-(--text-primary) mb-3">
                      Our Solution
                    </h2>
                    <p className="text-(--text-secondary) leading-relaxed">
                      {work.solution}
                    </p>
                  </div>
                )}
                
                {work.results && (
                  <div>
                    <h2 className="text-xl font-semibold text-(--text-primary) mb-3">
                      Results
                    </h2>
                    <p className="text-(--text-secondary) leading-relaxed">
                      {work.results}
                    </p>
                  </div>
                )}
                
                {/* Gallery */}
                {work.gallery_images && work.gallery_images.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-(--text-primary) mb-4">
                      Gallery
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {work.gallery_images.map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-video rounded-xl overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt={`${work.title} - Image ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-8">
                {work.services && work.services.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-(--text-muted) uppercase tracking-wider mb-3">
                      Services
                    </h3>
                    <ul className="space-y-2">
                      {work.services.map((service, index) => (
                        <li
                          key={index}
                          className="text-(--text-secondary)"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {work.technologies && work.technologies.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-(--text-muted) uppercase tracking-wider mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-(--surface) border border-(--border) rounded-full text-(--text-secondary)"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </PanelSection>
        
        <div className="border-t border-(--border)">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}
