import React from 'react'
import ReactDOM from 'react-dom/client'
import { LocalStorageService, StorageProvider } from './hooks/StorageContext';
import App from './App.tsx'
import './index.css'

const storageService = new LocalStorageService();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <StorageProvider storageService={storageService}>
          <App />
      </StorageProvider>
  </React.StrictMode>,
)