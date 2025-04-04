import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div class="d-flex flex-column align-items-center justify-content-center vh-100 text-center" style={{ backgroundColor: '#f8f9fa' }}>
    <h1 class="fw-bold" style={{ fontSize: '2rem', color: '#343a40' }}>404</h1>
    <h2 class="fw-bold" style={{ fontSize: '2rem', color: '#212529' }}>Kiaan couldn’t find that page</h2>
    <p class="text-muted">We couldn’t find the page you were looking for.</p>
    <p>
      Visit <Link to="/" class="text-primary" style={{ textDecoration: 'none' }}>Zerodha’s home page</Link>
    </p>
  </div>
  )
}
