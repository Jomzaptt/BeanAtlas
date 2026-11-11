import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { getVarietyInfo, getVarietyDesc } from '../data/varieties'
import { VARIETY_ZH, COUNTRY_NAME_ZH } from '../i18n/data.zh'
import './VarietyTags.css'

const CAT_CSS = {
  arabica: 'vt-cat-arabica',
  robusta: 'vt-cat-robusta',
  liberica: 'vt-cat-liberica',
  hybrids: 'vt-cat-hybrids',
}

export default function VarietyTags({ varieties }) {
  const { t, lang } = useI18n()
  const navigate = useNavigate()
  const [active, setActive] = useState(null)

  const displayVariety = useCallback(
    (name) => (lang === 'zh' && VARIETY_ZH[name] ? VARIETY_ZH[name] : name),
    [lang],
  )

  const displayCountry = useCallback(
    (id, name) => (lang === 'zh' && COUNTRY_NAME_ZH[id] ? COUNTRY_NAME_ZH[id] : name),
    [lang],
  )

  if (!varieties || varieties.length === 0) return null

  const info = active ? getVarietyInfo(active) : null

  return (
    <div className="variety-tags-wrapper">
      <div className="vt-chips">
        {varieties.map((name) => {
          const vInfo = getVarietyInfo(name)
          const cat = vInfo ? vInfo.category : 'arabica'
          return (
            <button
              key={name}
              type="button"
              className={'vt-chip ' + CAT_CSS[cat] + (active === name ? ' vt-chip--active' : '')}
              onClick={() => setActive((prev) => (prev === name ? null : name))}
            >
              {displayVariety(name)}
            </button>
          )
        })}
      </div>

      {info && (
        <div className="vt-popup card">
          <div className="vt-popup-header">
            <h4 className="vt-popup-name">
              {displayVariety(active)}
              <span className="vt-popup-cat">{t('home.varieties.' + info.category)}</span>
            </h4>
            <button
              type="button"
              className="vt-popup-close"
              onClick={() => setActive(null)}
            >
              ×
            </button>
          </div>

          {getVarietyDesc(active, lang) && (
            <p className="vt-popup-desc">{getVarietyDesc(active, lang)}</p>
          )}

          {info.countries.length > 0 && (
            <div className="vt-popup-section">
              <h5 className="vt-popup-label">{t('home.varieties.countries')} ({info.countries.length})</h5>
              <div className="vt-popup-list">
                {info.countries.slice(0, 8).map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className="vt-popup-link"
                    onClick={() => navigate(`/country/${c.id}`)}
                  >
                    <span className="vt-popup-flag">{c.flagEmoji}</span>
                    <span>{displayCountry(c.id, c.name)}</span>
                  </button>
                ))}
                {info.countries.length > 8 && (
                  <span className="vt-popup-more">+{info.countries.length - 8} more</span>
                )}
              </div>
            </div>
          )}

          {info.regions.length > 0 && (
            <div className="vt-popup-section">
              <h5 className="vt-popup-label">{t('home.varieties.regions')} ({info.regions.length})</h5>
              <div className="vt-popup-list">
                {info.regions.slice(0, 8).map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className="vt-popup-link vt-popup-link--region"
                    onClick={() => navigate(`/country/${r.countryId}/${r.id}`)}
                  >
                    <span className="vt-popup-flag">{r.countryFlag}</span>
                    <span>
                      {lang === 'zh' && r.nameZh ? r.nameZh : r.name}
                    </span>
                    <span className="vt-popup-region-country">
                      {displayCountry(r.countryId, r.countryName)}
                    </span>
                  </button>
                ))}
                {info.regions.length > 8 && (
                  <span className="vt-popup-more">+{info.regions.length - 8} more</span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
