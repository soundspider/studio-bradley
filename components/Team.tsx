import styles from './Team.module.css'

const TEAM = [
  {
    initials: 'CB',
    name: 'Christian Baracena',
    role: 'Web & Graphic Designer',
    bio: 'Turns complex problems into clean, functional visuals. Leads all UI/UX and graphic work.',
    links: [
      { label: 'Upwork', url: 'https://www.upwork.com/freelancers/christianmarbaracena' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/christianmarbaracena/' },
    ],
  },
  {
    initials: 'JA',
    name: 'Joy Asagra',
    role: 'Project Manager & Video Editor',
    bio: 'Keeps everything on track and transforms raw clips into compelling stories.',
    links: [
      { label: 'Linktree', url: 'https://linktr.ee/jewenartishi' },
      { label: 'Behance', url: 'https://www.behance.net/JewenniverJoyAsagra' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jewenniver-joy-a-a79966178/' },
    ],
  },
]

const TOOLS = [
  'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign',
  'After Effects', 'Premiere Pro', 'Canva', 'Figma', 'WordPress', 'Shopify',
]

export default function Team() {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>The fellowship</span>
        <p className={styles.tagline}>
          Two specialists. One creative studio.
        </p>
      </div>

      <div className={styles.grid}>
        {TEAM.map((member) => (
          <div key={member.name} className={styles.card}>
            <div className={styles.avatar}>{member.initials}</div>
            <div className={styles.info}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
            </div>
            {member.links.length > 0 && (
              <div className={styles.links}>
                {member.links.map(link => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.tools}>
        <span className={styles.toolsLabel}>Tools we use</span>
        <div className={styles.toolsList}>
          {TOOLS.map(tool => (
            <span key={tool} className={styles.tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
