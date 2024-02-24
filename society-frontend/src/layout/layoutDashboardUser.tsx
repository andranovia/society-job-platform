import React, { ReactNode } from 'react'
import NavbarDashboardUser from '../components/navbarDashboardUser';

interface LayoutDashboardUserProps {
    children: ReactNode;
}


const LayoutDashboardUser = ({children}: LayoutDashboardUserProps) => {
  return (
    <>
    <div><NavbarDashboardUser/></div>
    {children}
    </>
  )
}

export default LayoutDashboardUser