import { useParams, Link, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { FLAVOR_ZH, COUNTRY_NAME_ZH } from '../i18n/data.zh'
import { CONTINENTS, getMaxProduction } from '../data/countries'
import './ContinentPage.css'

function productionText(tonnes, lang) {
  const num = (tonnes / 1000).toFixed(0)
  if (lang === 'zh') {
    if (tonnes >= 1000000) return (tonnes / 10000).toFixed(1) + '万吨/年'
    return num + '千吨/年'
  }
  if (tonnes >= 1000000) return (tonnes / 1000000).toFixed(1) + 'M tonnes / year'
  return num + 'K tonnes / year'
}

export default function ContinentPage() {
  const { continentId } = useParams()
  const navigate = useNavigate()
  const { t, lang } = useI18n()
  const continent = CONTINENTS.find((c) => c.id === continentId)
  const maxProd = getMaxProduction()

  if (!continent) {
    return (
      <div className="container not-found">
        <h2>Continent not found</h2>
        <p>The coffee-growing continent you're looking for doesn't exist in our atlas.</p>
        <button className="btn" onClick={() => navigate('/')}>
          {t('region.backToMap')}
        </button>
      </div>
    )
  }

  const totalProduction = continent.countries.reduce((sum, c) => sum + c.productionTonnes, 0)

  return (
    <div className="continent-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">{t('country.breadcrumb')}</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{t('continent.' + continent.id)}</span>
        </nav>

        {/* Header */}
        <div className="continent-header">
          <h1 className="continent-title">{t('continent.' + continent.id)}</h1>
          <div className="continent-stats-bar">
            <div className="continent-stat">
              <span className="continent-stat-value">{continent.countries.length}</span>
              <span className="continent-stat-label">{t('home.hero.countries')}</span>
            </div>
            <div className="continent-stat">
              <span className="continent-stat-value">
                {(totalProduction / 1000000).toFixed(1)}M
              </span>
              <span className="continent-stat-label">{t('home.hero.production')}</span>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="continent-countries-grid">
          {continent.countries.map((country) => {
            const productionPercent = (country.productionTonnes / maxProd) * 100
            return (
              <Link
                key={country.id}
                to={`/country/${country.id}`}
                className="continent-country-card card"
              >
                <div className="ccc-header">
                  <span className="ccc-flag">{country.flagEmoji}</span>
                  <h3 className="ccc-name">
                    {lang === 'zh' && COUNTRY_NAME_ZH[country.id]
                      ? COUNTRY_NAME_ZH[country.id]
                      : country.name}
                  </h3>
                </div>
                <div className="ccc-prod">
                  <div className="production-bar">
                    <div
                      className="production-bar-fill"
                      style={{
                        width: `${productionPercent}%`,
                        background:
                          productionPercent > 50
                            ? 'var(--color-coffee-dark)'
                            : productionPercent > 20
                              ? 'var(--color-coffee-medium)'
                              : 'var(--color-accent-light)',
                      }}
                    />
                  </div>
                  <span className="ccc-prod-value">{productionText(country.productionTonnes, lang)}</span>
                </div>
                <div className="ccc-flavors">
                  {country.flavorProfile.slice(0, 3).map((f) => (
                    <span key={f} className="flavor-tag">
                      {lang === 'zh' ? (FLAVOR_ZH[f] || f) : f}
                    </span>
                  ))}
                </div>
                <span className="ccc-link">
                  {lang === 'zh' ? '查看详情 →' : 'View details →'}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
