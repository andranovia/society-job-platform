import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import UserDashboard from './pages/userDashboard.tsx'
import App from './App.tsx'
import Login from './pages/login.tsx'
import ValidationRequest from './pages/validationRequest.tsx'
import JobVacancy from './pages/jobVacancy.tsx'
import JobVacancyDetail from './pages/jobVacancyDetail.tsx'

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
  {
    path: '/job-vacancies',
    element: <JobVacancy/>
  },
  {
    path: '/job-vacancies-detail/:id',
    element: <JobVacancyDetail/>
  },
])




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
