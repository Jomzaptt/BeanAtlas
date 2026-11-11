import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import WorldMap from '../components/WorldMap'
import MapLegend from '../components/MapLegend'
import VarietyCloud from '../components/VarietyCloud'
import { CONTINENTS, getTotalProduction } from '../data/countries'
import './HomePage.css'

export default function HomePage() {
  const navigate = useNavigate()
  const { t } = useI18n()
  const total = getTotalProduction()
  const totalCountries = CONTINENTS.reduce(
    (sum, c) => sum + c.countries.length,
    0,
  )

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('home.hero.title') }} />
          <p className="hero-subtitle" dangerouslySetInnerHTML={{ __html: t('home.hero.subtitle') }} />
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">
                {totalCountries}
              </span>
              <span className="hero-stat-label">{t('home.hero.countries')}</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">
                {(total / 1000000).toFixed(1)}M
              </span>
              <span className="hero-stat-label">{t('home.hero.production')}</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">23.5°N – 23.5°S</span>
              <span className="hero-stat-label">{t('home.hero.belt')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <WorldMap />
          </div>
          <div className="map-legend-wrapper">
            <MapLegend />
          </div>
        </div>
      </section>

      <section className="belt-section">
        <div className="container">
          <hr className="hand-divider" />
          <h2 className="section-title">{t('home.belt.title')}</h2>
          <p className="section-text" dangerouslySetInnerHTML={{ __html: t('home.belt.text') }} />
          <div className="bean-belt-detail">
            <div className="belt-stat">
              <span className="belt-stat-icon">🌎</span>
              <span className="belt-stat-value">41%</span>
              <span className="belt-stat-text">{t('home.belt.southAmerica')}</span>
            </div>
            <div className="belt-stat">
              <span className="belt-stat-icon">🌏</span>
              <span className="belt-stat-value">27%</span>
              <span className="belt-stat-text">{t('home.belt.southeastAsia')}</span>
            </div>
            <div className="belt-stat">
              <span className="belt-stat-icon">🌍</span>
              <span className="belt-stat-value">17%</span>
              <span className="belt-stat-text">{t('home.belt.africa')}</span>
            </div>
            <div className="belt-stat">
              <span className="belt-stat-icon">🌎</span>
              <span className="belt-stat-value">10%</span>
              <span className="belt-stat-text">{t('home.belt.centralAmerica')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="continents-section">
        <div className="container">
          <hr className="hand-divider" />
          <h2 className="section-title">{t('home.continents.title')}</h2>
          <div className="continent-grid">
            {CONTINENTS.map((continent) =>
              continent.countries.length > 0 ? (
                <div
                  key={continent.id}
                  className="continent-card card continent-card-clickable"
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/continent/${continent.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') navigate(`/continent/${continent.id}`)
                  }}
                >
                  <h3 className="continent-name">{t('continent.' + continent.id)}</h3>
                  <p className="continent-count">
                    {continent.countries.length} {t('home.continents.countries')}
                  </p>
                  <div className="continent-flags">
                    {continent.countries.slice(0, 8).map((c) => (
                      <span
                        key={c.id}
                        className="continent-flag-link"
                        title={c.name}
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate(`/country/${c.id}`)
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.stopPropagation()
                            navigate(`/country/${c.id}`)
                          }
                        }}
                      >
                        {c.flagEmoji}
                      </span>
                    ))}
                    {continent.countries.length > 8 && (
                      <span className="continent-more">
                        +{continent.countries.length - 8}
                      </span>
                    )}
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </section>

      <section className="varieties-section">
        <div className="container">
          <hr className="hand-divider" />
          <h2 className="section-title">{t('home.varieties.title')}</h2>
          <p className="section-text">{t('home.varieties.subtitle')}</p>
          <VarietyCloud />
        </div>
      </section>
    </div>
  )
}
