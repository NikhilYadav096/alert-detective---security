import './CheckList.css'

export default function CheckList({ items, className = '' }) {
  return (
    <ul className={`check-list ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <svg viewBox="0 0 20 20" aria-hidden="true" className="check-list__icon">
            <circle cx="10" cy="10" r="10" />
            <path d="M6 10.2l2.6 2.6L14.5 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
