export default function CompanyExperience({ company, experiences, isLast }) {
  // Sort experiences by period (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    // Extract start year from period (e.g., "2022 - 2024" -> 2022)
    const getStartYear = (period) => {
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };
    return getStartYear(b.period) - getStartYear(a.period);
  });

  // Calculate overall period span
  const getOverallPeriod = () => {
    const years = sortedExperiences.flatMap(exp => {
      const matches = exp.period.match(/(\d{4})/g);
      return matches ? matches.map(y => parseInt(y)) : [];
    });
    if (years.length === 0) return '';
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    const latestPeriod = sortedExperiences[0].period;
    const isPresent = latestPeriod.includes('Present');
    return `${minYear} - ${isPresent ? 'Present' : maxYear}`;
  };

  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />
      )}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-gray-900" />
      
      {/* Company Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400">
            {company}
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {getOverallPeriod()}
          </span>
        </div>
        
        {/* Multiple Roles */}
        <div className="space-y-4">
          {sortedExperiences.map((exp, index) => (
            <div key={index} className={index > 0 ? "pt-4 border-t border-gray-200 dark:border-gray-700" : ""}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {exp.role}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
