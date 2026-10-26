import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Terms of Service for this personal portfolio.
 */
export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: October 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>
            This is a personal portfolio to present {profile.name}&#39;s work, skills and
            experience. You are welcome to browse it and to get in touch about roles or projects.
          </p>

          <h2>About the work shown</h2>
          <p>
            The projects, experience and certifications shown here reflect work documented in my
            resume. Details are described to the best of my knowledge; nothing is meant to
            misrepresent employers, clients or results.
          </p>

          <h2>Ownership</h2>
          <p>
            The content of this site &#40;text, layout, and design&#41; belongs to me unless stated
            otherwise. Project write-ups describe work I performed for the organizations noted on
            each project page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
