import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

/**
 * YOUR IDENTITY - the one source for everywhere Symon appears: the rail, the
 * phone profile header, the Home lede and headline, About and Contact.
 * Page-specific copy (projects, skills, education, FAQs) lives in the other
 * files in src/data/ and at the top of each view component.
 */

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  /** International format, as shown on the Contact page. */
  phone: string
  /** href for a dialer link on phones. */
  phoneHref: string
  location: string
  timezone: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Symon James Gasino',
  firstName: 'Symon',
  handle: '@symongasino',
  role: 'Data Analyst · Sales Reporting Analyst',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Google Data Analytics Professional Certificate',
  email: 'symongasino7@gmail.com',
  phone: '+63 960 934 3176',
  phoneHref: 'tel:+639609343176',
  location: 'Batangas, Philippines',
  timezone: 'GMT+8',
  stats: [
    { value: '6 mo', label: 'Analyst internship', Icon: Briefcase },
    { value: '5', label: 'Certifications', Icon: SealCheck },
    { value: 'GMT+8', label: 'Batangas · PH', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Turning raw data', line2: 'into clear decisions.' },
  hero: {
    body: 'Data analyst turning messy operational data into clean reports, dashboards, and decisions you can act on.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Portrait of Symon James Gasino',
  },
  socials: [
    // TODO(placeholder): paste your LinkedIn profile URL below.
    { label: 'LinkedIn profile', href: '#', iconPath: '/icons/linkedin.svg' },
    { label: 'Email me', href: 'mailto:symongasino7@gmail.com', iconPath: '/icons/linkedin.svg' },
  ],
}
