export default function SectionHeader({ eyebrow, title, description, split, action, className = '' }) {
  return (
    <div className={`section-header ${split ? 'section-header--split' : ''} ${className}`} data-reveal>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="section-heading">{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {action}
    </div>
  )
}
