export type QA = { q: string; a: string }

/**
 * The questions people (usually recruiters) ask before they email. One list,
 * used by the FAQ accordion on the Contact view. Five questions, two or three
 * sentences each: the accordion sits in a fixed panel and more than that
 * pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I analyze data: cleaning and validating datasets, building dashboards and reports in Excel, Power BI and Looker Studio, and using SQL and Python for processing and descriptive analytics.',
  },
  {
    q: 'What kind of roles or projects are you open to?',
    a: 'Data analyst and reporting roles, including operational reporting, resource planning support, and data visualization work. Internship experience plus the Google Data Analytics certificate, and available for remote work.',
  },
  {
    q: 'What tools do you use?',
    a: 'Microsoft Excel (pivot tables, formulas), Power BI, Looker Studio, SQL with MySQL, PostgreSQL and MariaDB, and Python. React and TypeScript from my IT degree when a web layer is needed.',
  },
  {
    q: 'Where are you based?',
    a: 'Batangas, Philippines - GMT+8. I have worked with datasets and reporting cycles across different schedules, and I am set up for remote collaboration.',
  },
  {
    q: 'What happens after I write?',
    a: 'I reply within a couple of business days, usually sooner, and we can schedule a chat about the role or the data problem you need looked at.',
  },
]
