import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import useTheme from '../hooks/useTheme'
import './Header.css'

export default function Header() {
  const { lang, setLang, t } = useI18n()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-brand">
          <span className="header-icon">☕</span>
          <span className="header-title">{t('header.title')}</span>
          <span className="header-tagline">{t('header.tagline')}</span>
        </Link>
        <div className="header-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? '☽' : '☼'}
          </button>
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            title={lang === 'en' ? '切换到中文' : 'Switch to English'}
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  )
}
