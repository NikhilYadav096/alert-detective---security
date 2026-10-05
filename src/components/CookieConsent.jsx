import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CookieConsent.css'

const STORAGE_KEY = 'bc-cookie-consent'

export function getCookieConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function setCookieConsent(accepted) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ accepted, timestamp: Date.now() }))
  } catch {
    // localStorage unavailable (private browsing, blocked storage) — banner
    // will simply reappear next visit, which is an acceptable fallback.
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!getCookieConsent()) setVisible(true)

    const reopen = () => setVisible(true)
    window.addEventListener('open-cookie-settings', reopen)
    return () => window.removeEventListener('open-cookie-settings', reopen)
  }, [])

  const choose = (accepted) => {
    setCookieConsent(accepted)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          We use a minimal, functional cookie to remember your preferences. We don&rsquo;t run
          analytics or marketing cookies at this time. See our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> for details.
        </p>
        <div className="cookie-banner__actions">
          <button type="button" className="btn btn-secondary" onClick={() => choose(false)}>
            Essential only
          </button>
          <button type="button" className="btn btn-primary" onClick={() => choose(true)}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
