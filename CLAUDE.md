# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint on all JS/JSX files

## Tech Stack

- **Framework**: React 19 with Vite 8
- **Language**: JavaScript (JSX) — no TypeScript
- **Routing**: react-router-dom v7 (nested routes with `<Outlet />`)
- **Map Rendering**: D3 (d3-geo, d3-selection) + RoughJS for hand-drawn aesthetic
- **Geo Data**: TopoJSON (world-atlas), converted via topojson-client
- **Styling**: Plain CSS with custom properties, no CSS framework
- **Fonts**: Caveat (handwriting) + Inter via Google Fonts

## Project Architecture

### Route Structure (App.jsx)
- `/` — HomePage (world map overview, production stats, continent cards)
- `/country/:countryId` — CountryPage (country detail, regions list)
- `/country/:countryId/:regionId` — RegionPage (region detail with sidebar)

### Directory Layout
- `src/pages/` — Route-level page components (HomePage, CountryPage, RegionPage)
- `src/components/` — Reusable components (WorldMap, CountryOutline, Header, Layout, MapLegend)
- `src/data/` — Static data (countries.js: 50+ coffee-producing countries; regions.js: sub-regions for major producers)
- `src/styles/` — Global CSS with design tokens (global.css)
- Components and pages have co-located CSS files imported directly

### Data Architecture
- All country/region data is static, imported directly from `src/data/` modules
- `countries.js` exports `COUNTRIES` array, `CONTINENTS`, `getCountryById()`, `getMaxProduction()`, `getTotalProduction()`
- `regions.js` exports `REGIONS` object keyed by region ID, `getRegionById(countryId, regionId)`
- Each country has: id, name, isoNumeric (for TopoJSON matching), productionTonnes, continent, flavorProfile, altitude, processingMethods, description, history, regions[]
- Map uses isoNumeric to match country data to TopoJSON feature IDs

### Map Rendering (WorldMap.jsx)
- Uses `geoNaturalEarth1` projection from d3-geo
- Converts world-atlas TopoJSON to GeoJSON via topojson-client
- Draws countries using RoughJS SVG for hand-drawn effect
- Producers colored by production volume (darker = more production)
- Equator and Tropics lines drawn with "The Bean Belt" annotation
- Hover tooltip shows country name, flag, and production; click navigates to country page

### CountryOutline.jsx
- Standalone SVG component fitted to a single country's geometry
- Uses same d3 + RoughJS pipeline

### Design System (global.css)
- Warm paper + coffee color palette via CSS custom properties
- Hand-drawn aesthetic: RoughJS on SVG, dashed borders, paper texture background
- Reusable classes: `.card`, `.btn`, `.badge`, `.flavor-tag`, `.map-tooltip`, `.skeleton`, `.production-bar`
- All properties defined as CSS variables in `:root`
