import React from 'react'
import ReactDOM from 'react-dom/client'
import { StorageProvider } from './hooks/StorageContext';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
)
const Root: React.FC = () => {
  return (
    <StorageProvider initialValue={0}>
      <App />
    </StorageProvider>
  );
};
