import './PhotoArt.css'

const IMAGES = {
  hero: { file: 'hero.jpg', alt: 'Team of workers ready for deployment' },
  team: { file: 'team.jpg', alt: 'Experienced management team in discussion' },
  operations: { file: 'operations.jpg', alt: 'Warehouse operations in progress' },
  housekeeping: { file: 'housekeeping.jpg', alt: 'Housekeeping team in uniform with cleaning equipment' },
  maintenance: { file: 'maintenance.jpg', alt: 'Maintenance technician servicing rooftop equipment' },
  security: { file: 'security.jpg', alt: 'Security personnel on duty at a commercial building', position: 'center 15%' },
  hospitality: { file: 'hospitality.jpg', alt: 'Hospitality staff member serving a guest' },
  horticulture: { file: 'horticulture.jpg', alt: 'Groundskeeper trimming hedges' },
  recruitment: { file: 'recruitment.jpg', alt: 'Recruitment interview in progress' },
  events: { file: 'events.jpg', alt: 'Large event with an engaged audience' },
  corporate: { file: 'corporate.jpg', alt: 'Modern corporate office building' },
  facilities: { file: 'facilities.jpg', alt: 'Facilities team reviewing site operations', position: 'center 60%' },
  contact: { file: 'contact.jpg', alt: 'Business handshake confirming an agreement' },
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
