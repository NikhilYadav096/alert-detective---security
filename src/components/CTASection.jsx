import { Link } from 'react-router-dom'
import './CTASection.css'

export default function CTASection({ heading, description, cta, tone = 'orange', size = 'md' }) {
  return (
    <section className={`cta-band cta-band--${tone} cta-band--${size}`}>
      <div className="container cta-band__inner">
        <div className="cta-band__text" data-reveal>
          <h2>{heading}</h2>
          {description && <p>{description}</p>}
        </div>
        {cta && (
          <Link to={cta.to} className={`btn ${tone === 'orange' ? 'btn-white' : 'btn-primary'}`}>
            {cta.label} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  )
}
