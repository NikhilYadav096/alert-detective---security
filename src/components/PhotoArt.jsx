import './PhotoArt.css'

// Authenticated real photography references
const IMAGES = {
  hero:                  { file: 'hero.jpg',                 alt: 'Uniformed security officer stationed at commercial building entrance' },
  team:                  { file: 'team.jpg',                 alt: 'Experienced management team in discussion' },
  operations:            { file: 'operations.jpg',           alt: 'Site supervisor briefing a team of workers at an industrial facility' },
  security:              { file: 'security.jpg',             alt: 'Security professional on duty at a corporate building' },
  surveillance:          { file: 'surveillance.jpg',         alt: 'Perimeter surveillance and facility rooftop vigilance' },
  investigation:         { file: 'investigation.jpg',        alt: 'Corporate investigation and risk intelligence team briefing' },
  'executive-protection': { file: 'executive-protection.jpg', alt: 'Executive close protection officer and secure transit escort' },
  patrol:                { file: 'patrol.jpg',               alt: 'Mobile security vehicle and night perimeter patrol' },
  housekeeping:          { file: 'housekeeping.jpg',         alt: 'Professional housekeeping team at a corporate office' },
  maintenance:           { file: 'maintenance.jpg',          alt: 'Maintenance technician servicing rooftop equipment' },
  hospitality:           { file: 'hospitality.jpg',          alt: 'Hospitality staff member serving a guest' },
  horticulture:          { file: 'horticulture.jpg',         alt: 'Groundskeeper trimming hedges' },
  recruitment:           { file: 'recruitment.jpg',          alt: 'Recruitment interview in a modern corporate office' },
  events:                { file: 'events.jpg',               alt: 'Large professional event with an engaged audience' },
  corporate:             { file: 'corporate.jpg',            alt: 'Modern corporate office building' },
  facilities:            { file: 'facilities.jpg',           alt: 'Facilities team reviewing site operations' },
  contact:               { file: 'contact.jpg',              alt: 'Business handshake confirming an agreement' },
}

export default function PhotoArt({ variant = 'operations', ratio = '4 / 3', className = '', label, priority = false }) {
  const image = IMAGES[variant] || IMAGES.operations
  return (
    <figure className={`photo-art ${className}`} style={{ aspectRatio: ratio }}>
      <img
        src={`/images/${image.file}`}
        alt={label || image.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ objectPosition: image.position || 'center' }}
      />
    </figure>
  )
}
