import './PhotoArt.css'

// Authenticated real photography references
const IMAGES = {
  hero:                  { file: 'hero.jpg',                 alt: 'Factory assembly line workers at a manufacturing facility', position: 'center top' },
  team:                  { file: 'team.jpg',                 alt: 'Bahnewal & Co. warehouse and logistics team at distribution center', position: 'center top' },
  operations:            { file: 'operations.jpg',           alt: 'Industrial worker handling fabric material at textile processing mill', position: 'center' },
  security:              { file: 'security.jpg',             alt: 'Security professional on duty at a corporate building', position: 'center' },
  surveillance:          { file: 'surveillance.jpg',         alt: 'Perimeter surveillance and facility rooftop vigilance', position: 'center' },
  investigation:         { file: 'investigation.jpg',        alt: 'Corporate investigation and risk intelligence team briefing', position: 'center' },
  'executive-protection': { file: 'executive-protection.jpg', alt: 'Executive close protection officer and secure transit escort', position: 'center' },
  patrol:                { file: 'patrol.jpg',               alt: 'Mobile security vehicle and night perimeter patrol', position: 'center' },
  housekeeping:          { file: 'housekeeping.jpg',         alt: 'Corporate housekeeping team cleaning a modern office corridor with professional equipment', position: 'center' },
  maintenance:           { file: 'maintenance.jpg',          alt: 'Industrial technician operating heavy machinery at manufacturing facility', position: 'center' },
  hospitality:           { file: 'hospitality.jpg',          alt: 'Corporate facility staff team ready for deployment', position: 'center top' },
  horticulture:          { file: 'horticulture.jpg',         alt: 'Horticulture and grounds maintenance team tending corporate campus garden', position: 'center' },
  recruitment:           { file: 'recruitment.jpg',          alt: 'Skilled industrial workforce deployed at manufacturing facility', position: 'center top' },
  events:                { file: 'events.jpg',               alt: 'Corporate event support staff and outdoor event coordination', position: 'center' },
  corporate:             { file: 'corporate.jpg',            alt: 'Corporate housekeeping and facility maintenance team in modern office hallway', position: 'center' },
  facilities:            { file: 'facilities.jpg',           alt: 'Warehouse logistics team in safety vests at large distribution center', position: 'center top' },
  contact:               { file: 'contact.jpg',              alt: 'Business handshake confirming an agreement', position: 'center' },
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
