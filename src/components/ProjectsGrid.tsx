import { Fragment, useCallback, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X, CursorClick, Briefcase, ChartLine, Code } from '@/components/slab'
import { InternshipPanel, OpsAnalysisPanel, SulambiPanel } from './ProjectPanels'
import { workProjects, type WorkProject } from '@/data/projects'
import { useIsPhone } from '@/hooks/useMediaQuery'

/**
 * Projects, as one viewport in Home's bento language: a glass panel of cards,
 * one per body of work from the resume, each opening the full write-up in a
 * near-fullscreen dialog (see ProjectPanels).
 *
 * The dialog is a portal at z 8000. No iframes, no placeholder pages - every
 * card opens the real content, straight away.
 */

type Cat = 'work' | 'analytics' | 'builds'
const FILTERS: { key: Cat | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'work', label: 'Work' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'builds', label: 'Systems' },
]

type Card = {
  p: WorkProject
  index: string
  cat: Cat
  Icon: ComponentType<{ size?: number }>
  Section: ComponentType
  Preview: ComponentType
}

const CARDS: Card[] = [
  {
    p: workProjects[0],
    index: '01',
    cat: 'work',
    Icon: Briefcase,
    Section: InternshipPanel,
    Preview: InternshipPreview,
  },
  {
    p: workProjects[1],
    index: '02',
    cat: 'analytics',
    Icon: ChartLine,
    Section: OpsAnalysisPanel,
    Preview: OpsPreview,
  },
  {
    p: workProjects[2],
    index: '03',
    cat: 'builds',
    Icon: Code,
    Section: SulambiPanel,
    Preview: SulambiPreview,
  },
]

/* ---------- Previews (pure CSS mocks, no screenshots to fake) ---------- */

/** A paper mock of the internship's reporting pipeline. */
function InternshipPreview() {
  return (
    <div className="bento__media bento__doc" aria-hidden="true">
      <span className="bento__doc-eyebrow">Internship · Jan – Jun 2026</span>
      <span className="bento__doc-title">Multi-branch resource &amp; budget reporting.</span>
      <span className="bento__doc-flow">
        <i>Consolidate</i>
        <i>Clean</i>
        <i>Compare</i>
        <i className="is-on">Plan</i>
      </span>
      <span className="bento__doc-line" />
      <span className="bento__doc-line bento__doc-line--short" />
    </div>
  )
}

/** The analysis project, as a compact metric strip. */
function OpsPreview() {
  return (
    <div className="bento__media bento__chips" aria-hidden="true">
      <div className="bento__chip-row" data-dir="left">
        <div className="bento__chip-track">
          {['Pivot tables', 'Period-over-period', 'Location comparison', 'Trend analysis', ...Array(2).fill(0)].map((chip, i) =>
            typeof chip === 'string' ? (
              <span key={i} className="bento__chip">
                <ChartLine size={15} weight="duotone" />
                {chip}
              </span>
            ) : (
              <span key={`pad-${i}`} />
            ),
          )}
        </div>
      </div>
      <div className="bento__chip-row" data-dir="right">
        <div className="bento__chip-track">
          {[...Array(2).fill(0), 'Excel formulas', 'Metrics', 'Visual reports', 'Monitoring'].map((chip, i) =>
            typeof chip === 'string' ? (
              <span key={i} className="bento__chip">
                <ChartLine size={15} weight="duotone" />
                {chip}
              </span>
            ) : (
              <span key={`pad-${i}`} />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

/** The capstone, as its stack tags. */
function SulambiPreview() {
  return (
    <div className="bento__media bento__chips" aria-hidden="true">
      <div className="bento__chip-row" data-dir="left">
        <div className="bento__chip-track">
          {[...Array(2).fill(0), 'Web-based system', 'Volunteer records', 'Satisfaction analytics'].map((chip, i) =>
            typeof chip === 'string' ? (
              <span key={i} className="bento__chip" data-status="Live">
                <Code size={15} weight="duotone" />
                {chip}
              </span>
            ) : (
              <span key={`pad-${i}`} />
            ),
          )}
        </div>
      </div>
      <div className="bento__chip-row" data-dir="right">
        <div className="bento__chip-track">
          {['SQL', 'Python', 'Feedback trends', 'Reporting', ...Array(2).fill(0)].map((chip, i) =>
            typeof chip === 'string' ? (
              <span key={i} className="bento__chip">
                <Code size={15} weight="duotone" />
                {chip}
              </span>
            ) : (
              <span key={`pad-${i}`} />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

/* ---------- Dialog ----------
   A backdrop, a close button in the corner, and the work. No panel, no
   header: each Section brings its own window. */
function ProjectModal({ project, onClose, children }: { project: Card; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={project.p.name}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">{children}</div>
    </div>,
    document.body,
  )
}

/* ---------- The page ---------- */

export default function ProjectsGrid() {
  const [open, setOpen] = useState<Card | null>(null)
  const phone = useIsPhone()
  const [cat, setCat] = useState<Cat | 'all'>('all')
  const keep = (c: Card) => !phone || cat === 'all' || c.cat === cat
  const cards = CARDS.filter(keep)
  const triggerRef = useRef<HTMLElement | null>(null)

  const show = useCallback((c: Card, el: HTMLElement) => {
    triggerRef.current = el
    setOpen(c)
  }, [])
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          The work I have shipped so far.
        </h1>
        <p className="pgrid__lede">
          Internship reporting, analysis projects, and my capstone build - each card opens the full write-up.
        </p>
      </header>

      {phone && (
        <div className="pfilter" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className="pfilter__btn"
              aria-pressed={cat === f.key}
              onClick={() => setCat(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="home__glass pgrid__glass">
        {/* Hung on the sheet's top edge so it reads as a tag on the container.
            aria-hidden: the lede already says it. */}
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Click a card to open it
        </span>
        <div className="bento bento--projects">
          {cards.map((c) => (
            <Fragment key={c.p.id}>
              <button
                type="button"
                className="bento__card bento__card--btn"
                data-id={c.p.id}
                onClick={(e) => show(c, e.currentTarget)}
                aria-haspopup="dialog"
              >
                <span className="bento__head">
                  <span className="bento__icon">
                    <c.Icon size={22} />
                  </span>
                  <span className="bento__title">{c.p.name}</span>
                  <span className="bento__desc">{c.p.tagline}</span>
                  <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
                </span>
                <c.Preview />
              </button>
            </Fragment>
          ))}
        </div>
      </div>

      {open && (
        <ProjectModal project={open} onClose={close}>
          <open.Section />
        </ProjectModal>
      )}
    </section>
  )
}
