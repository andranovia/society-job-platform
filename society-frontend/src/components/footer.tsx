import Marquee from "react-fast-marquee";
import { BsArrowRight } from "react-icons/bs";
import { FiArrowRightCircle } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full h-fit m-4  text-white  ">
      <div className="flex flex-col justify-center items-start   pt-20 gap-10  bg-black  ">
        <div className="flex flex-col justify-center items-start gap-10 p-10">
          <h2 className="uppercase font-semibold">
            Join us and bring your dreams!
          </h2>
          <h1 className="font-semibold text-4xl w-1/2 text-start">
            We prioritize your preferences and ensure a transparent experience.
          </h1>
          <div className="flex justify-center gap-32 mt-20 ">
            <div className="text-lg font-semibold flex flex-col items-start gap-4">
              <p>@SOCIETYPLATFORM</p>
              <p>Made by Andranovia</p>
            </div>
            <div className="text-lg font-semibold flex flex-col items-start gap-4">
              <p>SOCIAL</p>
              <div className="flex justify-center items-center">
                INSTAGRAM
                <BsArrowRight /> GITHUB
                <BsArrowRight /> FACEBOOK
              </div>
            </div>
          </div>
        </div>
        <Marquee autoFill={true}>
          <h1 className="text-9xl font-bold flex justify-center gap-4">
            {<>&nbsp;</>} SOCIETY PLATFORM <FiArrowRightCircle />
          </h1>
        </Marquee>
      </div>
    </div>
  );
};

export default Footer;
