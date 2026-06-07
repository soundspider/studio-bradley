'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { supabase, type Project } from '@/lib/supabase'
import styles from './Portfolio.module.css'

const CATEGORIES = [
  { key: 'all', label: 'All work' },
  { key: 'graphic-design', label: 'Graphic design' },
  { key: 'web-design', label: 'Web & UI/UX' },
  { key: 'video-editing', label: 'Video editing' },
  { key: 'brand-identity', label: 'Brand identity' },
]

const PLACEHOLDER_PROJECTS: Project[] = [
{ id: '1', title: 'Brand poster series', category: 'graphic-design', description: 'A bold editorial poster collection for a local creative brand.', image_url: '/graphic-design-1.png', tags: ['Print', 'Editorial'], created_at: '', featured: true },  { id: '2', title: 'E-commerce redesign', category: 'web-design', description: 'Full UI/UX overhaul for an online fashion retailer.', image_url: '', tags: ['UI/UX', 'Shopify'], created_at: '', featured: true },
  { id: '3', title: 'Brand campaign reel', category: 'video-editing', description: 'A 60-second hype reel for a product launch campaign.', image_url: '', tags: ['Premiere Pro', 'Motion'], created_at: '', featured: false },
  { id: '4', title: 'Startup full branding', category: 'brand-identity', description: 'Logo, color system, and brand guide for a tech startup.', image_url: '', tags: ['Identity', 'Strategy'], created_at: '', featured: true },
  { id: '5', title: 'Social media kit', category: 'graphic-design', description: 'Reusable templates and assets for Instagram and Facebook.', image_url: '', tags: ['Social', 'Canva'], created_at: '', featured: false },
  { id: '6', title: 'SaaS dashboard UI', category: 'web-design', description: 'Clean, data-rich dashboard design for a B2B platform.', image_url: '', tags: ['UI/UX', 'Figma'], created_at: '', featured: false },
]

const CATEGORY_COLORS: Record<string, string> = {
  'graphic-design': '#1a1a2e',
  'web-design': '#0d1f2d',
  'video-editing': '#1a0d1a',
  'brand-identity': '#1c1a0d',
}

const CATEGORY_LABELS: Record<string, string> = {
  'graphic-design': 'Graphic Design',
  'web-design': 'Web & UI/UX',
  'video-editing': 'Video Editing',
  'brand-identity': 'Brand Identity',
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>(PLACEHOLDER_PROJECTS)
  const [active, setActive] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })

      useEffect(() => {
        async function fetchProjects() {
          try {
            const { data, error } = await supabase
              .from('projects')
              .select('*')
              .order('created_at', { ascending: false })

            if (!error && data && data.length > 0) {
              setProjects(data)
            }
          } catch {
            // keep placeholder projects
          } finally {
            setLoading(false)
          }
        }
        fetchProjects()
      }, [])
      } catch {
        setProjects(PLACEHOLDER_PROJECTS)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="work" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.label}>Selected work</span>
          <span className={styles.count}>{filtered.length} projects</span>
        </div>
        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`${styles.filter} ${active === cat.key ? styles.filterActive : ''}`}
              onClick={() => setActive(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className={styles.loading}>
          {[1,2,3,4].map(i => <div key={i} className={styles.skeleton} />)}
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div key={project.id} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
              <div
                className={styles.image}
                style={{ background: CATEGORY_COLORS[project.category] }}
              >
              {project.image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image_url}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                  <span className={styles.placeholder}>
                    {CATEGORY_LABELS[project.category]}
                  </span>
                )}
                <div className={styles.overlay}>
                  <p className={styles.overlayDesc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags?.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.cardCat}>{CATEGORY_LABELS[project.category]}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
