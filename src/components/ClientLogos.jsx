import './ClientLogos.css'

const clients = [
  { slug: 'bharat-rasayan',     name: 'Bharat Rasayan Limited',     ext: 'jpg' },
  { slug: 'kribhco',            name: 'KRIBHCO',                     ext: 'jpg' },
  { slug: 'himachal-tourism',   name: 'Himachal Tourism',            ext: 'jpg' },
  { slug: 'ircs',               name: 'Indian Red Cross Society',    ext: 'jpg' },
  { slug: 'sai',                name: 'Sports Authority of India',   ext: 'jpg' },
  { slug: 'mg-motors',          name: 'MG Motors',                   ext: 'jpg' },
  { slug: 'delhi-public-school', name: 'Delhi Public School',        ext: 'jpg' },
  { slug: 'yu',                 name: 'YU',                          ext: 'jpg' },
  { slug: 'axis-bank',          name: 'Axis Bank',                   ext: 'jpg' },
  { slug: 'jain-precision',     name: 'Jain Precision Fastners',     ext: 'jpg' },
  { slug: 'panchkula-golf-club', name: 'Panchkula Golf Club',        ext: 'jpg' },
  { slug: 'push-up-tools',      name: 'Push-Up Tools India',         ext: 'jpg' },
]

const row1 = clients.slice(0, 6)
const row2 = clients.slice(6)

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className="cl-track-wrap">
      <ul className={`cl-track ${reverse ? 'cl-track--reverse' : ''}`} aria-hidden="true">
        {doubled.map((c, i) => (
          <li className="cl-item" key={`${c.slug}-${i}`}>
            <div className="cl-card">
              <img
                src={`/images/clients/${c.slug}.${c.ext}`}
                alt={`${c.name} logo`}
                className="cl-img"
                loading="lazy"
                draggable="false"
              />
              <span className="cl-name">{c.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ClientLogos() {
  return (
    <section className="cl-section" aria-label="Our clients">
      <div className="cl-header">
        <div className="cl-header__rule" />
        <div className="cl-header__center">
          <span className="cl-header__eyebrow">Worked With</span>
          <h2 className="cl-header__title">
            Organisations that trust<br />Bahnewal &amp; Co.
          </h2>
          <p className="cl-header__sub">
            From public institutions and financial bodies to industrial manufacturers —
            over 40 years of consistent, statutory-compliant delivery.
          </p>
        </div>
        <div className="cl-header__rule" />
      </div>

      <div className="cl-marquee-wrap">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      <div className="cl-stat-strip">
        <div className="cl-stat"><strong>12+</strong><span>Named clients</span></div>
        <div className="cl-stat-dot" aria-hidden="true">✦</div>
        <div className="cl-stat"><strong>40+</strong><span>Years of service</span></div>
        <div className="cl-stat-dot" aria-hidden="true">✦</div>
        <div className="cl-stat"><strong>6</strong><span>States covered</span></div>
        <div className="cl-stat-dot" aria-hidden="true">✦</div>
        <div className="cl-stat"><strong>100%</strong><span>Statutory compliant</span></div>
      </div>
    </section>
  )
}

