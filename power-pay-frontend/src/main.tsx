
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Outlet } from 'react-router-dom'
import App from './App.tsx'
import OKPage from './components/okpage.tsx'
import './index.css'
import PinInput from './components/pinInput.tsx'



const router = createBrowserRouter([
  {
      path: "/",
      element: <PinInput/>,
      
  },

  {
    path: "/OkPage",
    element: <OKPage />,
  },
  

 

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<RouterProvider router={router} />
<Outlet />
<App />
  </React.StrictMode>,
)