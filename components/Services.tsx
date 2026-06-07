import styles from './Services.module.css'

const SERVICES = [
  { num: '01', name: 'Web design & UI/UX', desc: 'Sites that look great and feel effortless to navigate. From wireframe to live product.' },
  { num: '02', name: 'Graphic design', desc: 'Visuals that make people stop and look twice. Print, digital, and everything in between.' },
  { num: '03', name: 'Brand identity', desc: 'Logos, color systems, typography, and brand guides that anchor your business.' },
  { num: '04', name: 'Video editing', desc: 'Raw footage turned into content worth watching. Reels, promos, and brand films.' },
  { num: '05', name: 'Content management', desc: 'Consistent brand voice across every platform, handled end-to-end.' },
  { num: '06', name: 'Social media', desc: 'Posts, strategy, scheduling, and analytics — your entire social presence, managed.' },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.top}>
        <span className={styles.label}>What we do</span>
        <p className={styles.tagline}>
          We cover every creative touchpoint — so you work with one team, not six.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s) => (
          <div key={s.num} className={styles.item}>
            <span className={styles.num}>{s.num}</span>
            <div className={styles.content}>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </div>
            <span className={styles.arrow}>↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}
