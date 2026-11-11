import { useParams, Link, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { FLAVOR_ZH, REGION_ZH, COUNTRY_NAME_ZH } from '../i18n/data.zh'
import VarietyTags from '../components/VarietyTags'
import { getCountryById } from '../data/countries'
import { getRegionById } from '../data/regions'
import './RegionPage.css'

function productionText(tonnes, lang) {
  const num = (tonnes / 1000).toFixed(0)
  if (lang === 'zh') {
    if (tonnes >= 1000000) return (tonnes / 10000).toFixed(1) + '万吨/年'
    return num + '千吨/年'
  }
  if (tonnes >= 1000000) return (tonnes / 1000000).toFixed(1) + 'M tonnes / year'
  return num + 'K tonnes / year'
}

export default function RegionPage() {
  const { countryId, regionId } = useParams()
  const navigate = useNavigate()
  const { t, lang } = useI18n()
  const country = getCountryById(countryId)
  const countryDisplayName = lang === 'zh' && COUNTRY_NAME_ZH[country?.id] ? COUNTRY_NAME_ZH[country.id] : country?.name
  const region = getRegionById(countryId, regionId)

  if (!country || !region) {
    return (
      <div className="container not-found">
        <h2>{t('region.notFound')}</h2>
        <p>{t('region.notFoundText')}</p>
        <button className="btn" onClick={() => navigate('/')}>
          {t('region.backToMap')}
        </button>
      </div>
    )
  }

  return (
    <div className="region-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">{t('country.breadcrumb')}</Link>
          <span className="breadcrumb-sep">/</span>
          <Link to={`/country/${country.id}`}>{countryDisplayName}</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{region.name}</span>
        </nav>

        <div className="region-layout">
          {/* Main content */}
          <div className="region-main">
            <div className="region-header">
              <div>
                <h1 className="region-title">
                  {region.name}{' '}
                  {region.nameZh && (
                    <span className="region-title-zh">{region.nameZh}</span>
                  )}
                </h1>
                <span className="badge">
                  {country.flagEmoji} {countryDisplayName}
                </span>
              </div>
            </div>

            <div className="region-description card">
              <p>{lang === 'zh' && REGION_ZH[region.id] ? REGION_ZH[region.id].description : region.description}</p>
            </div>

            {/* Flavor Profile */}
            <div className="region-flavor-section">
              <h3>{t('country.flavorProfile')}</h3>
              <div className="flavor-profile">
                {region.flavorProfile.map((flavor) => (
                  <span key={flavor} className="flavor-tag">
                    {lang === 'zh' ? (FLAVOR_ZH[flavor] || flavor) : flavor}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="region-details">
              <div className="detail-item">
                <span className="detail-icon">🏔️</span>
                <div>
                  <span className="detail-label">{t('country.altitude')}</span>
                  <span className="detail-value">{region.altitude}</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">⭐</span>
                <div>
                  <span className="detail-label">{t('region.notableFor')}</span>
                  <span className="detail-value">{lang === 'zh' && REGION_ZH[region.id] ? REGION_ZH[region.id].notableFor : region.notableFor}</span>
                </div>
              </div>
              {region.varieties && (
                <div className="detail-item">
                  <span className="detail-icon">🌱</span>
                  <div>
                    <span className="detail-label">{t('country.varieties')}</span>
                    <div className="detail-value">
                      <VarietyTags varieties={region.varieties} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Country Link */}
            <Link
              to={`/country/${country.id}`}
              className="btn btn-primary back-btn"
            >
              {t('region.back')} {countryDisplayName}
            </Link>
          </div>

          {/* Sidebar */}
          <aside className="region-sidebar">
            <div className="sidebar-card card">
              <h4>{t('region.countryInfo')}</h4>
              <div className="sidebar-flag">{country.flagEmoji}</div>
              <h3 className="sidebar-country-name">{countryDisplayName}</h3>
              <p className="sidebar-country-prod">
                {productionText(country.productionTonnes, lang)}
              </p>
              <div className="sidebar-profile">
                {country.flavorProfile.slice(0, 4).map((f) => (
                  <span key={f} className="flavor-tag">
                    {lang === 'zh' ? (FLAVOR_ZH[f] || f) : f}
                  </span>
                ))}
              </div>
              <Link
                to={`/country/${country.id}`}
                className="sidebar-link"
              >
                {t('region.viewCountry')}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
