import type { ReactNode } from 'react'
import { workProjects, type WorkProject } from '@/data/projects'

/**
 * What the Projects dialogs show. Each panel is the work itself, in a plain
 * mac-style window: the project summary, the concrete bullets from the resume,
 * and the tools it was built with. No placeholder pages, no iframes.
 */

/** A mac window with a scrolling body. */
function SectionWindow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ppanel__url">
          <span className="ppanel__url-host">{label}</span>
        </span>
      </div>
      <div className="ppanel__scroll">{children}</div>
    </div>
  )
}

/** The inside of the window: summary, highlights, tools. */
function WorkArticle({ p }: { p: WorkProject }) {
  return (
    <article className="ppanel__article">
      <header className="ppanel__article-head">
        <span className="ppanel__article-kind">{p.kind}</span>
        <h3 className="ppanel__article-title">{p.name}</h3>
        {p.period && <span className="ppanel__article-meta">{p.period}</span>}
        <span className="ppanel__article-meta">{p.org}</span>
      </header>

      <p className="ppanel__article-lead">{p.description}</p>

      <h4 className="ppanel__article-subhead">What the work involved</h4>
      <ul className="ppanel__article-list" role="list">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <h4 className="ppanel__article-subhead">Tools and methods</h4>
      <ul className="ppanel__article-tools" role="list">
        {p.tools.map((t) => (
          <li key={t} className="ppanel__article-tool">
            {t}
          </li>
        ))}
      </ul>

      <p className="ppanel__article-note">
        Details drawn from my resume. Happy to walk through specifics in an interview.
      </p>
    </article>
  )
}

const byId = (id: string) => workProjects.find((p) => p.id === id) as WorkProject

export const InternshipPanel = () => (
  <SectionWindow label="project - internship report">
    <WorkArticle p={byId('internship')} />
  </SectionWindow>
)

export const OpsAnalysisPanel = () => (
  <SectionWindow label="project - operational analysis">
    <WorkArticle p={byId('operational-analysis')} />
  </SectionWindow>
)

export const SulambiPanel = () => (
  <SectionWindow label="project - sulambi vosa">
    <WorkArticle p={byId('sulambi-vosa')} />
  </SectionWindow>
)
