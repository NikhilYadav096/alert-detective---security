import HeroSplit from '../components/HeroSplit'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import CheckList from '../components/CheckList'
import StatCard from '../components/StatCard'
import PhotoArt from '../components/PhotoArt'
import { homeServices } from '../data/services'
import './Home.css'

const accountabilityPoints = [
  'Own PF Code and ESI Code',
  'Legal obligations and minimum wages met',
  '8-hour shifts at industry-standard rates',
  'Weekly offs, leaves and holidays managed',
]

const stats = [
  { value: '6', label: 'States served' },
  { value: '4', label: 'Core registrations' },
  { value: 'Monthly', label: 'Client reviews' },
]

export default function Home() {
  return (
    <>
      <HeroSplit
        eyebrow="40+ Years of Workforce Expertise"
        title={<>The right people.<br />Ready for real<br />operations.</>}
        description="End-to-end manpower solutions for government, public sector and private organizations across six states."
        ctas={[
          { label: 'Explore our services', to: '/services' },
          { label: 'Contact us', to: '/compliance', variant: 'secondary' },
        ]}
        trustPoints={['PF & ESI compliant', 'Skilled & unskilled teams']}
        art="hero"
        badge={{ value: '40+', label: 'Years of trusted service' }}
      />

      <section className="section section--surface">
        <div className="container">
          <SectionHeader
            eyebrow="What we do"
            title="Workforce solutions that keep business moving"
            description="From daily facility operations to specialist staffing, every team is selected, trained and managed around your needs."
          />
          <div className="grid grid-4">
            {homeServices.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        tone="orange"
        heading="One partner, multiple workforce needs."
        cta={{ label: 'Build your workforce plan', to: '/services' }}
      />

      <section className="section section--surface">
        <div className="container accountability">
          <div className="accountability__media" data-reveal>
            <PhotoArt variant="operations" ratio="4 / 3.4" />
          </div>
          <div className="accountability__content" data-reveal>
            <span className="eyebrow">Experience you can depend on</span>
            <h2 className="section-heading">Built for accountability, from deployment to review</h2>
            <p className="section-description">
              Our result-oriented teams work with integrity, confidentiality and a clear chain of
              responsibility. Monthly management meetings keep delivery aligned with every client.
            </p>
            <CheckList items={accountabilityPoints} />
            <div className="accountability__stats">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} tone="light" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        tone="tint"
        size="center"
        heading="Let's put the right team behind your operation."
        description="Tell us your workforce needs, location and timelines. We'll build a compliant plan."
        cta={{ label: 'Speak with our team', to: '/compliance' }}
      />
    </>
  )
}
