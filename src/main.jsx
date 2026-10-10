import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './i18n';
import './index.css'
import App from './App.jsx'

// index.html ships static description/canonical/og/twitter/hreflang tags so
// there's sensible content before JS runs. react-helmet-async only manages
// tags it renders itself — it has no record of these static ones, so it
// appends its own set instead of replacing them, leaving two of each in
// <head> (first-match wins for most consumers, which keeps stale Home
// content on every other page, and a duplicate canonical makes Google
// ignore the canonical signal entirely). Strip the static per-page-variable
// ones before mount so Helmet's render is the only one left.
[
  'meta[name="description"]',
  'meta[property^="og:"]',
  'meta[name^="twitter:"]',
  'link[rel="canonical"]',
  'link[rel="alternate"][hreflang]',
].forEach((selector) => {
  document.head.querySelectorAll(selector).forEach((el) => el.remove());
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
