import './ComplianceCard.css'

export default function ComplianceCard({ code, title }) {
  return (
    <article className="compliance-card" data-reveal>
      <span className="compliance-card__code">{code}</span>
      <p>{title}</p>
    </article>
  )
}
