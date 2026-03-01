import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AssetsProvider } from './Context/AssestsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AssetsProvider>

      <App />
    </AssetsProvider>
  </StrictMode>,
)
