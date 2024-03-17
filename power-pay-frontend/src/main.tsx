import React from 'react'
import ReactDOM from 'react-dom/client'
import { StorageProvider } from './hooks/StorageContext';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <StorageProvider>
          <App />
      </StorageProvider>
  </React.StrictMode>,
)