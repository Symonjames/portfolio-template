import { GraduationCap, Medal, SealCheck, MapPin } from '@/components/slab'

/**
 * EducationGrid - the Showcase route, holding education and certifications.
 *
 * One glass sheet like Projects and Services: the degree on the left, the
 * certification ledger on the right. Every entry comes straight from the
 * resume. Styles live at the end of src/styles/showcase.css (.edugrid).
 */
export default function ShowcaseGrid() {
  return (
    <section className="pgrid edugrid" aria-labelledby="showcase-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Education &amp; Certifications</span>
        <h1 className="pgrid__title" id="showcase-title">
          Where the training comes from.
        </h1>
        <p className="pgrid__lede">
          A BS in Information Technology, plus industry certifications in analytics, visualization and programming.
        </p>
      </header>

      <div className="home__glass edugrid__glass">
        {/* Left: the degree. */}
        <div className="edugrid__degree">
          <span className="edugrid__mark" aria-hidden="true">
            <GraduationCap size={26} weight="duotone" />
          </span>
          <span className="edugrid__kind">Education</span>
          <h2 className="edugrid__title">Bachelor of Science in Information Technology</h2>
          <p className="edugrid__org">
            Batangas State University - The National Engineering University
          </p>
          <p className="edugrid__meta">Class of 2026</p>
          <p className="edugrid__body">
            The degree gave me the foundations - programming, databases, and systems - that the
            analytics certifications and internship work now build on.
          </p>

          <span className="edugrid__cell">
            <MapPin size={16} weight="fill" aria-hidden="true" />
            <span>Batangas, Philippines · GMT+8</span>
          </span>
        </div>

        {/* Right: the certification ledger, one row per credential. */}
        <div className="edugrid__certs">
          <span className="edugrid__kind">Certifications</span>
          <ul className="edugrid__list" role="list">
            <li className="edugrid__cert">
              <span className="edugrid__cert-mark" aria-hidden="true">
                <SealCheck size={22} weight="fill" />
              </span>
              <span className="edugrid__cert-body">
                <span className="edugrid__cert-name">
                  Google Data Analytics Professional Certificate
                  <span className="edugrid__cert-year">2026</span>
                </span>
                <span className="edugrid__cert-org">Google</span>
              </span>
              <span className="edugrid__cert-ghost" aria-hidden="true">01</span>
            </li>
            <li className="edugrid__cert">
              <span className="edugrid__cert-mark" aria-hidden="true">
                <Medal size={22} weight="duotone" />
              </span>
              <span className="edugrid__cert-body">
                <span className="edugrid__cert-name">
                  Data Visualization with Power BI
                  <span className="edugrid__cert-year">2025</span>
                </span>
                <span className="edugrid__cert-org">Great Learning Academy</span>
              </span>
              <span className="edugrid__cert-ghost" aria-hidden="true">02</span>
            </li>
            <li className="edugrid__cert">
              <span className="edugrid__cert-mark" aria-hidden="true">
                <Medal size={22} weight="duotone" />
              </span>
              <span className="edugrid__cert-body">
                <span className="edugrid__cert-name">
                  IT Customer Support Basics
                  <span className="edugrid__cert-year">2025</span>
                </span>
                <span className="edugrid__cert-org">Cisco Networking Academy</span>
              </span>
              <span className="edugrid__cert-ghost" aria-hidden="true">03</span>
            </li>
            <li className="edugrid__cert">
              <span className="edugrid__cert-mark" aria-hidden="true">
                <Medal size={22} weight="duotone" />
              </span>
              <span className="edugrid__cert-body">
                <span className="edugrid__cert-name">
                  Java Programming NC III
                  <span className="edugrid__cert-year">2026</span>
                </span>
                <span className="edugrid__cert-org">TESDA</span>
              </span>
              <span className="edugrid__cert-ghost" aria-hidden="true">04</span>
            </li>
            <li className="edugrid__cert">
              <span className="edugrid__cert-mark" aria-hidden="true">
                <Medal size={22} weight="duotone" />
              </span>
              <span className="edugrid__cert-body">
                <span className="edugrid__cert-name">
                  Data Analytics Essentials
                  <span className="edugrid__cert-year">2026</span>
                </span>
                <span className="edugrid__cert-org">Cisco Networking Academy</span>
              </span>
              <span className="edugrid__cert-ghost" aria-hidden="true">05</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
