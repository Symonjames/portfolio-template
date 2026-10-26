import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Gauge,
  Medal,
  Stack,
  AddressBook,
  ChartPie,
  Table,
  Briefcase,
  SealCheck,
} from '@/components/slab'
import { tools } from './ToolsMarquee'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link. Nothing here invents a fact - the projects, the tools, and the
 * credentials are the same records the views render in full.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const SKILL_ICONS = [ChartPie, Table, Briefcase, Stack, AddressBook]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(tools.length / 2)
  const toolRows = [tools.slice(0, half), tools.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects: the analysis method steps drift on a looped track. */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="Internship reporting, analysis projects, and a capstone web system." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {['Data Analyst Intern - BatStateU', 'Operational Performance Analysis', 'Sulambi VOSA', 'Multi-branch budget reporting'].map((label) => (
              <span key={label} className="bento__shot bento__shot--doc">
                {label}
              </span>
            ))}
            {['Data Analyst Intern - BatStateU', 'Operational Performance Analysis', 'Sulambi VOSA', 'Multi-branch budget reporting'].map((label, i) => (
              <span key={`dup-${i}`} className="bento__shot bento__shot--doc">
                {label}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: a fanned stack of photos. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Fresh BSIT graduate with internship experience in operational reporting." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {[profile.avatarSrc, `${profile.avatarSrc}?2`, `${profile.avatarSrc}?3`].map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* Skills: the daily tools as two chip rows scrolling against each other. */}
      <Link to="/services" className="bento__card bento__card--ai">
        <CardHead Icon={Gauge} title="Skills" desc="Excel, SQL, Power BI and Python, in daily rotation." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((t, i) => {
                  const ChipIcon = SKILL_ICONS[i % SKILL_ICONS.length]
                  return (
                    <span key={`${t.name}-${i}`} className="bento__chip">
                      <ChipIcon size={15} weight="duotone" />
                      {t.name}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Credentials: the badge that matters, on its plate. */}
      <Link to="/showcase" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="Google Data Analytics, Power BI, Java NC III, Cisco - and a BSIT degree." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <span className="bento__badge-ring-in">
              <SealCheck size={34} weight="fill" />
            </span>
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            Google Data Analytics
          </span>
        </div>
      </Link>

      {/* Skills view: the five skill areas as a compact index. */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="What I can do" desc="From raw, messy data to reports and dashboards people can act on." />
        <ul className="bento__media bento__offers" role="list">
          {['Data cleaning & validation', 'Dashboards & visualization', 'SQL & database querying', 'Python & web tooling', 'Operational & KPI analysis'].map((title, i) => {
            const Icon = SKILL_ICONS[i % SKILL_ICONS.length]
            return (
              <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
                <span className="bento__offer-tile">
                  <Icon size={15} weight="duotone" aria-hidden="true" />
                </span>
                <span className="bento__offer-text">
                  <span className="bento__offer-title">{title}</span>
                </span>
                <span className="bento__offer-num" aria-hidden="true">
                  0{i + 1}
                </span>
              </li>
            )
          })}
        </ul>
      </Link>
    </nav>
  )
}
