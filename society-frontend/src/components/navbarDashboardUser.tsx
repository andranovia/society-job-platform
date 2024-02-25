
import UseMobile from "../hooks/useMobile";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarDashboardUser = () => {
  const {isMobile} = UseMobile();


  return (
    <div className="w-full fixed top-0 ">
      <div className="flex justify-between px-4 py-2 items-center bg-base rounded-md lg:py-4 m-6  text-2xl font-semibold">
        <h1>Society</h1>
        {isMobile && (
          <div>
            <GiHamburgerMenu size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarDashboardUser;
