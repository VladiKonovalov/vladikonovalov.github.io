import profileData from '../data/profile.json'

export default function About() {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {profileData.about}
        </p>
      </div>
    </section>
  )
}
