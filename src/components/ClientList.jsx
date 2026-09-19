import './ClientList.css'

export default function ClientList({ title, clients, tone = 'card' }) {
  return (
    <div className={`client-list client-list--${tone}`} data-reveal>
      {title && <h3>{title}</h3>}
      <ul>
        {clients.map((client) => (
          <li key={client}>{client}</li>
        ))}
      </ul>
    </div>
  )
}
