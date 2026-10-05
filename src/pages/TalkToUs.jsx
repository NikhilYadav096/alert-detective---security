import ContactForm from '../components/ContactForm'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './TalkToUs.css'

const steps = [
  {
    num: '01',
    title: 'You tell us what you need',
    description: 'Roles, site, shift pattern, timeline — whatever you know so far is enough to start.',
  },
  {
    num: '02',
    title: 'We call you back',
    description: 'Usually within one business day, from our Rohtak office — not a call center or a bot.',
  },
  {
    num: '03',
    title: 'We shape a plan together',
    description: 'A compliant, costed workforce plan built around your actual site and timeline.',
  },
]

export default function TalkToUs() {
  useDocumentMeta({
    title: 'Talk to Our Team',
    description: 'Tell us about your workforce requirement — a real person from our Rohtak office will call you back, usually within one business day.',
    path: '/contact',
  })

  return (
    <>
      <section className="talk-hero">
        <div className="container talk-hero__inner" data-reveal>
          <span className="eyebrow">Get in touch</span>
          <h1>Let&rsquo;s talk about your team.</h1>
          <p>
            No call centers, no automated routing. Tell us the roles, site and timeline — someone
            from our Rohtak office reads every enquiry personally.
          </p>
        </div>
      </section>

      <section className="section section--surface talk-body">
        <div className="container talk-body__grid">
          <div className="talk-body__side" data-reveal>
            <div className="talk-person-card">
              <img src="/images/founder.jpg" alt="Pardeep Sharma, Founder & Managing Director" />
              <div className="talk-person-card__text">
                <p className="talk-person-card__quote">
                  &ldquo;Send us your requirement — I make sure the right person calls you
                  back.&rdquo;
                </p>
                <strong>Pardeep Sharma</strong>
                <span>Founder &amp; Managing Director</span>
              </div>
            </div>

            <ul className="talk-steps">
              {steps.map((step) => (
                <li key={step.num}>
                  <span className="talk-steps__num" aria-hidden="true">{step.num}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <address className="talk-direct">
              <span className="talk-direct__label">Prefer to just call or email?</span>
              <a href="tel:+917988135326" className="talk-direct__link">+91-7988135326</a>
              <a href="tel:+919812045312" className="talk-direct__link">+91-9812045312</a>
              <a href="mailto:adsmanpower@gmail.com" className="talk-direct__link">adsmanpower@gmail.com</a>
              <p className="talk-direct__address">
                B 18/629 Railway Road, Rohtak, Haryana, India
              </p>
            </address>
          </div>

          <div data-reveal>
            <ContactForm heading="Tell us about your team" />
          </div>
        </div>
      </section>
    </>
  )
}
