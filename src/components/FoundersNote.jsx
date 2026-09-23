import './FoundersNote.css'

export default function FoundersNote() {
  return (
    <section className="section section--surface founders-note" id="founders-note">
      <div className="container">
        <div className="founders-note__card" data-reveal>
          <div className="founders-note__grid">
            <aside className="founders-note__media">
              <div className="founders-note__photo-frame">
                <img
                  src="/images/founder.jpg"
                  alt="Pardeep Bahnewal — Founder & Managing Director"
                  className="founders-note__photo"
                  loading="lazy"
                />
                <div className="founders-note__photo-badge">
                  <img src="/images/logo-shield.png" alt="Bahnewal & Co." className="founders-note__badge-icon" />
                  <div className="founders-note__badge-text">
                    <strong>40+ Years</strong>
                    <span>Workforce Leadership</span>
                  </div>
                </div>
              </div>
              <div className="founders-note__caption">
                <h3 className="founders-note__name">Pardeep Bahnewal</h3>
                <span className="founders-note__role">Founder &amp; Managing Director</span>
                <span className="founders-note__org">Bahnewal &amp; Co. · Alert Detectives &amp; Security</span>
                <span className="founders-note__location">Rohtak, Haryana, India</span>
              </div>
            </aside>

            <div className="founders-note__main">
              <div className="founders-note__header">
                <div className="founders-note__badge">
                  <span className="eyebrow">Founder&rsquo;s Note &amp; Leadership Philosophy</span>
                </div>
                <div className="founders-note__quote-icon" aria-hidden="true">&ldquo;</div>
              </div>

              <h2 className="founders-note__title">
                Four decades of putting people, compliance, and discipline at the center of workforce delivery.
              </h2>

              <div className="founders-note__body">
                <p>
                  When Bahnewal &amp; Co. was established more than 40 years ago in Rohtak, the contracting
                  and manpower landscape was widely seen as transactional. We founded this organization on a
                  different conviction: that workforce management is fundamentally about trust, dignity, and
                  unwavering accountability.
                </p>
                <p>
                  Our long-standing principle, <em>&ldquo;Maximum Service at Minimum Cost,&rdquo;</em> is never
                  about cutting corners. It is about disciplined management, eliminating operational waste,
                  and honoring every statutory promise — prompt PF and ESI compliance, legal wage protections,
                  and structured shift welfare.
                </p>
                <p>
                  As we continue to support prestigious government bodies, leading financial institutions,
                  and private enterprises across six states, our commitment remains personal. We don&rsquo;t
                  just dispatch workforce; we build dependable operational partnerships that stand the test of time.
                </p>
              </div>

              <div className="founders-note__pillars">
                <div className="founders-note__pillar">
                  <span className="founders-note__pillar-num">01</span>
                  <div>
                    <strong>Statutory Integrity</strong>
                    <p>Direct PF and ESI compliance with complete legal transparency.</p>
                  </div>
                </div>
                <div className="founders-note__pillar">
                  <span className="founders-note__pillar-num">02</span>
                  <div>
                    <strong>Dignity of Labor</strong>
                    <p>Fair, transparent compensation and on-time wage disbursement.</p>
                  </div>
                </div>
                <div className="founders-note__pillar">
                  <span className="founders-note__pillar-num">03</span>
                  <div>
                    <strong>Direct Supervision</strong>
                    <p>Active management oversight and monthly client performance reviews.</p>
                  </div>
                </div>
              </div>

              <div className="founders-note__signoff">
                <div className="founders-note__motto">
                  <span className="founders-note__motto-label">Operational Motto</span>
                  <span className="founders-note__motto-text">&ldquo;Maximum Service at Minimum Cost&rdquo;</span>
                </div>
                <div className="founders-note__origin">
                  <span className="founders-note__place">Rohtak, Haryana</span>
                  <span className="founders-note__since">Serving Across 6 States</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
