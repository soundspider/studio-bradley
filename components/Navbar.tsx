'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>STUDIO<br/>BRADLEY</a>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#team" onClick={() => setMenuOpen(false)}>Team</a>
        <a href="#contact" className={styles.cta} onClick={() => setMenuOpen(false)}>
          Let's talk →
        </a>
      </div>

      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
