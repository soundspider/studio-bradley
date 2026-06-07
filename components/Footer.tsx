import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.logo}>STUDIO BRADLEY</span>
          <p className={styles.tagline}>Design with feelings.</p>
        </div>
        <nav className={styles.nav}>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className={styles.bottom}>
        <span>© Studio Bradley 2025. All rights reserved.</span>
        <span>Manila, Philippines</span>
      </div>
    </footer>
  )
}
