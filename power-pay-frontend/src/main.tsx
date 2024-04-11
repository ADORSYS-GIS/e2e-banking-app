
import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import PaymentOptions from './components/index.tsx'
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import UserInfo from './components/userinfo.tsx';
const router = createBrowserRouter([
  {
      path: "/",
      element: <PaymentOptions/>,
  },

  {
    path: "/userinfo",
    element: <UserInfo />,
  },
 

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<RouterProvider router={router} />
<Outlet />
{/* <App /> */}
  </React.StrictMode>,
)