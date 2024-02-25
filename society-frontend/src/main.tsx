import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import UserDashboard from './pages/userDashboard.tsx'
import App from './App.tsx'
import Login from './components/login.tsx'
import ValidationRequest from './pages/validationRequest.tsx'

const route= createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/user-dashboard',
    element: <UserDashboard/>
  },
  {
    path: '/validation-request',
    element: <ValidationRequest/>
  },
])




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
