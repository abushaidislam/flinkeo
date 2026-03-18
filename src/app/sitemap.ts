import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";
import { absoluteUrl } from "@/lib/seo";
import { servicePages } from "@/lib/service-pages";

function getSupabasePublicClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/work"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/process"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/faq"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const supabase = getSupabasePublicClient();
  if (!supabase) {
    return staticRoutes;
  }

  const [articlesResult, worksResult] = await Promise.all([
    supabase.from("articles").select("slug").eq("published", true),
    supabase.from("works").select("slug").eq("published", true),
  ]);

  const articleEntries =
    articlesResult.data?.map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })) || [];

  const serviceEntries = servicePages.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const workEntries =
    worksResult.data?.map((work) => ({
      url: absoluteUrl(`/work/${work.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })) || [];

  return [...staticRoutes, ...serviceEntries, ...articleEntries, ...workEntries];
}
