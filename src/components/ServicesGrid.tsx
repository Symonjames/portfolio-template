import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

/**
 * ServicesGrid - the Skills view on one glass sheet.
 *
 * Three bands, top to bottom: the three-step analysis method (on a dark plate
 * so it is the first thing the eye lands on), and the five skill areas as
 * cards that carry the marks of the tools each one is built with.
 * Same object language as Home and Projects: the glass, the bento card,
 * plated marks, orange for the index and the accent.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Step 1',
    body: 'Frame the question: what decision needs support, and which data answers it.',
    Icon: MagnetStraight,
    chips: ['KPI tracking', 'Resource planning', 'Business process analysis'],
  },
  {
    index: '02',
    label: 'Step 2',
    body: 'Clean and validate: structure, consistency, completeness checked before anything is charted.',
    Icon: Timer,
    chips: ['Data cleaning', 'Validation', 'Excel structuring'],
  },
  {
    index: '03',
    label: 'Step 3',
    body: 'Analyze and present: descriptive and comparative analysis, communicated in visuals stakeholders can act on.',
    Icon: Trophy,
    chips: ['Dashboards', 'Analytical reporting', 'Data presentation'],
  },
]

/* ---------- The skills ---------- */

const EXCEL = '/icons/data/excel.svg'
const POWER_BI = '/icons/data/power-bi.svg'
const LOOKER = '/icons/data/looker-studio.svg'
const SQL = '/icons/data/mysql.svg'
const POSTGRES = '/icons/ai/postgresql.svg'
const PYTHON = '/icons/data/python.svg'
const REACT = '/icons/ai/react.svg'

type Skill = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SKILLS: Skill[] = [
  {
    index: '01',
    title: 'Data cleaning & validation',
    description: 'Raw data in, reliable data out: accuracy, consistency, completeness.',
    chip: 'Microsoft Excel',
    logos: [EXCEL],
    bullets: [
      'Structured and validated Excel datasets for reporting reliability',
      'Data validation and completeness checks before analysis',
      'Exploratory and trend analysis on messy operational data',
    ],
  },
  {
    index: '02',
    title: 'Dashboards & visualization',
    description: 'Reports and dashboards that make findings obvious at a glance.',
    chip: 'Power BI · Looker Studio',
    logos: [POWER_BI, LOOKER],
    bullets: [
      'Dashboard development in Power BI and Looker Studio',
      'Excel charts and analytical presentations for stakeholders',
      'Visual reporting that supports monitoring and decisions',
    ],
  },
  {
    index: '03',
    title: 'SQL & database querying',
    description: 'Query and manage relational databases with confidence.',
    chip: 'SQL · MySQL · PostgreSQL',
    logos: [SQL, POSTGRES],
    bullets: [
      'Relational database querying in MySQL and PostgreSQL',
      'MariaDB administration basics',
      'SQL for data processing and descriptive analytics',
    ],
  },
  {
    index: '04',
    title: 'Python & web tooling',
    description: 'Python for data processing, plus front-end fundamentals.',
    chip: 'Python · React · TypeScript',
    logos: [PYTHON, REACT],
    bullets: [
      'Python for data processing and descriptive analytics',
      'React and TypeScript fundamentals from my IT degree',
      'Analytics layered onto web systems (capstone work)',
    ],
  },
  {
    index: '05',
    title: 'Operational & KPI analysis',
    description: 'Analysis aimed at planning: gaps, trends, priorities.',
    chip: 'Descriptive analytics',
    logos: [EXCEL, POWER_BI],
    bullets: [
      'KPI tracking and performance analysis across periods',
      'Comparative analysis for resource allocation and budgets',
      'Process improvement and data-driven decision support',
    ],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Skills</span>
        <h1 className="pgrid__title" id="services-title">
          How I take a dataset from raw to decision-ready.
        </h1>
        <p className="pgrid__lede">
          The tools and methods I work with, and the way I run an analysis from start to finish.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate: the headline on the left, the three stages wired in
            order on the right. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">My method</span>
            <h2 className="sgrid__method-title" id="method-title">
              Frame.
              <br />
              <span>Clean. Analyze. Present.</span>
            </h2>
            <p className="sgrid__method-sub">
              Every analysis follows the same disciplined path, so the results hold up when someone checks them.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Skills, listed.</h2>
            <p className="sgrid__offers-sub">What each area covers in practice.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SKILLS.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
