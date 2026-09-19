import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Compliance from './pages/Compliance'

function useScrollToTop(pathname) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
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
  const { pathname } = useLocation()
  useScrollToTop(pathname)
  const mainRef = useRevealOnRoute(pathname)

  return (
    <>
      <Header />
      <main ref={mainRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact" element={<Compliance />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
