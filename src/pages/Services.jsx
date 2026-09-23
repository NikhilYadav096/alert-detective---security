import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroSplit from '../components/HeroSplit'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import BadgeStrip from '../components/BadgeStrip'
import CTASection from '../components/CTASection'
import { allServices } from '../data/services'
import { complianceBadges } from '../data/compliance'
import './Services.css'

export default function Services() {
  const [activeModalService, setActiveModalService] = useState(null)

  // Close modal on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setActiveModalService(null)
      }
    }
    if (activeModalService) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeModalService])

  return (
    <>
      <HeroSplit
        eyebrow="Services"
        title={<>Workforce &amp; Facility<br />Operations That Deliver.</>}
        description="From specialized single-department deployments to integrated multi-site manpower programs, Bahnewal &amp; Co. delivers dependable people, active supervision, and 100% statutory compliance designed around your operating reality."
        ctas={[
          { label: 'Plan your workforce', to: '/compliance' },
          { label: 'View all services', to: '#services-directory' },
        ]}
        art="corporate"
      />

      {/* ── Operational Capabilities Overview ─────────────────── */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeader
            eyebrow="Operational Capabilities"
            title="The people your facility needs, exactly when needed"
            description="Every engagement is engineered around your site requirements, shift structures, and rigorous service-level agreements."
          />

          <div className="services-capability-pillars">
            <div className="capability-pillar" data-reveal>
              <div className="capability-pillar__icon">01</div>
              <h3 className="capability-pillar__title">Facility Management</h3>
              <p className="capability-pillar__desc">
                Hospital-grade corporate housekeeping, mechanized floor care, grounds maintenance, and deep sanitization for corporate parks, hospitals, and educational campuses.
              </p>
              <a
                href="#services-directory"
                className="capability-pillar__link"
              >
                Explore Facility Services →
              </a>
            </div>

            <div className="capability-pillar" data-reveal>
              <div className="capability-pillar__icon">02</div>
              <h3 className="capability-pillar__title">Industrial Workforce</h3>
              <p className="capability-pillar__desc">
                High-volume skilled and unskilled contract labor for manufacturing lines, fulfillment centers, warehousing, packaging, and seasonal volume ramp-ups.
              </p>
              <a
                href="#services-directory"
                className="capability-pillar__link"
              >
                Explore Workforce Services →
              </a>
            </div>

            <div className="capability-pillar" data-reveal>
              <div className="capability-pillar__icon">03</div>
              <h3 className="capability-pillar__title">Technical &amp; Corporate</h3>
              <p className="capability-pillar__desc">
                Certified ITI electricians, HVAC &amp; plumbing technicians, front-office hospitality attendants, pantry teams, and turnkey contractual staffing.
              </p>
              <a
                href="#services-directory"
                className="capability-pillar__link"
              >
                Explore Technical &amp; Staffing →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Services Directory ────────────────────────────── */}
      <section className="section section--surface" id="services-directory">
        <div className="container">
          <div className="services-toolbar" data-reveal>
            <div className="services-toolbar__header">
              <span className="eyebrow">Service Catalog</span>
              <h2 className="section-heading">All Workforce &amp; Facility Services</h2>
              <p className="section-description">
                Click any service card to view complete operational deployment scope, equipment, and compliance frameworks.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="services-catalog-grid">
            {allServices.map((service) => (
              <ServiceCard
                key={service.slug}
                {...service}
                onClick={() => setActiveModalService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Operational Assurances & SLA Strip ────────────────── */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-header section-header--light" data-reveal>
            <span className="eyebrow">Workforce Dependability</span>
            <h2 className="section-heading">Execution discipline from day one</h2>
            <p className="section-description">
              How we ensure smooth operations and zero downtime across your facilities, manufacturing lines, and offices.
            </p>
          </div>

          <div className="assurances-grid">
            <div className="assurance-card" data-reveal>
              <span className="assurance-card__num">01</span>
              <h4>100% Shift Attendance</h4>
              <p>Active reserve reliever rosters prevent absent vacancies, keeping production lines and cleaning shifts fully manned.</p>
            </div>
            <div className="assurance-card" data-reveal>
              <span className="assurance-card__num">02</span>
              <h4>On-Site Supervision</h4>
              <p>Experienced site supervisors conduct shift briefings, track material consumption, and audit output quality daily.</p>
            </div>
            <div className="assurance-card" data-reveal>
              <span className="assurance-card__num">03</span>
              <h4>Statutory Indemnity</h4>
              <p>Zero principal employer liability. Verified PF, ESI, and GST deposit challans submitted transparently with every monthly invoice.</p>
            </div>
            <div className="assurance-card" data-reveal>
              <span className="assurance-card__num">04</span>
              <h4>Monthly Reviews</h4>
              <p>Structured monthly performance audits with key client stakeholders to continuously optimize shift structures and headcounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rates & Statutory Strip ───────────────────────────── */}
      <section className="section section--surface compliance-strip">
        <div className="container compliance-strip__inner" data-reveal>
          <div>
            <h2 className="section-heading">Straightforward rates. Statutory confidence.</h2>
            <p className="section-description">
              Rates are inclusive of PF and ESI, based on industry standards and structured for 8-hour
              shifts. We manage all legal obligations for minimum wages, weekly offs, leaves and holidays.
            </p>
          </div>
          <BadgeStrip badges={complianceBadges} tone="light" />
        </div>
      </section>

      {/* ── Scope Modal ───────────────────────────────────────── */}
      {activeModalService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setActiveModalService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="service-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="service-modal__close"
              onClick={() => setActiveModalService(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="service-modal__header">
              <span className="service-modal__tag">
                {activeModalService.division || 'Bahnewal & Co.'}
              </span>
              <h2 id="modal-title" className="service-modal__title">
                {activeModalService.title}
              </h2>
              <p className="service-modal__lead">
                {activeModalService.description}
              </p>
            </div>

            <div className="service-modal__body">
              <div className="service-modal__section">
                <h3>Deployment Scope &amp; Responsibilities</h3>
                <ul className="service-modal__scope-list">
                  {activeModalService.scope.map((item, idx) => (
                    <li key={idx}>
                      <span className="service-modal__check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-modal__section service-modal__section--compliance">
                <h3>Statutory &amp; Safety Compliance</h3>
                <p>{activeModalService.compliance}</p>
              </div>

              <div className="service-modal__meta-grid">
                <div className="service-modal__meta-item">
                  <span className="service-modal__meta-label">Standard Shift</span>
                  <strong>8-Hour Standard Roster</strong>
                </div>
                <div className="service-modal__meta-item">
                  <span className="service-modal__meta-label">Supervision</span>
                  <strong>Designated Site In-Charge</strong>
                </div>
                <div className="service-modal__meta-item">
                  <span className="service-modal__meta-label">Deployment Time</span>
                  <strong>48 to 72 Hours</strong>
                </div>
              </div>
            </div>

            <div className="service-modal__footer">
              <Link
                to="/compliance"
                className="btn btn-primary"
                onClick={() => setActiveModalService(null)}
              >
                Inquire About This Service →
              </Link>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveModalService(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <CTASection
        tone="orange"
        heading="Need a workforce plan built around your site?"
        description="Share your location, roles and timeline. We'll take it from there."
        cta={{ label: 'Contact Bahnewal & Co.', to: '/compliance' }}
      />
    </>
  )
}
