import { useI18n } from '../i18n/I18nContext'
import useTheme from '../hooks/useTheme'
import './MapLegend.css'

const LIGHT_STEPS = [
  { label: '> 1M t', color: '#3E2723' },
  { label: '500K–1M', color: '#5D4037' },
  { label: '200K–500K', color: '#6F4E37' },
  { label: '100K–200K', color: '#8D6E63' },
  { label: '50K–100K', color: '#A67B5B' },
  { label: '10K–50K', color: '#C4A882' },
  { label: '1K–10K', color: '#D4BFA5' },
  { label: '< 1K', color: '#E8DCC8' },
  { label: '', color: '#f0ead6', labelKey: 'legend.nonProducer' },
]

const DARK_STEPS = [
  { label: '> 1M t', color: '#d4a574' },
  { label: '500K–1M', color: '#c9925e' },
  { label: '200K–500K', color: '#b8804a' },
  { label: '100K–200K', color: '#a07040' },
  { label: '50K–100K', color: '#8a6040' },
  { label: '10K–50K', color: '#6f4e37' },
  { label: '1K–10K', color: '#5a3e2a' },
  { label: '< 1K', color: '#453020' },
  { label: '', color: '#2a2218', labelKey: 'legend.nonProducer' },
]

export default function MapLegend() {
  const { t } = useI18n()
  const { theme } = useTheme()
  const steps = theme === 'dark' ? DARK_STEPS : LIGHT_STEPS

  return (
    <div className="map-legend">
      <h3 className="legend-title">{t('legend.title')}</h3>
      <div className="legend-steps">
        {steps.map((step) => (
          <div key={step.label || step.labelKey} className="legend-item">
            <span
              className="legend-swatch"
              style={{ background: step.color }}
            />
            <span className="legend-label">
              {step.labelKey ? t(step.labelKey) : step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
