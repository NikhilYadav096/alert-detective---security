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
            description="Five core registrations and certified quality standards support responsible workforce administration."
          />
          <div className="grid grid-5">
            {complianceCards.map((card) => (
              <ComplianceCard key={card.code} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint iso-section" id="iso-certificate">
        <div className="container">
          <div className="iso-card" data-reveal>
            <div className="iso-card__content">
              <div className="iso-card__badge-wrap">
                <span className="eyebrow">Accredited Quality Standard</span>
                <span className="iso-tag">ISO 9001:2015</span>
              </div>
              <h2 className="section-heading">Certified Quality Management System</h2>
              <p className="section-description">
                Bahnewal &amp; Co. has been assessed and certified conforming to the requirements of{' '}
                <strong>ISO 9001:2015</strong>, accredited by the{' '}
                <strong>United Kingdom Accreditation Forum (UKAF)</strong>. This guarantees structured,
                audited service standards across every workforce deployment.
              </p>

              <div className="iso-card__specs">
                <div className="iso-card__spec">
                  <span className="iso-card__spec-label">Accreditation Body</span>
                  <span className="iso-card__spec-val">UKAF CERT Limited (London, UK)</span>
                </div>
                <div className="iso-card__spec">
                  <span className="iso-card__spec-label">Certified Standard</span>
                  <span className="iso-card__spec-val">ISO 9001:2015 (QMS)</span>
                </div>
                <div className="iso-card__spec">
                  <span className="iso-card__spec-label">Audited Organization</span>
                  <span className="iso-card__spec-val">Bahnewal &amp; Co. (Rohtak, Haryana)</span>
                </div>
                <div className="iso-card__spec">
                  <span className="iso-card__spec-label">Scope of Activities</span>
                  <span className="iso-card__spec-val">
                    Manpower supply, skilled, semi-skilled and unskilled labour, housekeeping,
                    facility management, loading, unloading, and warehouse operations.
                  </span>
                </div>
              </div>

              <div className="iso-card__actions">
                <a
                  href="/documents/iso-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  View Official Certificate (PDF)
                </a>
                <a
                  href="/images/iso-certificate.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Inspect Certificate Image
                </a>
              </div>
            </div>

            <div className="iso-card__preview">
              <a
                href="/documents/iso-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="iso-preview-link"
                title="Click to view official ISO Certificate"
              >
                <img
                  src="/images/iso-certificate.jpg"
                  alt="ISO 9001:2015 Certificate of Registration - Bahnewal & Co."
                  className="iso-preview-img"
                  loading="lazy"
                />
                <div className="iso-preview-overlay">
                  <span className="btn btn-white">View Full PDF &rarr;</span>
                </div>
              </a>
            </div>
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
