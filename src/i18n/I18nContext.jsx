import { createContext, useContext, useState, useCallback } from 'react'
import { getInitialLang, LOCALES, STORAGE_KEY } from './locales'

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  const setLang = useCallback((l) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // Ignore storage failures so language switching still works.
    }
  }, [])

  const t = useCallback(
    (key) => {
      const keys = key.split('.')
      let value = LOCALES[lang]
      for (const k of keys) {
        if (value == null) return key
        value = value[k]
      }
      return value ?? key
    },
    [lang],
  )

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
