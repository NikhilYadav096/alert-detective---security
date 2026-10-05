import useDocumentMeta from '../hooks/useDocumentMeta'
import './LegalPage.css'

const LAST_UPDATED = 'October 2026'

export default function PrivacyPolicy() {
  useDocumentMeta({
    title: 'Privacy Policy',
    description: 'How Bahnewal & Co. collects, uses and protects information submitted through this website.',
    path: '/privacy-policy',
  })

  return (
    <section className="section section--surface legal-page">
      <div className="container">
        <div className="legal-page__header" data-reveal>
          <span className="legal-page__eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="legal-page__updated">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="legal-page__body" data-reveal>
          <h2>Introduction</h2>
          <p>
            Bahnewal &amp; Co. (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), operating with Alert
            Detectives &amp; Security Pvt. Ltd., respects your privacy. This policy explains what
            information this website collects, how it is used, and the choices you have. It applies
            only to this website and not to any offline services we provide.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information in two ways:</p>
          <ul>
            <li>
              <strong>Information you provide directly</strong> — when you submit the enquiry form,
              we collect your name, organization, phone number, email address, the services you
              select, and the details of your requirement.
            </li>
            <li>
              <strong>Information collected automatically</strong> — basic technical data such as
              browser type and general usage patterns may be collected if analytics tooling is
              enabled on this site. At the time of writing, no analytics or tracking scripts are
              active beyond what is disclosed in the cookie notice referenced below, which you can
              reopen at any time using the &ldquo;Cookie settings&rdquo; link in the site footer.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>Information submitted through the enquiry form is used only to:</p>
          <ul>
            <li>Respond to your workforce or facility services enquiry</li>
            <li>Understand your requirement, site and timeline</li>
            <li>Maintain a record of client communications</li>
          </ul>
          <p>We do not sell, rent or trade your personal information to third parties.</p>

          <h2>How Enquiries Are Processed</h2>
          <p>
            The enquiry form on this website is submitted through{' '}
            <a href="https://formsubmit.co" target="_blank" rel="noopener noreferrer">
              FormSubmit
            </a>
            , a third-party form-delivery service, and arrives directly in our team&rsquo;s inbox. We
            do not operate our own database or server to store submissions — FormSubmit acts solely
            as a delivery mechanism. Please review{' '}
            <a href="https://formsubmit.co/privacy-policy" target="_blank" rel="noopener noreferrer">
              FormSubmit&rsquo;s own privacy policy
            </a>{' '}
            for details on how it handles data in transit.
          </p>

          <h2>Cookies</h2>
          <p>
            This website uses a minimal, functional cookie/local-storage entry to remember that you
            have seen our cookie notice, so it does not reappear on every visit. If we enable
            analytics or marketing tools in the future, this policy and the cookie banner will be
            updated accordingly, and consent will be requested before any non-essential cookie is set.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect information submitted
            through this site, including serving the site exclusively over HTTPS. No method of
            transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request details of the information you have submitted to us, ask us to correct
            inaccurate information, or request that we delete your enquiry record, by contacting us
            using the details below.
          </p>

          <h2>Children&rsquo;s Privacy</h2>
          <p>
            This website is intended for business use and is not directed at children. We do not
            knowingly collect information from individuals under the age of 18.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time to reflect changes in our practices or for
            legal reasons. The &ldquo;Last updated&rdquo; date above indicates when this policy was
            last revised.
          </p>

          <h2>Contact Us</h2>
          <p>
            For any questions about this Privacy Policy, write to us at{' '}
            <a href="mailto:adsmanpower@gmail.com">adsmanpower@gmail.com</a>, call{' '}
            <a href="tel:+917988135326">+91-7988135326</a>, or write to us at B 18/629 Railway Road,
            Rohtak, Haryana, India.
          </p>
        </div>

        <div className="legal-page__note" data-reveal>
          <p>
            This policy is provided as a general reference for how this website operates and is not a
            substitute for independent legal advice. If you require a policy tailored to specific
            regulatory obligations, please have it reviewed by a qualified legal professional.
          </p>
        </div>
      </div>
    </section>
  )
}
