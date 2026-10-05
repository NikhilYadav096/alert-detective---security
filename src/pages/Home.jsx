import HeroSplit from '../components/HeroSplit'
import ServiceCard from '../components/ServiceCard'
import CheckList from '../components/CheckList'
import ClientLogos from '../components/ClientLogos'
import Testimonials from '../components/Testimonials'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { homeServices } from '../data/services'
import { Link } from 'react-router-dom'
import './Home.css'

/* ──────────────────────────────────────────────────────────────
   HOME PAGE — 5 distinct layout families (skill: no repetition)
   1. Hero           — split (text left / image right)
   2. Stats strip    — horizontal dark bar, plain numbers
   3. Services       — asymmetric photo-card bento
   4. Operations     — full-bleed photography with overlay text
   5. CTA            — editorial typographic, centered, no color band
   ────────────────────────────────────────────────────────────── */

const stats = [
  { value: '40+', label: 'Years active' },
  { value: '6', label: 'States served' },
  { value: '50+', label: 'Client engagements' },
  { value: 'ISO 9001', label: 'Quality certified' },
]

const accountabilityPoints = [
  'Own PF Code and ESI Code — no outsourcing',
  'All statutory requirements built into delivery',
  'Monthly management reviews with every client',
  'Compliant across 6 states without exception',
]

export default function Home() {
  useDocumentMeta({
    title: 'Manpower & Workforce Solutions',
    description: 'End-to-end manpower solutions for government, public sector and private organizations across six states. 40+ years of experience, ISO 9001:2015 certified, PF/ESI compliant.',
    path: '/',
  })

  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <HeroSplit
        title={<>The right people.<br />Ready for real<br />operations.</>}
        description="End-to-end manpower solutions for government, public sector and private organizations — delivered with accountability since 1980."
        ctas={[
          { label: 'Explore services', to: '/services' },
          { label: 'Contact us', to: '/contact', variant: 'secondary' },
        ]}
        art="hero"
      />

      {/* ── 2. Stats strip — dark horizontal, numbers only ── */}
      <div className="stats-strip">
        <div className="container stats-strip__inner">
          {stats.map(({ value, label }) => (
            <div className="stats-strip__item" key={label}>
              <strong className="stats-strip__value">{value}</strong>
              <span className="stats-strip__label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. Services — asymmetric bento (not 4-equal-cards) ── */}
      <section className="section section--surface">
        <div className="container">
          <div className="services-intro" data-reveal>
            <h2 className="section-heading">What we deliver</h2>
            <div className="services-intro__right">
              <p className="section-description">From daily facility operations to specialist staffing — every team selected, trained and managed to your requirements.</p>
              <Link to="/services" className="btn btn-secondary">All services →</Link>
            </div>
          </div>
          <div className="services-bento">
            {homeServices.map((service, i) => (
              <ServiceCard key={service.slug} {...service} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Full-bleed operations — image as layout element ── */}
      <section className="operations-scene">
        <div className="operations-scene__bg">
          <img src="/images/operations.jpg" alt="Skilled industrial worker at heavy rolling machine in manufacturing facility" loading="lazy" />
        </div>
        <div className="container operations-scene__body">
          <div className="operations-scene__content" data-reveal>
            <span className="eyebrow">Experience you can depend on</span>
            <h2>Built for accountability,<br />from deployment to review.</h2>
            <p>Monthly management reviews, a clear chain of responsibility and built-in statutory compliance — so your operations never run on assumptions.</p>
            <CheckList items={accountabilityPoints} className="check-list--on-navy" />
            <Link to="/about" className="btn btn-white" style={{ marginTop: '36px' }}>
              Our approach →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Client Logos — "Worked With" section ──────────── */}
      <ClientLogos />

      {/* ── 6. Client Testimonials & Leadership Endorsements ── */}
      <Testimonials />

      {/* ── 7. Typographic CTA — no color band, editorial ─── */}
      <section className="home-cta section--surface">
        <div className="container home-cta__inner" data-reveal>
          <div className="home-cta__rule" />
          <h2 className="home-cta__heading">Let's put the right team<br />behind your operation.</h2>
          <Link to="/contact" className="btn btn-primary">
            Speak with our team →
          </Link>
          <p className="home-cta__note">Bahnewal &amp; Co. · Rohtak, Haryana · Est. 1980</p>
        </div>
      </section>
    </>
  )
}
