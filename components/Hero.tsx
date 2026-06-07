import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} />
          Creative Studio — Manila, PH
        </p>

        <h1 className={styles.headline}>
          Design<br />
          with<br />
          <span className={styles.pink}>feelings.</span>
        </h1>

        <p className={styles.sub}>
          We craft brand identities, visuals, and digital experiences
          that connect with people — not just look good on screen.
        </p>

        <div className={styles.actions}>
          <a href="#work" className={styles.btnPrimary}>View our work</a>
          <a href="#services" className={styles.btnGhost}>What we do</a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>scroll</span>
        <div className={styles.line} />
      </div>
    </section>
  )
}
