import profileData from '../data/profile.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} {profileData.name}. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <nav className="flex flex-wrap justify-center gap-4">
            {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-400 hover:text-white transition-colors capitalize"
              >
                {section === 'hero' ? 'Home' : section}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
