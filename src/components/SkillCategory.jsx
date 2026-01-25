export default function SkillCategory({ category, skills }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-all duration-200 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-800 dark:hover:text-primary-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
