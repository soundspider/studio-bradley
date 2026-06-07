-- ================================================
-- Studio Bradley — Supabase Database Setup
-- Run this in your Supabase SQL editor
-- ================================================

-- PROJECTS TABLE
create table if not exists projects (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  category text not null check (category in ('graphic-design', 'web-design', 'video-editing', 'brand-identity')),
  description text,
  image_url text,
  tags text[] default '{}',
  featured boolean default false,
  created_at timestamptz default now()
);

-- Enable public read access for projects
alter table projects enable row level security;

create policy "Anyone can read projects"
  on projects for select
  using (true);

-- CONTACT MESSAGES TABLE
create table if not exists contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz default now()
);

-- Only allow inserts from public (no reads without auth)
alter table contact_messages enable row level security;

create policy "Anyone can insert contact messages"
  on contact_messages for insert
  with check (true);

-- ================================================
-- SAMPLE DATA — delete after adding real projects
-- ================================================
insert into projects (title, category, description, image_url, tags, featured) values
  ('Brand poster series', 'graphic-design', 'A bold editorial poster collection for a local creative brand.', '', '{"Print","Editorial"}', true),
  ('E-commerce redesign', 'web-design', 'Full UI/UX overhaul for an online fashion retailer.', '', '{"UI/UX","Shopify"}', true),
  ('Brand campaign reel', 'video-editing', 'A 60-second hype reel for a product launch campaign.', '', '{"Premiere Pro","Motion"}', false),
  ('Startup full branding', 'brand-identity', 'Logo, color system, and brand guide for a tech startup.', '', '{"Identity","Strategy"}', true);
