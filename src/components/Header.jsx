import { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/nav'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY
        setScrolled(scrollY > 16)

        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(docHeight > 0 ? Math.min((scrollY / docHeight) * 100, 100) : 0)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      {/* Scroll progress bar */}
      <div className="site-header__progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <img src="/images/logo-shield.png" alt="Bahnewal & Co. Logo" className="site-header__logo" />
          <span className="site-header__wordmark">
            <span className="site-header__name">BAHNEWAL &amp; CO.</span>
            <span className="site-header__tagline">EXCELLENCE IN MANPOWER SOLUTIONS</span>
          </span>
        </NavLink>

        <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <NavLink to="/compliance" className="btn btn-primary site-header__cta">
          Talk to our team <span aria-hidden="true">→</span>
        </NavLink>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav" className={`site-header__mobile ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile primary">
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.to} style={{ '--i': i }}>
                <NavLink to={link.to} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <NavLink to="/compliance" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
          Talk to our team <span aria-hidden="true">→</span>
        </NavLink>
      </div>
    </header>
  )
}
