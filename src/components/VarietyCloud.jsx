import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { VARIETY_CATEGORIES, getVarietyInfo, getVarietyDesc } from '../data/varieties'
import { VARIETY_ZH, COUNTRY_NAME_ZH } from '../i18n/data.zh'
import './VarietyCloud.css'

const CATEGORY_COLORS = {
  arabica: 'var(--color-accent)',
  robusta: '#c0503a',
  liberica: '#5a7a5a',
  hybrids: '#b8860b',
}

const CATEGORY_BG = {
  arabica: 'var(--color-coffee-pale)',
  robusta: 'rgba(192, 80, 58, 0.08)',
  liberica: 'rgba(90, 122, 90, 0.08)',
  hybrids: 'rgba(184, 134, 11, 0.08)',
}

export default function VarietyCloud() {
  const { t, lang } = useI18n()
  const navigate = useNavigate()
  const [activeVariety, setActiveVariety] = useState(null)

  const displayVariety = useCallback(
    (name) => (lang === 'zh' && VARIETY_ZH[name] ? VARIETY_ZH[name] : name),
    [lang],
  )

  const displayCountry = useCallback(
    (id, name) => (lang === 'zh' && COUNTRY_NAME_ZH[id] ? COUNTRY_NAME_ZH[id] : name),
    [lang],
  )

  const handleClick = (name) => {
    setActiveVariety((prev) => (prev === name ? null : name))
  }

  const info = activeVariety ? getVarietyInfo(activeVariety) : null

  return (
    <div className="variety-cloud">
      <div className="variety-categories">
        {VARIETY_CATEGORIES.map((cat) => (
          <div key={cat.id} className="variety-category">
            <h3
              className="variety-cat-heading"
              style={{ '--cat-color': CATEGORY_COLORS[cat.id] }}
            >
              {t('home.varieties.' + cat.id)}
            </h3>
            <div className="variety-tags">
              {cat.varieties.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={
                    'variety-tag' +
                    (activeVariety === name ? ' variety-tag--active' : '')
                  }
                  style={{
                    '--cat-color': CATEGORY_COLORS[cat.id],
                    '--cat-bg': CATEGORY_BG[cat.id],
                  }}
                  onClick={() => handleClick(name)}
                >
                  {displayVariety(name)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {info && (
        <div className="variety-results card">
          <div className="variety-results-header">
            <h4 className="variety-results-name">
              {displayVariety(activeVariety)}
              <span className="variety-results-cat">
                {t('home.varieties.' + info.category)}
              </span>
            </h4>
            <button
              type="button"
              className="variety-results-close"
              onClick={() => setActiveVariety(null)}
              aria-label={t('home.varieties.clearFilter')}
            >
              ×
            </button>
          </div>

          {getVarietyDesc(activeVariety, lang) && (
            <p className="variety-results-desc">
              {getVarietyDesc(activeVariety, lang)}
            </p>
          )}

          {info.countries.length > 0 && (
            <div className="variety-results-section">
              <h5 className="variety-results-label">
                {t('home.varieties.countries')} ({info.countries.length})
              </h5>
              <div className="variety-results-countries">
                {info.countries.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className="variety-country-link"
                    onClick={() => navigate(`/country/${c.id}`)}
                  >
                    <span className="variety-country-flag">{c.flagEmoji}</span>
                    <span className="variety-country-name">
                      {displayCountry(c.id, c.name)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {info.regions.length > 0 && (
            <div className="variety-results-section">
              <h5 className="variety-results-label">
                {t('home.varieties.regions')} ({info.regions.length})
              </h5>
              <div className="variety-results-regions">
                {info.regions.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className="variety-region-link"
                    onClick={() =>
                      navigate(`/country/${r.countryId}/${r.id}`)
                    }
                  >
                    <span className="variety-region-flag">
                      {r.countryFlag}
                    </span>
                    <span className="variety-region-name">
                      {lang === 'zh' && r.nameZh ? r.nameZh : r.name}
                    </span>
                    <span className="variety-region-country">
                      {displayCountry(r.countryId, r.countryName)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
