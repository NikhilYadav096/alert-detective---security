import './StatCard.css'

export default function StatCard({ value, label, tone = 'light' }) {
  return (
    <div className={`stat-card stat-card--${tone}`} data-reveal>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}
