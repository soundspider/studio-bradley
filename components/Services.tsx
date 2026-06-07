import styles from './Services.module.css'

const SERVICES = [
  { num: '01', name: 'Designing Landing Page', desc: 'High-converting, visually stunning landing pages designed to turn visitors into clients.' },
  { num: '02', name: 'Logo Design', desc: 'Memorable logos that capture your brand personality and leave a lasting impression.' },
  { num: '03', name: 'Graphic Design (Print and Digital)', desc: 'From social media visuals to print materials — designs that communicate and convert.' },
  { num: '04', name: 'Video Editing', desc: 'Raw footage transformed into compelling content. Reels, promos, and brand films.' },
  { num: '05', name: 'Web Content Management', desc: 'Keeping your website fresh, updated, and consistent with your brand voice.' },
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
