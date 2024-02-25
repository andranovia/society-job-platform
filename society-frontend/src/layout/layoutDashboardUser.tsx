import React, { ReactNode } from "react";
import NavbarDashboardUser from "../components/navbarDashboardUser";
import Footer from "../components/footer";

interface LayoutDashboardUserProps {
  children: ReactNode;
}

const LayoutDashboardUser = ({ children }: LayoutDashboardUserProps) => {
  return (
    <>
      <div>
        <NavbarDashboardUser />
      </div>
      <div className="my-20">
      {children}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default LayoutDashboardUser;
