import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Frame, PanelSection } from "@/components/site/Frame";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  cover_image: string;
  category: string;
  tags: string[];
  published_at: string;
  reading_time: number;
  author_name: string;
  author_avatar: string;
}

async function getArticle(slug: string): Promise<Article | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  
  return data;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  
  if (!article) {
    return {
      title: "Article Not Found | Flinkeo",
    };
  }
  
  return {
    title: `${article.title} | Flinkeo Blog`,
    description: article.excerpt || article.title,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  
  if (!article) {
    notFound();
  }
  
  return (
    <Frame>
      <Navbar />
      <main>
        <PanelSection>
          <article className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--text-primary) transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
            
            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 text-sm text-(--text-muted) mb-4">
                {article.category && (
                  <span className="px-3 py-1 rounded-full bg-(--surface) border border-(--border)">
                    {article.category}
                  </span>
                )}
                {article.reading_time && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.reading_time} min read
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-(--text-primary) mb-4">
                {article.title}
              </h1>
              
              {article.excerpt && (
                <p className="text-xl text-(--text-secondary) mb-6">
                  {article.excerpt}
                </p>
              )}
              
              {/* Author & Date */}
              <div className="flex items-center gap-3">
                {article.author_avatar ? (
                  <Image
                    src={article.author_avatar}
                    alt={article.author_name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-(--surface) border border-(--border) flex items-center justify-center text-sm font-medium text-(--text-muted)">
                    {article.author_name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-medium text-(--text-primary)">
                    {article.author_name}
                  </p>
                  {article.published_at && (
                    <p className="text-sm text-(--text-muted) flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.published_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  )}
                </div>
              </div>
            </header>
            
            {/* Cover Image */}
            {article.cover_image && (
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                <Image
                  src={article.cover_image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            
            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-(--text-primary) prose-p:text-(--text-secondary) prose-a:text-(--text-link) prose-strong:text-(--text-primary) prose-code:text-(--text-primary) prose-pre:bg-(--surface) prose-pre:border prose-pre:border-(--border)"
              dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
            />
            
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-(--border)">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-(--surface) border border-(--border) rounded-full text-(--text-secondary)"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </PanelSection>
        
        <div className="border-t border-(--border)">
          <Footer />
        </div>
      </main>
    </Frame>
  );
}

// Simple markdown formatter (can be replaced with a proper markdown parser like remark/rehype)
function formatContent(content: string): string {
  return content
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    .replace(/\n/gim, '<br/>');
}
