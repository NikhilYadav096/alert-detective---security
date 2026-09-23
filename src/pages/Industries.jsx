import HeroSplit from '../components/HeroSplit'
import SectionHeader from '../components/SectionHeader'
import IndustryCard from '../components/IndustryCard'
import ClientList from '../components/ClientList'
import CTASection from '../components/CTASection'
import { environments, sectors, notableClients, statesOfOperation } from '../data/industries'
import './Industries.css'

export default function Industries() {
  return (
    <>
      <HeroSplit
        eyebrow="Industries"
        title={<>Workforce support<br />for every operating<br />environment.</>}
        description="From controlled workplaces to demanding field sites, our teams arrive prepared for the realities of your sector."
        ctas={[{ label: 'Talk to our team', to: '/compliance' }]}
        art="facilities"
      />

      <section className="section section--surface">
        <div className="container">
          <SectionHeader
            eyebrow="Where we work"
            title="Teams shaped around the environment"
            description="Supervision, training and deployment aligned to each workplace."
          />
          <div className="grid grid-3">
            {environments.map((env) => (
              <IndustryCard key={env.title} {...env} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeader
            eyebrow="Sector coverage"
            title="Ready for specialized workplaces"
          />
          <ul className="sector-grid">
            {sectors.map((sector) => (
              <li key={sector} data-reveal>{sector}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container industries-clients">
          <div className="industries-clients__content" data-reveal>
            <span className="eyebrow">Notable clients</span>
            <h2 className="section-heading">Trusted where consistency matters</h2>
            <p className="section-description">
              Long standing support for institutions, public organizations and private enterprises.
            </p>
            <ClientList clients={notableClients} tone="pills" />
          </div>
          <div data-reveal>
            <ClientList title="States of operation" clients={statesOfOperation} tone="card" />
          </div>
        </div>
      </section>

      <CTASection
        tone="orange"
        heading="The operating environment changes. The discipline stays."
        cta={{ label: 'Discuss your requirement', to: '/compliance' }}
      />
    </>
  )
}
