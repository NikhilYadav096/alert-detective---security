import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/nav'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <span className="site-header__mark" aria-hidden="true">B&amp;C</span>
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
            {navLinks.map((link) => (
              <li key={link.to}>
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
