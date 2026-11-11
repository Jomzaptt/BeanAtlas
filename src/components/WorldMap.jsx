import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { select } from 'd3-selection'
import { geoNaturalEarth1, geoPath } from 'd3-geo'
import { zoom } from 'd3-zoom'
import { feature } from 'topojson-client'
import rough from 'roughjs'
import worldData from 'world-atlas/countries-110m.json'
import { COUNTRIES } from '../data/countries'
import { useI18n } from '../i18n/I18nContext'
import { COUNTRY_NAME_ZH } from '../i18n/data.zh'
import useTheme from '../hooks/useTheme'
import './WorldMap.css'

// Create a GeoJSON LineString for a latitude line
function latitudeLine(lat, points = 360) {
  const coords = []
  for (let i = 0; i <= points; i++) {
    coords.push([-180 + (360 * i) / points, lat])
  }
  return { type: 'LineString', coordinates: coords }
}

// Viewport clamping for tooltip
const TOOLTIP_PADDING = 12
function clampX(x) {
  return Math.min(Math.max(x, TOOLTIP_PADDING), window.innerWidth - TOOLTIP_PADDING)
}
function clampY(y) {
  return Math.min(Math.max(y, TOOLTIP_PADDING + 40), window.innerHeight - TOOLTIP_PADDING)
}

// Static derived data — never changes, safe outside component
const productionMap = {}
const countryInfoMap = {}
COUNTRIES.forEach((c) => {
  productionMap[c.isoNumeric] = c.productionTonnes
  countryInfoMap[c.isoNumeric] = c
})

// Light theme production color scale
function getProductionColorLight(tonnes) {
  if (!tonnes || tonnes <= 0) return '#f0ead6'
  if (tonnes >= 1000000) return '#3E2723'
  if (tonnes >= 500000) return '#5D4037'
  if (tonnes >= 200000) return '#6F4E37'
  if (tonnes >= 100000) return '#8D6E63'
  if (tonnes >= 50000) return '#A67B5B'
  if (tonnes >= 10000) return '#C4A882'
  if (tonnes >= 1000) return '#D4BFA5'
  return '#E8DCC8'
}

// Dark theme production color scale — reversed: higher production = lighter/amber
function getProductionColorDark(tonnes) {
  if (!tonnes || tonnes <= 0) return '#2a2218'
  if (tonnes >= 1000000) return '#d4a574'
  if (tonnes >= 500000) return '#c9925e'
  if (tonnes >= 200000) return '#b8804a'
  if (tonnes >= 100000) return '#a07040'
  if (tonnes >= 50000) return '#8a6040'
  if (tonnes >= 10000) return '#6f4e37'
  if (tonnes >= 1000) return '#5a3e2a'
  return '#453020'
}

// Theme-aware color palettes
const lightPalette = {
  ocean: '#e8e0d0',
  sphereFill: '#ede7db',
  sphereStroke: '#c9b99a',
  landNonProd: '#f0ead6',
  landNonProdStroke: '#c9b99a',
  equator: '#c0392b',
  tropic: '#2c3e50',
  beltText: '#6f4e37',
  countryStroke: '#8a7a6a',
}

const darkPalette = {
  ocean: '#1e2824',
  sphereFill: '#253530',
  sphereStroke: '#5a4a3a',
  landNonProd: '#2a2218',
  landNonProdStroke: '#5a4a3a',
  equator: '#e05545',
  tropic: '#6a8eab',
  beltText: '#c4b89a',
  countryStroke: '#5a4a3a',
}

