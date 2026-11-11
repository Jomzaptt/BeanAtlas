import { en } from './en'
import { zh } from './zh'

export const LOCALES = { en, zh }
export const STORAGE_KEY = 'beanatlas-lang'

export function getInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'zh') return stored
  } catch {
    // Ignore storage access issues during SSR/privacy-restricted modes.
  }

  return 'en'
}
