import useDocumentMeta from '../hooks/useDocumentMeta'
import './LegalPage.css'

const LAST_UPDATED = 'October 2026'

export default function Terms() {
  useDocumentMeta({
    title: 'Terms & Conditions',
    description: 'The terms that govern use of the Bahnewal & Co. website.',
    path: '/terms',
  })

  return (
    <section className="section section--surface legal-page">
      <div className="container">
        <div className="legal-page__header" data-reveal>
          <span className="legal-page__eyebrow">Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p className="legal-page__updated">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="legal-page__body" data-reveal>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using this website, you agree to be bound by these Terms &amp;
            Conditions. If you do not agree with any part of these terms, please do not use this
            website.
          </p>

          <h2>About This Website</h2>
          <p>
            This website is operated by Bahnewal &amp; Co., operating with Alert Detectives &amp;
            Security Pvt. Ltd., registered office at B 18/629 Railway Road, Rohtak, Haryana, India.
            It is published to describe our manpower, facility management and allied services, and to
            let prospective clients send us enquiries.
          </p>

          <h2>Informational Purpose</h2>
          <p>
            Content on this website — including service descriptions, scope of work, compliance
            summaries and rate structures — is provided for general information only. It does not
            constitute a binding offer or contract. Specific terms of engagement, pricing and service
            levels are agreed separately in writing with each client before any deployment begins.
          </p>

          <h2>Use of This Website</h2>
          <p>You agree to use this website only for lawful purposes. You must not:</p>
          <ul>
            <li>Attempt to gain unauthorized access to any part of this website or its systems</li>
            <li>Use automated means to scrape, copy or republish content without permission</li>
            <li>Submit false, misleading or malicious information through our enquiry form</li>
            <li>Use the website in any way that could damage, disable or impair its operation</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All text, graphics, logos and the overall design of this website are the property of
            Bahnewal &amp; Co. or its licensors, unless otherwise credited, and are protected by
            applicable intellectual property laws. You may view and print pages for personal,
            non-commercial reference, but may not reproduce, distribute or modify any content without
            our prior written consent.
          </p>

          <h2>Third-Party Links and Services</h2>
          <p>
            This website may link to or use third-party services, including the FormSubmit service
            used to deliver enquiry form submissions. We are not responsible for the content,
            accuracy or practices of third-party websites or services, and your use of them is
            subject to their own terms.
          </p>

          <h2>No Warranty</h2>
          <p>
            This website and its content are provided &ldquo;as is&rdquo; without warranties of any
            kind, express or implied. We do not warrant that the website will be uninterrupted,
            error-free or free of viruses or other harmful components.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Bahnewal &amp; Co. shall not be liable for any
            indirect, incidental or consequential damages arising from your use of, or inability to
            use, this website.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms &amp; Conditions are governed by the laws of India. Any disputes arising from
            the use of this website shall be subject to the exclusive jurisdiction of the courts at
            Rohtak, Haryana.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may revise these terms from time to time. Continued use of this website after changes
            are posted constitutes acceptance of the revised terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href="mailto:adsmanpower@gmail.com">adsmanpower@gmail.com</a> or{' '}
            <a href="tel:+917988135326">+91-7988135326</a>.
          </p>
        </div>

        <div className="legal-page__note" data-reveal>
          <p>
            This document is a general-purpose terms of use template for this website and is not a
            substitute for independent legal advice. Please have it reviewed by a qualified legal
            professional before relying on it for compliance purposes.
          </p>
        </div>
      </div>
    </section>
  )
}
