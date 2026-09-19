import './NumberedCard.css'

export default function NumberedCard({ number, title, description }) {
  return (
    <article className="numbered-card" data-reveal>
      <span className="numbered-card__number">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
