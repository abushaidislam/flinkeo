-- ============================================
-- Flinkeo Database Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Contact requests (existing - for reference)
create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  project_type text,
  budget text,
  timeline text,
  message text not null
);

create index if not exists contact_requests_created_at_idx
  on public.contact_requests (created_at desc);

-- ============================================
-- 1. PORTFOLIO / WORKS TABLE
-- ============================================
create table if not exists public.works (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  
  -- Basic Info
  title text not null,
  slug text unique not null,
  client text,
  category text, -- e.g., 'Web Design', 'Development', 'Branding'
  
  -- Content
  description text not null,
  short_description text, -- for cards
  challenge text,
  solution text,
  results text,
  
  -- Media
  cover_image text not null,
  gallery_images text[], -- array of image URLs
  video_url text,
  
  -- Project Details
  services text[], -- array of services provided
  technologies text[], -- tech stack used
  website_url text,
  github_url text,
  
  -- Meta
  published boolean default true,
  featured boolean default false,
  order_index integer default 0,
  completion_date date,
  duration text -- e.g., '2 months'
);

-- Indexes for works
create index if not exists works_slug_idx on public.works (slug);
create index if not exists works_category_idx on public.works (category);
create index if not exists works_featured_idx on public.works (featured) where featured = true;
create index if not exists works_published_idx on public.works (published) where published = true;
create index if not exists works_order_idx on public.works (order_index);

-- Trigger for updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger works_updated_at
  before update on public.works
  for each row execute function public.handle_updated_at();

-- RLS Policies for works
alter table public.works enable row level security;

create policy "Works are viewable by everyone" 
  on public.works for select 
  using (published = true);

create policy "Authenticated users can insert works" 
  on public.works for insert 
  to authenticated 
  with check (true);

create policy "Authenticated users can update works" 
  on public.works for update 
  to authenticated 
  using (true);

create policy "Authenticated users can delete works" 
  on public.works for delete 
  to authenticated 
  using (true);

-- ============================================
-- 2. BLOG / ARTICLES TABLE
-- ============================================
create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz,
  
  -- Basic Info
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null, -- can store markdown/HTML
  
  -- Media
  cover_image text,
  
  -- Categorization
  category text,
  tags text[],
  
  -- Meta
  published boolean default false,
  featured boolean default false,
  reading_time integer, -- in minutes
  author_name text default 'Flinkeo Team',
  author_avatar text,
  
  -- SEO
  meta_title text,
  meta_description text,
  
  -- Stats
  view_count integer default 0
);

-- Indexes for articles
create index if not exists articles_slug_idx on public.articles (slug);
create index if not exists articles_category_idx on public.articles (category);
create index if not exists articles_published_at_idx on public.articles (published_at desc);
create index if not exists articles_featured_idx on public.articles (featured) where featured = true;
create index if not exists articles_published_idx on public.articles (published) where published = true;

-- Trigger for articles
create trigger articles_updated_at
  before update on public.articles
  for each row execute function public.handle_updated_at();

-- RLS Policies for articles
alter table public.articles enable row level security;

create policy "Published articles are viewable by everyone" 
  on public.articles for select 
  using (published = true);

create policy "Authenticated users can insert articles" 
  on public.articles for insert 
  to authenticated 
  with check (true);

create policy "Authenticated users can update articles" 
  on public.articles for update 
  to authenticated 
  using (true);

create policy "Authenticated users can delete articles" 
  on public.articles for delete 
  to authenticated 
  using (true);

-- ============================================
-- 3. TESTIMONIALS TABLE
-- ============================================
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  
  -- Client Info
  client_name text not null,
  client_title text, -- e.g., 'CEO, Company Name'
  client_company text,
  client_avatar text,
  
  -- Content
  content text not null,
  rating integer check (rating >= 1 and rating <= 5),
  
  -- Associated Work (optional)
  work_id uuid references public.works(id) on delete set null,
  
  -- Meta
  published boolean default true,
  featured boolean default false,
  order_index integer default 0
);

-- Indexes for testimonials
create index if not exists testimonials_featured_idx on public.testimonials (featured) where featured = true;
create index if not exists testimonials_published_idx on public.testimonials (published) where published = true;
create index if not exists testimonials_work_id_idx on public.testimonials (work_id);
create index if not exists testimonials_order_idx on public.testimonials (order_index);

-- Trigger for testimonials
create trigger testimonials_updated_at
  before update on public.testimonials
  for each row execute function public.handle_updated_at();

-- RLS Policies for testimonials
alter table public.testimonials enable row level security;

create policy "Published testimonials are viewable by everyone" 
  on public.testimonials for select 
  using (published = true);

create policy "Authenticated users can insert testimonials" 
  on public.testimonials for insert 
  to authenticated 
  with check (true);

create policy "Authenticated users can update testimonials" 
  on public.testimonials for update 
  to authenticated 
  using (true);

