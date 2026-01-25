import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects.json'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-container bg-gray-50 dark:bg-gray-800"
    >
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}
