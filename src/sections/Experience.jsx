import CompanyExperience from '../components/CompanyExperience'
import profileData from '../data/profile.json'
import { useI18n } from '../i18n/useI18n'

export default function Experience() {
  const { t } = useI18n()

  const experiencesWithIds = profileData.experience.map((exp, index) => ({
    ...exp,
    _i18nId: `exp${index}`,
  }))

  // Group experiences by company
  const groupedExperiences = experiencesWithIds.reduce((acc, exp) => {
    const company = exp.company.trim();
    if (!acc[company]) {
      acc[company] = [];
    }
    acc[company].push(exp);
    return acc;
  }, {});

  // Convert to array and sort by most recent experience
  const companies = Object.entries(groupedExperiences).sort((a, b) => {
    const getStartYear = (period) => {
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };
    const aLatest = Math.max(...a[1].map(exp => getStartYear(exp.period)));
    const bLatest = Math.max(...b[1].map(exp => getStartYear(exp.period)));
    return bLatest - aLatest;
  });

  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">{t('sections.experience')}</h2>
      <div className="max-w-3xl mx-auto">
        {companies.map(([company, experiences], index) => (
          <CompanyExperience
            key={company}
            company={company}
            experiences={experiences}
            isLast={index === companies.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
