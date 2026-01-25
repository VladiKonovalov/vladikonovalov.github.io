import profileData from '../data/profile.json'

export default function Contact() {
  return (
    <section id="contact" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">Get In Touch</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${profileData.email}`}
            className="btn-primary inline-block"
          >
            Send Email
          </a>
          <a
            href={profileData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
