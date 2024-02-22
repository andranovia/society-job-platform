import { RiArrowDownSLine } from "react-icons/ri";
import { motion, useAnimationControls } from "framer-motion";
import { FaPeopleGroup, FaRegCircleCheck, FaJoint } from "react-icons/fa6";
import UseMobile from "../hooks/useMobile";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const controls = useAnimationControls();
  const { isMobile } = UseMobile();
  const handleHover = () => {
    controls.start({ opacity: 1, visibility: "visible" });
  };

  const handleHoverEnd = () => {
    controls.start({ opacity: 0, visibility: "hidden" });
  };

  const navlinkArray = [
    {
      link: "Society Data",
      desc: "Society around you",
      icons: <FaPeopleGroup />,
    },
    {
      link: "Job Validation",
      desc: "Apply your validation",
      icons: <FaRegCircleCheck />,
    },
    {
      link: "Job Application",
      desc: "Apply for jobs",
      icons: <FaJoint />,
    },
  ];

  return (
    <div className="flex bg-white z-40 fixed w-full justify-between items-center py-4 pb-8 top-0 ">
      <div className="flex justify-center items-baseline text-center sm:mx-20 mx-4 gap-10">
        <h1 className="text-3xl font-bold">Society</h1>
        {!isMobile && (
          <div className="flex flex-col justify-start items-start">
            <motion.div
              onMouseEnter={() => handleHover()}
              onMouseLeave={() => handleHoverEnd()}
              className="flex relative z-20 justify-center items-center gap-2 cursor-pointer"
            >
              Feature <RiArrowDownSLine />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={controls}
              onMouseEnter={() => handleHover()}
              onMouseLeave={() => handleHoverEnd()}
              className="absolute rounded-lg  pt-10 bg-transparent text-black"
            >
              <div className="flex p-4 gap-4 justify-center bg-white flex-col bg-opacity-90 backdrop-filter backdrop-blur-sm items-start  rounded-lg  border-black ">
                <h2 className="font-semibold">Society</h2>
                <div className="grid grid-cols-2 justify-start items-start gap-8">
                  {navlinkArray.map((data, index) => (
                    <div
                      key={index}
                      className="flex  justify-start gap-4 items-center p-2 rounded-md duration-400 cursor-pointer transition-all hover:bg-gray-100"
                    >
                      {data.icons}
                      <div className="flex flex-col justify-start items-start">
                        <h1 className="font-bold">{data.link}</h1>
                        <p>{data.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-4 mx-4 sm:mx-20">
        <Link
          className="font-bold text-gray-900 cursor-pointer"
          to="about"
          duration="500"
          spy={true}
          smooth={true}
        >
          About /
        </Link>
        <Link
          className="font-bold text-gray-900 cursor-pointer"
          to="timeline"
          duration="500"
          spy={true}
          smooth={true}
        >
          Timeline /
        </Link>
        <Link
          className="font-bold text-gray-900 cursor-pointer"
          to="faq"
          duration="500"
          spy={true}
          smooth={true}
        >
          FAQ /
        </Link>

        {isMobile && (
          <div>
            <GiHamburgerMenu size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
