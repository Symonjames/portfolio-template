import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, GraduationCap, SealCheck } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who Symon is on the left, the portrait on
 * the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder: one display statement, one line of context,
 * then the four things he does - each carrying the marks of the tools it is
 * built with.
 */

const EXCEL = '/icons/data/excel.svg'
const POWER_BI = '/icons/data/power-bi.svg'
const LOOKER = '/icons/data/looker-studio.svg'
const SQL = '/icons/data/mysql.svg'
const POSTGRES = '/icons/ai/postgresql.svg'
const PYTHON = '/icons/data/python.svg'
const REACT = '/icons/ai/react.svg'

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Data cleaning & validation in Excel',
    marks: [{ src: EXCEL, name: 'Excel' }],
  },
  {
    index: '02',
    title: 'Dashboards in Power BI and Looker Studio',
    marks: [
      { src: POWER_BI, name: 'Power BI' },
      { src: LOOKER, name: 'Looker Studio' },
    ],
  },
  {
    index: '03',
    title: 'SQL and relational database querying',
    marks: [
      { src: SQL, name: 'SQL' },
      { src: POSTGRES, name: 'PostgreSQL' },
    ],
  },
  {
    index: '04',
    title: 'Python for data processing, plus React',
    marks: [
      { src: PYTHON, name: 'Python' },
      { src: REACT, name: 'React' },
    ],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I\u2019m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Data analyst, fresh BSIT graduate, and a stickler for clean data.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I turn messy operational data into reports people can act on.
            <span> The cleaning and validation come first - the insight only holds if the data does.</span>
          </p>

          <p className="agrid__note">
            <strong>Batangas State University</strong>, where I spent six months as a data
            analyst intern: consolidating multi-branch ICT equipment and budget datasets,
            validating them in Excel, and comparing existing against proposed budget
            requirements to support a three-year resource allocation plan.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, three cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <SealCheck size={18} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Google Data Analytics</span>
                <span className="agrid__cell-meta">Professional Certificate · 2026</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">{profile.timezone} · open to remote</span>
              </span>
            </span>

            <Link className="agrid__cell agrid__cell--wide" to="/showcase">
              <span className="agrid__cell-mark">
                <GraduationCap size={18} weight="duotone" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">BS Information Technology</span>
                <span className="agrid__cell-meta">Full education and certifications</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
