import { Outlet, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import Header from './Header'
import './Layout.css'

export default function Layout() {
  const { t } = useI18n()
  const location = useLocation()

  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main className="main" id="main-content">
        <div className="page-transition" key={location.pathname}>
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-brand">☕ BeanAtlas</span>
          <span className="footer-text">{t('footer.text')}</span>
        </div>
      </footer>
    </div>
  )
}
