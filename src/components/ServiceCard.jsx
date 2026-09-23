import './ServiceCard.css'

/* Image path map — direct img tags, not PhotoArt, for full-bleed control */
const IMAGE_SRC = {
  housekeeping: 'housekeeping.jpg',
  maintenance:  'maintenance.jpg',
  operations:   'operations.jpg',
  hospitality:  'hospitality.jpg',
  horticulture: 'horticulture.jpg',
  recruitment:  'recruitment.jpg',
  events:       'events.jpg',
  corporate:    'corporate.jpg',
  facilities:   'facilities.jpg',
  contact:      'contact.jpg',
}

export default function ServiceCard({
  title,
  description,
  image,
  division,
  highlights = [],
  featured = false,
  onClick,
}) {
  return (
    <article
      className={`service-card ${featured ? 'service-card--featured' : ''} ${onClick ? 'service-card--clickable' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
      data-reveal
    >
      {/* Full-bleed background image */}
      <div className="service-card__bg">
        <img
          src={`/images/${IMAGE_SRC[image] || 'operations.jpg'}`}
          alt={title}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Top badge if provided */}
      {division && (
        <div className="service-card__top">
          <span className="service-card__tag">
            {division}
          </span>
        </div>
      )}

      {/* Text overlay — bottom aligned */}
      <div className="service-card__body">
        <h3>{title}</h3>
        <p>{description}</p>

        {highlights && highlights.length > 0 && (
          <div className="service-card__highlights">
            {highlights.slice(0, 3).map((item, idx) => (
              <span key={idx} className="service-card__pill">{item}</span>
            ))}
          </div>
        )}

        {onClick && (
          <div className="service-card__action">
            <span>View deployment scope</span>
            <span className="service-card__arrow" aria-hidden="true">→</span>
          </div>
        )}
      </div>
    </article>
  )
}
