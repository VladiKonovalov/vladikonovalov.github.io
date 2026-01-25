import profileData from '../data/profile.json'

export default function About() {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt={profileData.name}
              className="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover object-top shadow-lg border-2 border-gray-200 dark:border-gray-700"
              style={{ objectPosition: 'center top' }}
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {profileData.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
