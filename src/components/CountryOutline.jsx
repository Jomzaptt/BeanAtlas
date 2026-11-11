import { useEffect, useRef } from 'react'
import { select } from 'd3-selection'
import { geoNaturalEarth1, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import rough from 'roughjs'
import worldData from 'world-atlas/countries-110m.json'
import { useI18n } from '../i18n/I18nContext'
import useTheme from '../hooks/useTheme'
import './CountryOutline.css'

const lightColors = {
  bg: '#f5f0e8',
  bgStroke: '#c9b99a',
  fill: '#d4a574',
  stroke: '#6f4e37',
  text: '#998070',
}

const darkColors = {
  bg: '#241915',
  bgStroke: '#5a4a3a',
  fill: '#8b6f50',
  stroke: '#c4b89a',
  text: '#8a7a6a',
}

export default function CountryOutline({ isoNumeric, countryName }) {
  const { t } = useI18n()
  const { theme } = useTheme()
  const svgRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const svgEl = svgRef.current
    const container = containerRef.current
    if (!svgEl || !isoNumeric) return

    const svg = select(svgEl)
    svg.selectAll('*').remove()

    const width = container?.clientWidth || 400
    const height = Math.max(300, width * 0.7)

    svgEl.setAttribute('viewBox', `0 0 ${width} ${height}`)

    const colors = theme === 'dark' ? darkColors : lightColors

    const countriesGeo = feature(worldData, worldData.objects.countries)
    const countryFeature = countriesGeo.features.find(
      (f) => f.id === isoNumeric,
    )

    if (!countryFeature) {
      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', height / 2)
        .attr('text-anchor', 'middle')
        .attr('font-family', "'Caveat', cursive")
        .attr('font-size', '1.2rem')
        .attr('fill', colors.text)
        .text(t('countryOutline.notAvailable'))
      return
    }

    const projection = geoNaturalEarth1().fitExtent(
      [[25, 25], [width - 25, height - 25]],
      countryFeature,
    )

    const pathGen = geoPath().projection(projection)

    // Draw background
    const roughSvg = rough.svg(svgEl)
    const roughBg = roughSvg.rectangle(0, 0, width, height, {
      fill: colors.bg,
      fillStyle: 'solid',
      stroke: colors.bgStroke,
      strokeWidth: 1.5,
      roughness: 0.5,
    })
    svgEl.appendChild(roughBg)

    // Draw country outline
    const pathData = pathGen(countryFeature)
    if (pathData) {
      const roughPath = roughSvg.path(pathData, {
        fill: colors.fill,
        fillStyle: 'solid',
        stroke: colors.stroke,
        strokeWidth: 2,
        roughness: 1.0,
        bowing: 0.6,
      })
      svgEl.appendChild(roughPath)
    }

    // Country name
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height - 12)
      .attr('text-anchor', 'middle')
      .attr('font-family', "'Caveat', cursive")
      .attr('font-size', '1.1rem')
      .attr('fill', colors.text)
      .attr('opacity', 0.7)
      .text(countryName || '')
  }, [isoNumeric, countryName, theme, t])

  return (
    <div ref={containerRef} className="country-outline">
      <svg ref={svgRef} className="country-outline-svg" />
    </div>
  )
}
