import { Link } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './NotFound.css'

export default function NotFound() {
  useDocumentMeta({
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    path: '/404',
  })

  return (
    <section className="section section--surface not-found">
      <div className="container not-found__inner">
        <div className="not-found__code" aria-hidden="true">404</div>
        <h1>This page has clocked off.</h1>
        <p>
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get you
          back to solid ground.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn-primary">
            Back to home <span aria-hidden="true">→</span>
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  )
}
