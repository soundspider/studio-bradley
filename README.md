# Studio Bradley — Portfolio Website

Built with **Next.js 14**, **Supabase**, and deployed on **Vercel**.

---

## Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, CSS Modules
- **Backend**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Domain**: Hostinger (DNS pointed to Vercel)

---

## Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Set up Supabase
1. Go to [supabase.com](https://supabase.com) and open your project
2. Go to **SQL Editor** and run the contents of `supabase-setup.sql`
3. This creates the `projects` and `contact_messages` tables

### 3. Add environment variables
1. Copy `.env.example` to `.env.local`
2. Fill in your Supabase URL and anon key (found in Supabase → Settings → API)

```bash
cp .env.example .env.local
```

### 4. Run locally
```bash
npm run dev
```
Visit `http://localhost:3000`

---

## Deploy to Vercel

### Option A — Via GitHub (recommended)
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Add environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click Deploy

### Option B — Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## Connect Your Hostinger Domain

1. In **Vercel** → your project → Settings → Domains → Add `studiobradley.com`
2. Vercel will show you DNS records (usually an A record or CNAME)
3. In **Hostinger** → DNS Zone → add those records
4. Wait 10–30 min for propagation

---

## Adding Real Projects

### Via Supabase dashboard (easiest)
1. Go to Supabase → Table Editor → `projects`
2. Click **Insert row**
3. Fill in: `title`, `category`, `description`, `image_url`, `tags`, `featured`

### Image hosting
- Upload images to **Supabase Storage** → copy the public URL → paste into `image_url`
- Or use any image hosting (Cloudinary, etc.)

### Categories
Must be one of:
- `graphic-design`
- `web-design`
- `video-editing`
- `brand-identity`

---

## View Contact Messages
Go to Supabase → Table Editor → `contact_messages` to see all form submissions.

---

## Project Structure
```
studio-bradley/
├── app/
│   ├── globals.css       # Global styles + design tokens
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Navbar.tsx/.css   # Sticky nav with mobile menu
│   ├── Hero.tsx/.css     # Hero with stats
│   ├── Portfolio.tsx/.css # Filterable portfolio grid (Supabase)
│   ├── Services.tsx/.css  # Services list
│   ├── Team.tsx/.css      # Team cards + tools
│   ├── Contact.tsx/.css   # Contact form (saves to Supabase)
│   └── Footer.tsx/.css    # Footer
├── lib/
│   └── supabase.ts        # Supabase client + TypeScript types
├── supabase-setup.sql     # Run this in Supabase SQL editor
└── .env.example           # Copy to .env.local
```
