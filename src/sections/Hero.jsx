import profileData from '../data/profile.json'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="section-container text-center">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt={profileData.name}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover object-top border-4 border-primary-200 dark:border-primary-800 shadow-xl mx-auto"
                style={{ objectPosition: 'center top' }}
                loading="eager"
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary-400 dark:border-primary-500 opacity-20 animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {profileData.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary-600 dark:text-primary-400 font-semibold mb-6">
            {profileData.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {profileData.summary}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
