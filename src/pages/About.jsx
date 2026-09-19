import HeroSplit from '../components/HeroSplit'
import NumberedCard from '../components/NumberedCard'
import CheckList from '../components/CheckList'
import ClientList from '../components/ClientList'
import { Link } from 'react-router-dom'
import { supportedOrganizations } from '../data/clients'
import './About.css'

const storyTags = ['Result-oriented', 'Specialized divisions', 'Integrity', 'Confidentiality']

const approach = [
  {
    number: '01',
    title: 'People',
    description: 'Careful selection, role-fit training and responsive supervision create teams clients can rely on.',
  },
  {
    number: '02',
    title: 'Process',
    description: 'Clear deployment plans, monthly management reviews and measurable service standards keep work on track.',
  },
  {
    number: '03',
    title: 'Compliance',
    description: 'PF, ESI, minimum wages, weekly offs, leaves and statutory requirements are built into delivery.',
  },
]

const sectorPoints = [
  'Government organizations & institutions',
  'Public sector companies',
  'Private companies & corporate houses',
]

export default function About() {
  return (
    <>
      <HeroSplit
        eyebrow="About Bahnewal & Co."
        title={<>Built on experience.<br />Focused on execution.</>}
        description="For over four decades, we have helped organizations run with dependable, well-managed manpower."
        art="team"
      />

      <section className="section section--surface">
        <div className="container our-story">
          <div className="our-story__heading" data-reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="section-heading">Experience turned into dependable delivery</h2>
          </div>
          <div className="our-story__body" data-reveal>
            <p>
              Bahnewal & Co. and Alert Detectives &amp; Security Pvt. Ltd. bring 40+ years of expertise
              managing skilled and unskilled manpower for complex, everyday operations.
            </p>
            <p>
              Our result-oriented approach combines specialized service divisions with experienced
              supervision. We work with integrity and confidentiality, adapting teams to the realities of
              each site, sector and client.
            </p>
            <ul className="tag-list">
              {storyTags.map((tag) => (
                <li key={tag} className="tag">{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="eyebrow">Our approach</span>
            <h2 className="section-heading">Three disciplines. One reliable standard.</h2>
            <p className="section-description">
              We make workforce delivery practical, transparent and compliant from day one.
            </p>
          </div>
          <div className="grid grid-3">
            {approach.map((item) => (
              <NumberedCard key={item.number} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container trusted-sectors">
          <div className="trusted-sectors__content" data-reveal>
            <span className="eyebrow">Trusted across sectors</span>
            <h2 className="section-heading">Chosen where consistency matters</h2>
            <p className="section-description">
              We serve Central and State Government organizations, public sector companies and reputed
              private organizations across industry, education, hospitality, banking and exports.
            </p>
            <CheckList items={sectorPoints} />
            <Link to="/compliance" className="btn btn-primary trusted-sectors__cta">
              Discuss your requirements <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ClientList title="Organizations we have supported" clients={supportedOrganizations} tone="card" />
        </div>
      </section>
    </>
  )
}
