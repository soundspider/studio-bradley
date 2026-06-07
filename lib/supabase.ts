import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Project = {
  id: string
  title: string
  category: 'graphic-design' | 'web-design' | 'video-editing' | 'brand-identity'
  description: string
  image_url: string
  tags: string[]
  created_at: string
  featured: boolean
}

export type ContactMessage = {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}
