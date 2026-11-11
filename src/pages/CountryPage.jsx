import { useParams, Link, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { FLAVOR_ZH, PROCESSING_ZH, COUNTRY_ZH, REGION_ZH, COUNTRY_NAME_ZH } from '../i18n/data.zh'
import CountryOutline from '../components/CountryOutline'
import VarietyTags from '../components/VarietyTags'
import { getCountryById, getMaxProduction } from '../data/countries'
import { REGIONS } from '../data/regions'
import './CountryPage.css'

function productionText(tonnes, lang) {
  const num = (tonnes / 1000).toFixed(0)
  if (lang === 'zh') {
    if (tonnes >= 1000000) return (tonnes / 10000).toFixed(1) + '万吨/年'
    return num + '千吨/年'
  }
  if (tonnes >= 1000000) return (tonnes / 1000000).toFixed(1) + 'M tonnes / year'
  return num + 'K tonnes / year'
}

const CONTINENT_KEY = {
  'South America': 'south-america',
  'Central America': 'central-america',
  Caribbean: 'central-america',
  Africa: 'africa',
  Asia: 'asia',
  'Middle East': 'asia',
  Oceania: 'oceania',
}

export default function CountryPage() {
  const { countryId } = useParams()
  const navigate = useNavigate()
  const { t, lang } = useI18n()
  const country = getCountryById(countryId)
  const maxProd = getMaxProduction()

  if (!country) {
    return (
      <div className="container not-found">
        <h2>{t('country.notFound')}</h2>
        <p>{t('country.notFoundText')}</p>
        <button className="btn" onClick={() => navigate('/')}>
          {t('region.backToMap')}
        </button>
      </div>
    )
  }

  const productionPercent = (country.productionTonnes / maxProd) * 100

  // Find available regions from REGIONS data
  const availableRegions = (country.regions || [])
    .map((rid) => REGIONS[rid])
    .filter(Boolean)

  const rankKey =
    country.productionTonnes >= 1000000
      ? 'top'
      : country.productionTonnes >= 100000
        ? 'major'
        : country.productionTonnes >= 10000
          ? 'growing'
          : 'small'

  return (
    <div className="country-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">{t('country.breadcrumb')}</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{lang === 'zh' && COUNTRY_NAME_ZH[country.id] ? COUNTRY_NAME_ZH[country.id] : country.name}</span>
        </nav>

        <div className="country-layout">
          {/* Left: Country Outline */}
          <div className="country-outline-col">
            <CountryOutline
              isoNumeric={country.isoNumeric}
              countryName={lang === 'zh' && COUNTRY_NAME_ZH[country.id] ? COUNTRY_NAME_ZH[country.id] : country.name}
            />
          </div>

          {/* Right: Country Info */}
          <div className="country-info-col">
            <div className="country-header">
              <span className="country-flag-large">{country.flagEmoji}</span>
              <div>
                <h1 className="country-name">{lang === 'zh' && COUNTRY_NAME_ZH[country.id] ? COUNTRY_NAME_ZH[country.id] : country.name}</h1>
                <span className="badge">{t('continent.' + (CONTINENT_KEY[country.continent] || ''))}</span>
              </div>
            </div>

            {/* Production Bar */}
            <div className="country-prod-section">
              <h3>{t('country.production')}</h3>
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
              <div className="country-prod-details">
                <span className="country-prod-value">
                  {productionText(country.productionTonnes, lang)}
                </span>
                <span className="country-prod-rank">
                  {t('country.rank.' + rankKey)}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="country-desc-section">
              <h3>{t('country.about')}</h3>
              <p>{lang === 'zh' && COUNTRY_ZH[country.id] ? COUNTRY_ZH[country.id].description : country.description}</p>
            </div>

            {/* History (if available) */}
            {(lang === 'zh' ? COUNTRY_ZH[country.id]?.history : country.history) && (
              <div className="country-history-section">
                <h3>{t('country.history')}</h3>
                <p>{lang === 'zh' && COUNTRY_ZH[country.id] ? COUNTRY_ZH[country.id].history : country.history}</p>
              </div>
            )}

            {/* Flavor Profile */}
            <div className="country-flavor-section">
              <h3>{t('country.flavorProfile')}</h3>
              <div className="flavor-profile">
                {country.flavorProfile.map((flavor) => (
                  <span key={flavor} className="flavor-tag">
                    {lang === 'zh' ? (FLAVOR_ZH[flavor] || flavor) : flavor}
                  </span>
                ))}
              </div>
            </div>

            {/* Growing Info */}
            <div className="country-growing-section">
              <h3>{t('country.growingConditions')}</h3>
              <div className="growing-info">
                <div className="growing-item">
                  <span className="growing-icon">🏔️</span>
                  <span className="growing-label">{t('country.altitude')}</span>
                  <span className="growing-value">{country.altitude}</span>
                </div>
                <div className="growing-item">
                  <span className="growing-icon">⚙️</span>
                  <span className="growing-label">{t('country.processing')}</span>
                  <span className="growing-value">
                    {country.processingMethods.map(m => lang === 'zh' ? (PROCESSING_ZH[m] || m) : m).join(', ')}
                  </span>
                </div>
                {country.varieties && (
                  <div className="growing-item">
                    <span className="growing-icon">🌱</span>
                    <span className="growing-label">{t('country.varieties')}</span>
                    <div className="growing-value">
                      <VarietyTags varieties={country.varieties} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Fun Fact */}
            {(lang === 'zh' ? COUNTRY_ZH[country.id]?.funFact : country.funFact) && (
              <div className="country-funfact">
                <span className="funfact-icon">☕</span>
                <p>{lang === 'zh' && COUNTRY_ZH[country.id] ? COUNTRY_ZH[country.id].funFact : country.funFact}</p>
              </div>
            )}
          </div>
        </div>

        {/* Regions Section */}
        {availableRegions.length > 0 && (
          <section className="regions-section">
            <hr className="hand-divider" />
            <h2 className="section-title">{t('country.regions')}</h2>
            <p className="section-text">
              {t('country.regionsText')}
            </p>
            <div className="regions-grid">
              {availableRegions.map((region) => (
                <Link
                  key={region.id}
                  to={`/country/${country.id}/${region.id}`}
                  className="region-card card"
                >
                  <div className="region-card-header">
                    <h3 className="region-name">{region.name}</h3>
                    {region.nameZh && (
                      <span className="region-name-zh">{region.nameZh}</span>
                    )}
                  </div>
                  <p className="region-desc-preview">
                    {lang === 'zh' && REGION_ZH[region.id]
                      ? REGION_ZH[region.id].description.slice(0, 120)
                      : region.description.slice(0, 120)}…
                  </p>
                  <div className="flavor-profile region-flavor">
                    {region.flavorProfile.slice(0, 4).map((f) => (
                      <span key={f} className="flavor-tag">
                        {lang === 'zh' ? (FLAVOR_ZH[f] || f) : f}
                      </span>
                    ))}
                  </div>
                  <span className="region-cta">{t('country.regionsCta')}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
