import { useI18n } from '../i18n/useI18n'

function FlagUS(props) {
  return (
    <svg viewBox="0 0 64 48" width="18" height="14" {...props}>
      <defs>
        <clipPath id="us-clip">
          <rect width="64" height="48" rx="4" ry="4" />
        </clipPath>
      </defs>
      <g clipPath="url(#us-clip)">
        <rect width="64" height="48" fill="#fff" />
        {Array.from({ length: 7 }).map((_, i) => (
          <rect key={i} y={i * 8} width="64" height="4" fill="#B22234" />
        ))}
        <rect width="28" height="20" fill="#3C3B6E" />
        {/* simple star dots */}
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 6 }).map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={3 + col * 4.2}
              cy={3 + row * 3.6}
              r="0.7"
              fill="#fff"
              opacity="0.95"
            />
          ))
        )}
      </g>
      <rect width="64" height="48" rx="4" ry="4" fill="none" stroke="rgba(0,0,0,0.12)" />
    </svg>
  )
}

function FlagIL(props) {
  return (
    <svg viewBox="0 0 64 48" width="18" height="14" {...props}>
      <defs>
        <clipPath id="il-clip">
          <rect width="64" height="48" rx="4" ry="4" />
        </clipPath>
      </defs>
      <g clipPath="url(#il-clip)">
        <rect width="64" height="48" fill="#fff" />
        <rect y="6" width="64" height="6" fill="#0038B8" />
        <rect y="36" width="64" height="6" fill="#0038B8" />
        {/* simplified Star of David */}
        <g transform="translate(32 24)" fill="none" stroke="#0038B8" strokeWidth="2.2">
          <path d="M0-8 L6 3 L-6 3 Z" />
          <path d="M0 8 L6-3 L-6-3 Z" />
        </g>
      </g>
      <rect width="64" height="48" rx="4" ry="4" fill="none" stroke="rgba(0,0,0,0.12)" />
    </svg>
  )
}

export default function LanguageToggle({ className = '' }) {
  const { language, toggleLanguage, t } = useI18n()
  const nextLanguage = language === 'en' ? 'he' : 'en'
  const nextLanguageName = t(`language.names.${nextLanguage}`)

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 text-sm font-semibold text-gray-900 dark:text-gray-100 ${className}`}
      aria-label={t('language.switchTo', { language: nextLanguageName })}
    >
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true" className="inline-flex items-center">
          {nextLanguage === 'en' ? <FlagUS /> : <FlagIL />}
        </span>
        <span>{nextLanguageName}</span>
      </span>
    </button>
  )
}

