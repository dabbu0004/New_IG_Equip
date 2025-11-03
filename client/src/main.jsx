import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async' // ✅ Import HelmetProvider
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider> {/* ✅ Wrap inside HelmetProvider */}
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
