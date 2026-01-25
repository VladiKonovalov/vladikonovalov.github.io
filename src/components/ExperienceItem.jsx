export default function ExperienceItem({ experience, isLast }) {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />
      )}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-gray-900" />
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {experience.role}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {experience.period}
          </span>
        </div>
        <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
          {experience.company}
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  )
}
