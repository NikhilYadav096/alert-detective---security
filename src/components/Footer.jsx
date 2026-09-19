import { statesOfOperation } from '../data/industries'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__col">
          <h2 className="site-footer__brand">Bahnewal &amp; Co.</h2>
          <p>
            Operating with Alert Detectives &amp; Security Pvt. Ltd. — trusted workforce partners for
            more than four decades.
          </p>
          <p className="site-footer__strap">Maximum Service at Minimum Cost.</p>
        </div>

        <div className="site-footer__col">
          <h3>Rohtak Office</h3>
          <p>
            B 18/629 Railway Road
            <br />
            Rohtak, Haryana, India
          </p>
          <ul className="site-footer__states">
            {statesOfOperation.map((state) => (
              <li key={state}>{state}</li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Contact</h3>
          <ul className="site-footer__contact">
            <li><a href="tel:+917988135326">+91-7988135326</a></li>
            <li><a href="tel:+919812045312">+91-9812045312</a></li>
            <li><a href="mailto:adsmanpower@gmail.com">adsmanpower@gmail.com</a></li>
            <li><a href="mailto:pardeep_ads@yahoo.com">pardeep_ads@yahoo.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Bahnewal &amp; Co. All rights reserved.</p>
        <p>GST · PF · ESIC · PAN compliant</p>
      </div>
    </footer>
  )
}
