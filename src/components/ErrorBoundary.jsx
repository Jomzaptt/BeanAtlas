import { Component } from 'react'
import { Link } from 'react-router-dom'
import './ErrorBoundary.css'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="container">
            <div className="error-card card">
              <h2 className="error-title">Oops, something spilled!</h2>
              <p className="error-message">
                {this.state.error?.message || 'An unexpected error occurred.'}
              </p>
              <div className="error-actions">
                <Link to="/" className="btn btn-primary">
                  Back to the Atlas
                </Link>
                <button
                  className="btn"
                  onClick={() => {
                    this.setState({ hasError: false, error: null })
                    window.location.reload()
                  }}
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
