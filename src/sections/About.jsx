import profileData from '../data/profile.json'
import { useI18n } from '../i18n/useI18n'

export default function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">{t('sections.aboutMe')}</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {t('profile.about')}
        </p>
      </div>
    </section>
  )
}
