import HeroSplit from '../components/HeroSplit'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import BadgeStrip from '../components/BadgeStrip'
import CTASection from '../components/CTASection'
import { allServices } from '../data/services'
import { complianceBadges } from '../data/compliance'
import './Services.css'

export default function Services() {
  return (
    <>
      <HeroSplit
        eyebrow="Services"
        title={<>Services designed<br />for real operations.</>}
        description="From one specialist team to an integrated workforce program, we deliver people, supervision and compliance around your operating reality."
        ctas={[{ label: 'Plan your workforce', to: '/compliance' }]}
        art="corporate"
      />

      <section className="section section--surface">
        <div className="container">
          <SectionHeader
            eyebrow="Full-service capability"
            title="The people your operation needs, when it needs them"
            description="Every engagement is shaped around site requirements, shift structures and service standards."
          />
          <div className="grid grid-4">
            {allServices.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

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

      <CTASection
        tone="orange"
        heading="Need a workforce plan built around your site?"
        description="Share your location, roles and timeline. We'll take it from there."
        cta={{ label: 'Contact Bahnewal & Co.', to: '/compliance' }}
      />
    </>
  )
}
