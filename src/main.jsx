import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/tokens.css'
import './styles/global.css'
import App from './App.jsx'

// Defense-in-depth HTTPS enforcement for hosts that don't redirect at the
// edge by default. Vercel already force-redirects http->https platform-wide,
// but this covers any other deployment target. Skipped on localhost.
if (
  typeof window !== 'undefined' &&
  window.location.protocol === 'http:' &&
  !['localhost', '127.0.0.1'].includes(window.location.hostname)
) {
  window.location.replace(`https://${window.location.host}${window.location.pathname}${window.location.search}`)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
