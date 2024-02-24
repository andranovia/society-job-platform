import { ReactNode } from "react";
import Navbar from "../components/navbar";

interface layoutProps {
  children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
