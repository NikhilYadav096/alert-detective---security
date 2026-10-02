import './Testimonials.css'

export const TESTIMONIALS = [
  {
    id: 'panchkula-golf-club',
    quote: 'Professional, reliable, and responsive—working with the team has always been a smooth and dependable experience.',
    author: 'Col A S Dhillon',
    designation: 'General Secretary',
    company: 'Panchkula Golf Club',
    sector: 'Sports & Hospitality',
    logo: '/images/clients/panchkula-golf-club.jpg',
    tenure: 'Long-standing client',
  },
  {
    id: 'bharat-rasayan',
    quote: 'We have been associated with the team since their early days, and their commitment to quality and service has remained consistent throughout.',
    author: 'S N Gupta',
    designation: 'Founder',
    company: 'Bharat Rasayan Ltd.',
    sector: 'Agrochemicals & Industrial',
    logo: '/images/clients/bharat-rasayan.jpg',
    tenure: 'Associated since early days',
  },
  {
    id: 'push-up-tools',
    quote: 'A dependable team that understands our requirements, delivers on time, and maintains a high standard of service.',
    author: 'R K Jain',
    designation: 'Founder',
    company: 'Push Up Tools',
    sector: 'Precision Engineering',
    logo: '/images/clients/push-up-tools.jpg',
    tenure: 'Enterprise partner',
  },
]

export default function Testimonials() {
  return (
    <section className="tm-section" aria-labelledby="tm-heading">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="tm-header" data-reveal>
          <div className="tm-header__eyebrow-row">
            <span className="tm-eyebrow">Client Endorsements</span>
            <span className="tm-eyebrow-line" aria-hidden="true" />
          </div>
          <div className="tm-header__cols">
            <h2 id="tm-heading" className="tm-title">
              Reputation built on decades of dependable service.
            </h2>
            <p className="tm-sub">
              Direct feedback from founders, executive directors, and leadership who trust our manpower and facility teams daily.
            </p>
          </div>
        </div>

        {/* Architectural 3-Column Editorial Grid */}
        <div className="tm-frame" data-reveal>
          {TESTIMONIALS.map((item, idx) => (
            <div key={item.id} className="tm-col">
              {/* Top: Client Identity & Logo */}
              <div className="tm-client-row">
                <div className="tm-logo-wrap">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className={`tm-logo-img ${item.id === 'panchkula-golf-club' ? 'tm-logo-img--dark' : ''}`}
                    loading="lazy"
                  />
                </div>
                <div className="tm-meta">
                  <span className="tm-sector">{item.sector}</span>
                  <span className="tm-tenure">{item.tenure}</span>
                </div>
              </div>

              {/* The Quote */}
              <blockquote className="tm-quote">
                <p>“{item.quote.replace(/^[“”"]|[“”"]$/g, '')}”</p>
              </blockquote>

              {/* Bottom Byline (Author & Designation) */}
              <div className="tm-byline">
                <div className="tm-byline__rule" aria-hidden="true" />
                <div className="tm-byline__person">
                  <span className="tm-author">{item.author}</span>
                  <span className="tm-designation">
                    {item.designation}, <span className="tm-company">{item.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
