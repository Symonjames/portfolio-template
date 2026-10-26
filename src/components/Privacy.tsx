import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Privacy Policy for this personal portfolio.
 */
export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: October 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>
            This site is the personal portfolio of {profile.name}, {profile.role}, based in{' '}
            {profile.location}. It applies to this website only.
          </p>

          <h2>What is collected</h2>
          <p>
            This site does not run analytics, advertising, or tracking scripts. Nothing about your
            visit is recorded by the site itself. The contact form has a hidden anti-spam field
            that bots may fill in; it is not personal data and is only used to filter spam.
          </p>

          <h2>What happens to a message you send</h2>
          <p>
            When you use the contact form, your name, email address and message are sent to me so I
            can reply. They are not shared with anyone else and are not added to any mailing list.
          </p>

          <h2>How long it is kept</h2>
          <p>
            Messages are kept only as long as needed to answer them, or for as long as a
            conversation about work is useful. You can ask me to delete your message at any time.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
