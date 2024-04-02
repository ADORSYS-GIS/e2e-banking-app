
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import QRScannerComponent from './Components/scan_qr.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <QRScannerComponent/>
  </React.StrictMode>,
)
