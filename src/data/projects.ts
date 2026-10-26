/**
 * The three bodies of work the Projects view shows. Every fact comes from
 * Symon's resume - nothing invented. Edit here to update the cards, the
 * previews, and the detail dialogs.
 */

export type ProjectKind = 'Internship' | 'Data Analytics Project' | 'Capstone Project'

export type WorkProject = {
  id: string
  name: string
  kind: ProjectKind
  /** Where it happened, or "Personal / Academic" for coursework. */
  org: string
  /** One line on what the work was. */
  tagline: string
  /** Two or three sentences for the detail dialog. */
  description: string
  period?: string
  /** Tools actually used, per the resume. */
  tools: string[]
  /** Concrete things done, lifted from the resume bullets. */
  highlights: string[]
}

export const workProjects: WorkProject[] = [
  {
    id: 'internship',
    name: 'Data Analyst Intern - Batangas State University',
    kind: 'Internship',
    org: 'Batangas State University - The National Engineering University',
    period: 'January 2026 - June 2026',
    tagline: 'Operational and budget reporting across multiple university branches.',
    description:
      'Six months of hands-on analyst work on the university\u2019s operations side: consolidating multi-branch ICT equipment and budget datasets, validating them, and turning them into reports that supported a proposed three-year resource allocation plan.',
    tools: ['Microsoft Excel', 'Pivot Tables', 'Data Validation', 'Descriptive Analytics'],
    highlights: [
      'Analyzed multi-branch ICT equipment and budget datasets to assess resource requirements and support operational planning.',
      'Cleaned, structured, and validated Excel data to improve accuracy, consistency, completeness, and reporting reliability.',
      'Compared existing and proposed budget requirements to support three-year resource allocation and budget planning.',
      'Performed descriptive and comparative analysis to identify resource gaps, trends, priorities, and planning needs.',
      'Created Excel charts, visualizations, and analytical presentations to communicate findings to stakeholders.',
      'Consolidated data from multiple sources into structured reports for operational and budget planning.',
    ],
  },
  {
    id: 'operational-analysis',
    name: 'Operational Performance Analysis',
    kind: 'Data Analytics Project',
    org: 'Personal / Academic',
    tagline: 'Multi-period performance trends, compared across locations.',
    description:
      'An exploratory analysis project on multi-period operational datasets: building the pipeline from raw Excel data to pivot tables, metrics, and visual reports that make performance trends and variation between locations obvious at a glance.',
    tools: ['Microsoft Excel', 'Pivot Tables', 'Formulas', 'Data Visualization'],
    highlights: [
      'Analyzed multi-period operational datasets in Excel to identify performance trends, variations, and improvement areas.',
      'Used pivot tables, formulas, metrics, and visualizations to compare performance across locations and reporting periods.',
      'Presented analytical findings through visual reports to support operational monitoring and data-driven decision-making.',
    ],
  },
  {
    id: 'sulambi-vosa',
    name: 'Sulambi VOSA - Volunteer Management System',
    kind: 'Capstone Project',
    org: 'Academic capstone',
    tagline: 'A web system that centralizes volunteer data and adds analytics on top.',
    description:
      'Capstone build: a web-based system that centralizes volunteer records for an organization, with an analytics layer measuring volunteer satisfaction, qualitative feedback, and trends over time.',
    tools: ['SQL', 'Python', 'Descriptive Analytics', 'Web Development'],
    highlights: [
      'Developed a web-based system to centralize volunteer data and improve organizational processes.',
      'Designed analytics for volunteer satisfaction, qualitative feedback, and trends over time.',
      'Applied SQL and Python for data processing and descriptive analytics, supporting analytical reporting and decision-making.',
    ],
  },
]
