import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string;
  category: string;
  tags: string[];
  published_at: string;
  reading_time: number;
  featured: boolean;
}

async function getArticles(): Promise<Article[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("id, title, slug, excerpt, cover_image, category, tags, published_at, reading_time, featured")
    .eq("published", true)
    .order("published_at", { ascending: false });
  
  return data || [];
}

export const metadata = {
  title: "Blog | Flinkeo — Insights on Design & Development",
  description: "Thoughts on calm design, modern web development, and building digital experiences that last.",
};

export default async function BlogPage() {
  const articles = await getArticles();
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured || a.id !== featuredArticle?.id);
  
  return (
    <Frame>
      <Navbar />
      <main>
        <PanelSection>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--text-primary) mb-4">
                Insights & Articles
              </h1>
              <p className="text-xl text-(--text-secondary) max-w-2xl mx-auto">
                Thoughts on calm design, modern web development, and building digital experiences that last.
              </p>
            </div>
            
            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-16">
                <Link href={`/blog/${featuredArticle.slug}`} className="group block">
                  <article className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-(--surface)">
                      <Image
                        src={featuredArticle.cover_image}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm text-(--text-muted)">
                        <span className="px-3 py-1 rounded-full bg-(--surface) border border-(--border)">
                          {featuredArticle.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.reading_time} min read
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-(--text-primary) group-hover:text-(--text-link) transition-colors">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-(--text-secondary)">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-1 text-(--text-link)">
                        <span>Read article</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            )}
            
            {/* Articles Grid */}
            {regularArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="group block"
                  >
                    <article className="space-y-4">
                      <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-(--surface)">
                        <Image
                          src={article.cover_image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm text-(--text-muted)">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.reading_time} min
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-(--text-primary) group-hover:text-(--text-link) transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-(--text-secondary) line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : !featuredArticle ? (
              <div className="text-center py-20">
                <p className="text-(--text-muted)">
                  No articles yet. Check back soon!
                </p>
              </div>
            ) : null}
          </div>
        </PanelSection>
        
        <div className="border-t border-(--border)">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}
