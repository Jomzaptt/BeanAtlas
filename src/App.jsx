import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import RegionPage from './pages/RegionPage'
import ContinentPage from './pages/ContinentPage'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomePage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/country/:countryId"
          element={
            <ErrorBoundary>
              <CountryPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/continent/:continentId"
          element={
            <ErrorBoundary>
              <ContinentPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/country/:countryId/:regionId"
          element={
            <ErrorBoundary>
              <RegionPage />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  )
}
