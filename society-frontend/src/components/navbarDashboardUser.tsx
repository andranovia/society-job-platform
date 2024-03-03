import UseMobile from "../hooks/useMobile";
import { motion, useAnimation } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

const NavbarDashboardUser = () => {
  const { isMobile } = UseMobile();
  const user = localStorage.getItem("user");
  const controls = useAnimation();

  const handleUserHover = () => {
    controls.start("animate");
  };

  const handleUserLeave = () => {
    controls.start("initial");
  };

  return (
    <div className="w-full fixed top-0 ">
      <div className="flex justify-between px-4 py-2 items-center bg-base lg:backdrop-blur-sm lg:bg-opacity-50 rounded-md lg:py-4 lg:m-0 m-6  text-2xl font-semibold">
        <h1 className="lg:ml-20 font-thin">Society</h1>

        <div className="flex flex-row items-center justify-center  gap-4">
          <motion.h2
            onMouseEnter={() => handleUserHover()}
            onMouseLeave={() => handleUserLeave()}
            animate={controls}
            initial="initial"
            variants={{
              animate: {
                x: !isMobile ? -25 : 0,
              },
              initial: {
                x: 0,
              },
            }}
            className="cursor-pointer text-sm font-semibold "
          >
            {user}
          </motion.h2>
          <motion.div
            animate={controls}
            initial="initial"
            className="lg:flex justify-center items-center gap-2 hidden"
            variants={{
              animate: {
                x: -15,
                opacity: 1,
                visibility: "visible",
              },
              initial: {
                x: 0,
                opacity: 0,
                visibility: "hidden",
             
              },
            }}
          >
            <BsArrowRight size={18} />
            <h2 className="text-sm font-semibold ">Logout</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboardUser;
