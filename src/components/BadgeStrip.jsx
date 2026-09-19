import './BadgeStrip.css'

export default function BadgeStrip({ badges, tone = 'light' }) {
  return (
    <ul className={`badge-strip badge-strip--${tone}`}>
      {badges.map((badge) => (
        <li key={badge}>{badge}</li>
      ))}
    </ul>
  )
}
