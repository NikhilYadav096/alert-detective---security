import HeroSplit from '../components/HeroSplit'
import SectionHeader from '../components/SectionHeader'
import ComplianceCard from '../components/ComplianceCard'
import CheckList from '../components/CheckList'
import ContactForm from '../components/ContactForm'
import { complianceCards } from '../data/compliance'
import './Compliance.css'

const statutoryPoints = ['Minimum wages', 'PF and ESI administration', 'Weekly offs', 'Leaves and holidays']

export default function Compliance() {
  return (
    <>
      <HeroSplit
        eyebrow="Compliance & Contact"
        title={<>Reliable people.<br />Responsible<br />operations.</>}
        description="Workforce delivery backed by clear statutory practices, complete documentation and accountable management."
        art="contact"
      />

      <section className="section section--surface">
        <div className="container">
          <SectionHeader
            eyebrow="Registered and ready"
            title="Compliance built into delivery"
            description="Four core registrations support responsible workforce administration."
          />
          <div className="grid grid-4">
            {complianceCards.map((card) => (
              <ComplianceCard key={card.code} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container statutory">
          <div className="statutory__media" data-reveal>
            <div className="statutory__icon" aria-hidden="true">✓</div>
          </div>
          <div data-reveal>
            <span className="eyebrow">Statutory confidence</span>
            <h2 className="section-heading">Every obligation accounted for</h2>
            <p className="section-description">
              Bahnewal &amp; Co. has its own PF Code and ESI Code and meets all legal obligations
              governing deployed manpower.
            </p>
            <CheckList items={statutoryPoints} />
          </div>
        </div>
      </section>

      <section className="section section--navy rates">
        <div className="container rates__inner" data-reveal>
          <div>
            <h2 className="section-heading">Straightforward rates. Statutory confidence.</h2>
            <p className="section-description">
              Rates are inclusive of PF, ESI, weekly and yearly provisions, based on industry standards
              and calculated per 8-hour shift.
            </p>
          </div>
          <div className="rates__badge">
            <strong>8 hours</strong>
            <span>Standard shift</span>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container contact-section">
          <div className="contact-section__info" data-reveal>
            <span className="eyebrow">Contact us</span>
            <h2 className="section-heading">Let&rsquo;s discuss your requirement.</h2>
            <p className="section-description">
              Tell us the roles, site, shifts and timeline. Our Rohtak team will help shape the right plan.
            </p>
            <address className="contact-section__details">
              <p>
                B 18/629 Railway Road
                <br />
                Rohtak, Haryana, India
              </p>
              <p>
                <a href="tel:+917988135326">+91-7988135326</a>
                <br />
                <a href="tel:+919812045312">+91-9812045312</a>
              </p>
              <p>
                <a href="mailto:adsmanpower@gmail.com">adsmanpower@gmail.com</a>
                <br />
                <a href="mailto:pardeep_ads@yahoo.com">pardeep_ads@yahoo.com</a>
              </p>
            </address>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
