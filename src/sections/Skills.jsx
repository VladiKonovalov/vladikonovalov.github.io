import SkillCategory from '../components/SkillCategory'
import profileData from '../data/profile.json'
import { useI18n } from '../i18n/useI18n'

export default function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">{t('sections.skills')}</h2>
      <div className="max-w-4xl mx-auto">
        {Object.entries(profileData.skills).map(([category, skills]) => (
          <SkillCategory key={category} category={category} skills={skills} />
        ))}
      </div>
    </section>
  )
}
