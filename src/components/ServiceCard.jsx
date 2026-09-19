import PhotoArt from './PhotoArt'
import './ServiceCard.css'

export default function ServiceCard({ title, description, image, compact = false }) {
  return (
    <article className={`service-card ${compact ? 'service-card--compact' : ''}`} data-reveal>
      <PhotoArt variant={image} ratio="16 / 11" className="service-card__media" />
      <div className="service-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}
