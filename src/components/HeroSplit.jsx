import { Link } from 'react-router-dom'
import PhotoArt from './PhotoArt'
import './HeroSplit.css'

export default function HeroSplit({
  eyebrow,
  title,
  description,
  ctas = [],
  trustPoints = [],
  art = 'hero',
  badge,
}) {
  return (
    <section className="hero-split">
      <div className="container hero-split__inner">
        <div className="hero-split__content" data-reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="hero-split__title">{title}</h1>
          {description && <p className="hero-split__description">{description}</p>}

          {ctas.length > 0 && (
            <div className="hero-split__ctas">
              {ctas.map((cta) => (
                <Link key={cta.label} to={cta.to} className={`btn ${cta.variant === 'secondary' ? 'btn-on-navy' : 'btn-primary'}`}>
                  {cta.label} <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          )}

          {trustPoints.length > 0 && (
            <ul className="hero-split__trust">
              {trustPoints.map((point) => (
                <li key={point}>
                  <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" /><path d="M6 10.2l2.6 2.6L14.5 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hero-split__media" data-reveal>
          <PhotoArt variant={art} ratio="4 / 3.1" priority />
          {badge && (
            <div className="hero-split__badge">
              <strong>{badge.value}</strong>
              <span>{badge.label}</span>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-split__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