create policy "Authenticated users can delete testimonials" 
  on public.testimonials for delete 
  to authenticated 
  using (true);

-- ============================================
-- 4. FAQ TABLE
-- ============================================
create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  
  -- Content
  question text not null,
  answer text not null,
  
  -- Categorization
  category text default 'General', -- e.g., 'Services', 'Pricing', 'Process', 'General'
  
  -- Meta
  published boolean default true,
  order_index integer default 0
);

-- Indexes for faqs
create index if not exists faqs_category_idx on public.faqs (category);
create index if not exists faqs_published_idx on public.faqs (published) where published = true;
create index if not exists faqs_order_idx on public.faqs (order_index);

-- Trigger for faqs
create trigger faqs_updated_at
  before update on public.faqs
  for each row execute function public.handle_updated_at();

-- RLS Policies for faqs
alter table public.faqs enable row level security;

create policy "Published FAQs are viewable by everyone" 
  on public.faqs for select 
  using (published = true);

create policy "Authenticated users can insert FAQs" 
  on public.faqs for insert 
  to authenticated 
  with check (true);

create policy "Authenticated users can update FAQs" 
  on public.faqs for update 
  to authenticated 
  using (true);

create policy "Authenticated users can delete FAQs" 
  on public.faqs for delete 
  to authenticated 
  using (true);

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================

-- Insert sample works
insert into public.works (title, slug, client, category, description, short_description, services, technologies, cover_image, featured, order_index)
values 
  ('E-commerce Platform Redesign', 'ecommerce-redesign', 'Fashion Brand Co', 'Web Design', 'Complete redesign of an e-commerce platform focused on conversion optimization and mobile-first experience.', 'E-commerce platform with modern UI', ARRAY['UI/UX Design', 'Development'], ARRAY['Next.js', 'Tailwind CSS', 'Stripe'], 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', true, 1),
  ('SaaS Dashboard', 'saas-dashboard', 'TechStart Inc', 'Development', 'A comprehensive analytics dashboard for a B2B SaaS platform.', 'Analytics dashboard for B2B SaaS', ARRAY['Development', 'UI Design'], ARRAY['React', 'TypeScript', 'D3.js'], 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', true, 2),
  ('Brand Identity System', 'brand-identity', 'Local Business', 'Branding', 'Complete brand identity including logo, color palette, and design guidelines.', 'Complete brand identity package', ARRAY['Branding', 'Design'], ARRAY['Figma', 'Illustrator'], 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800', false, 3)
on conflict (slug) do nothing;

-- Insert sample testimonials
insert into public.testimonials (client_name, client_title, client_company, content, rating, featured, order_index)
values 
  ('Sarah Johnson', 'CEO', 'TechStart Inc', 'Flinkeo delivered beyond our expectations. The attention to detail and the quality of work was exceptional.', 5, true, 1),
  ('Michael Chen', 'Marketing Director', 'Fashion Brand Co', 'Working with Flinkeo was a game-changer for our online presence. Highly recommended!', 5, true, 2),
  ('Emily Rodriguez', 'Founder', 'Local Business', 'Professional, timely, and incredibly talented. Our brand has never looked better.', 5, false, 3)
on conflict do nothing;

-- Insert sample FAQs
insert into public.faqs (question, answer, category, order_index)
values 
  ('What services does Flinkeo offer?', 'We specialize in premium web design, development, documentation systems, and product showcases. Our focus is on creating calm, precise, and durable web experiences.', 'Services', 1),
  ('How long does a typical project take?', 'Project timelines vary based on scope. A simple website typically takes 2-4 weeks, while complex applications may take 2-3 months. We provide detailed timelines during our initial consultation.', 'Process', 2),
  ('What is your pricing structure?', 'We offer project-based pricing tailored to your specific needs. Contact us for a detailed quote based on your requirements.', 'Pricing', 3),
  ('Do you provide ongoing support?', 'Yes, we offer maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally.', 'Services', 4)
on conflict do nothing;

-- Insert sample articles
insert into public.articles (title, slug, excerpt, content, category, tags, published, published_at, featured, reading_time, cover_image)
values 
  ('The Art of Calm Design', 'art-of-calm-design', 'Exploring how minimalism and intentionality create better user experiences.', '# The Art of Calm Design\n\nIn a world of digital noise, calm design stands out...', 'Design', ARRAY['minimalism', 'ux', 'design'], true, now(), true, 5, 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800'),
  ('Building Modern Web Systems', 'building-modern-web-systems', 'A deep dive into the technologies and approaches we use at Flinkeo.', '# Building Modern Web Systems\n\nModern web development requires a thoughtful approach...', 'Development', ARRAY['nextjs', 'react', 'webdev'], true, now(), false, 8, 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800')
on conflict (slug) do nothing;