export default function WorldMap() {
  const svgRef = useRef(null)
  const containerRef = useRef(null)
  const navigate = useNavigate()
  const { t, lang } = useI18n()
  const { theme } = useTheme()
  const [tooltip, setTooltip] = useState(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 })

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return

    const { width, height } = dimensions
    const isDark = theme === 'dark'
    const palette = isDark ? darkPalette : lightPalette
    const getProductionColor = isDark ? getProductionColorDark : getProductionColorLight

    // Set up SVG
    const svg = select(svgRef.current)
    svg.selectAll('*').remove()

    // Create a rough SVG instance
    const roughSvg = rough.svg(svg.node())

    // Define projection
    const projection = geoNaturalEarth1()
      .fitSize([width - 40, height - 40], { type: 'Sphere' })
      .translate([width / 2, height / 2])

    const pathGenerator = geoPath().projection(projection)

    // Convert TopoJSON to GeoJSON
    const countriesGeo = feature(worldData, worldData.objects.countries)

    // === Map content layer (zoomed/panned) ===
    const mapLayer = svg.append('g').attr('class', 'map-layer')

    // === Draw ocean background inside mapLayer so it zooms with the map ===
    mapLayer
      .append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', palette.ocean)
      .attr('rx', 4)

    // === Draw sphere (map background) ===
    const spherePath = pathGenerator({ type: 'Sphere' })
    if (spherePath) {
      const roughSphere = roughSvg.path(spherePath, {
        fill: palette.sphereFill,
        fillStyle: 'solid',
        stroke: palette.sphereStroke,
        strokeWidth: 1.5,
        roughness: 0.3,
      })
      mapLayer.node().appendChild(roughSphere)
    }

    // === Draw countries ===
    const countryGroup = mapLayer.append('g').attr('class', 'countries')

    countriesGeo.features.forEach((countryFeature) => {
      const id = countryFeature.id
      const production = productionMap[id] || 0
      const color = getProductionColor(production)
      const countryInfo = countryInfoMap[id]
      const pathData = pathGenerator(countryFeature)

      if (!pathData) return

      const isProducer = !!productionMap[id]

      if (isProducer) {
        const roughness = 0.4 + (production / 4000000) * 0.6
        const roughPath = roughSvg.path(pathData, {
          fill: color,
          fillStyle: 'solid',
          stroke: palette.countryStroke,
          strokeWidth: 1.2,
          roughness: Math.min(roughness, 0.8),
          bowing: 0.4,
        })
        const el = roughPath
        el.setAttribute('class', 'country-path producer')
        el.setAttribute('data-country-id', countryInfo?.id || id)
        el.setAttribute('data-production', production)

        el.addEventListener('mouseenter', (e) => {
          if (countryInfo) {
            setTooltip({
              x: clampX(e.clientX),
              y: clampY(e.clientY),
              name: countryInfo.name,
              countryId: countryInfo.id,
              flag: countryInfo.flagEmoji,
              production: countryInfo.productionTonnes,
            })
          }
          el.style.cursor = 'pointer'
        })
        el.addEventListener('mousemove', (e) => {
          setTooltip((prev) =>
            prev ? { ...prev, x: clampX(e.clientX), y: clampY(e.clientY) } : null,
          )
        })
        el.addEventListener('mouseleave', () => {
          setTooltip(null)
        })
        el.addEventListener('click', () => {
          if (countryInfo) {
            navigate(`/country/${countryInfo.id}`)
          }
        })

        countryGroup.node().appendChild(el)
      } else {
        const roughPath = roughSvg.path(pathData, {
          fill: palette.landNonProd,
          fillStyle: 'solid',
          stroke: palette.landNonProdStroke,
          strokeWidth: 0.8,
          roughness: 0.3,
        })
        countryGroup.node().appendChild(roughPath)
      }
    })

    // === Draw Equator ===
    const equator = latitudeLine(0)
    const equatorPath = pathGenerator(equator)
    if (equatorPath) {
      const roughEquator = roughSvg.path(equatorPath, {
        stroke: palette.equator,
        strokeWidth: 2.5,
        roughness: 0.2,
        fill: 'none',
      })
      mapLayer.node().appendChild(roughEquator)

      const [ex] = projection([-165, 0])
      const [ex2] = projection([165, 0])
      mapLayer
        .append('text')
        .attr('x', (ex + ex2) / 2)
        .attr('y', projection([0, 0])[1] - 8)
        .attr('text-anchor', 'middle')
        .attr('font-family', "'Caveat', cursive")
        .attr('font-size', '14px')
        .attr('fill', palette.equator)
        .attr('font-weight', '600')
        .text(t('map.equator'))
    }

    // === Draw Tropic of Cancer ===
    const tropicCancer = latitudeLine(23.44)
    const cancerPath = pathGenerator(tropicCancer)
    if (cancerPath) {
      const roughCancer = roughSvg.path(cancerPath, {
        stroke: palette.tropic,
        strokeWidth: 2,
        roughness: 0.2,
        fill: 'none',
        strokeLineDash: [6, 4],
      })
      mapLayer.node().appendChild(roughCancer)

      const [cx] = projection([-165, 23.44])
      mapLayer
        .append('text')
        .attr('x', cx)
        .attr('y', projection([0, 23.44])[1] - 8)
        .attr('text-anchor', 'start')
        .attr('font-family', "'Caveat', cursive")
        .attr('font-size', '13px')
        .attr('fill', palette.tropic)
        .attr('font-weight', '600')
        .text(t('map.tropicCancer'))
    }

    // === Draw Tropic of Capricorn ===
    const tropicCapricorn = latitudeLine(-23.44)
    const capricornPath = pathGenerator(tropicCapricorn)
    if (capricornPath) {
      const roughCapricorn = roughSvg.path(capricornPath, {
        stroke: palette.tropic,
        strokeWidth: 2,
        roughness: 0.2,
        fill: 'none',
        strokeLineDash: [6, 4],
      })
      mapLayer.node().appendChild(roughCapricorn)

      const [cx] = projection([-165, -23.44])
      mapLayer
        .append('text')
        .attr('x', cx)
        .attr('y', projection([0, -23.44])[1] - 8)
        .attr('text-anchor', 'start')
        .attr('font-family', "'Caveat', cursive")
        .attr('font-size', '13px')
        .attr('fill', palette.tropic)
        .attr('font-weight', '600')
        .text(t('map.tropicCapricorn'))
    }

    // === Coffee Belt annotation ===
    const beltY = projection([0, 0])[1]
    mapLayer
      .append('text')
      .attr('x', width - 20)
      .attr('y', beltY - 60)
      .attr('text-anchor', 'end')
      .attr('font-family', "'Caveat', cursive")
      .attr('font-size', '15px')
      .attr('fill', palette.beltText)
      .attr('font-weight', '600')
      .attr('opacity', 0.7)
      .text(t('map.beanBelt'))

    // === Zoom behavior ===
    const zoomBehavior = zoom()
      .scaleExtent([1, 8])
      .translateExtent([
        [-width * 0.6, -height * 0.6],
        [width * 1.6, height * 1.6],
      ])
      .on('zoom', (event) => {
        mapLayer.attr('transform', event.transform)
        if (containerRef.current) {
          if (event.sourceEvent?.type === 'mousedown') {
            containerRef.current.classList.add('grabbing')
          }
        }
      })

    svg.call(zoomBehavior)

    // Remove grabbing cursor on any mouseup globally (handles drag-outside-SVG case)
    function removeGrabbing() {
      if (containerRef.current) {
        containerRef.current.classList.remove('grabbing')
      }
    }
    window.addEventListener('mouseup', removeGrabbing)
    return () => window.removeEventListener('mouseup', removeGrabbing)
  }, [dimensions, navigate, t, theme])

  // Resize handler
  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth
        setDimensions({ width: w, height: Math.max(400, w * 0.5) })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="world-map-container" ref={containerRef}>
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />
      {tooltip && (
        <div
          className="map-tooltip"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.flag}{' '}
          {lang === 'zh' && COUNTRY_NAME_ZH[tooltip.countryId]
            ? COUNTRY_NAME_ZH[tooltip.countryId]
            : tooltip.name}{' '}
          —{' '}
          {lang === 'zh'
            ? (tooltip.production / 1000).toFixed(0) + '千吨/年'
            : (tooltip.production / 1000).toFixed(0) + 'K tonnes'}
        </div>
      )}
    </div>
  )
}
