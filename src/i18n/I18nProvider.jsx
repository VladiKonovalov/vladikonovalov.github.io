import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const STORAGE_KEY = 'portfolio_language'

export const I18nContext = createContext(null)

function getInitialLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'he') return stored
  return 'en'
}

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj)
}

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  const isRTL = language === 'he'

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  }, [language, isRTL])

  const t = useCallback(
    (key, vars) => {
      const dict = translations[language] ?? translations.en
      const fallbackDict = translations.en
      const raw = getByPath(dict, key) ?? getByPath(fallbackDict, key) ?? key
      if (!vars) return raw
      return Object.entries(vars).reduce(
        (str, [k, v]) => String(str).replaceAll(`{${k}}`, String(v)),
        raw
      )
    },
    [language]
  )

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'he' ? 'en' : 'he'))
  }, [])

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t, isRTL }),
    [language, toggleLanguage, t, isRTL]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

