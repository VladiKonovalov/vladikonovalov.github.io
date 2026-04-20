import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects.json'
import { useI18n } from '../i18n/useI18n'

export default function Projects() {
  const { t } = useI18n()

  const projectsWithIds = projectsData.map((project, index) => ({
    ...project,
    _i18nId: `p${index}`,
  }))

  return (
    <section
      id="projects"
      className="section-container bg-gray-50 dark:bg-gray-800"
    >
      <h2 className="section-title">{t('sections.projects')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsWithIds.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}
