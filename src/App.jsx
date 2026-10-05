import { useEffect, useRef } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Compliance from './pages/Compliance'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function useScrollToTop(pathname, hash) {
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

function useRevealOnRoute(pathname) {
  const mainRef = useRef(null)

  useEffect(() => {
    const node = mainRef.current
    if (!node) return undefined

    const items = node.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'is-visible')
            observer.unobserve(entry.target)
          } else {
            entry.target.classList.add('reveal')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [pathname])

  return mainRef
}

export default function App() {
  const { pathname, hash } = useLocation()
  useScrollToTop(pathname, hash)
  const mainRef = useRevealOnRoute(pathname)

  return (
    <>
      <Header />
      <main ref={mainRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Navigate to="/services#industries" replace />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact" element={<Compliance />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
