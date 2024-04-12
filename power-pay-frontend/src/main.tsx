
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import PinInput from './components/pinInput.tsx'
import OKPage from './components/okpage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <PinInput /> */}
    <OKPage />
  </React.StrictMode>,
)