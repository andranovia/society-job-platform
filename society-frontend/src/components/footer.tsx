
import { BsArrowRight } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="w-full sm:max-w-screen-2xl    h-fit  text-primary  ">
      <div className="flex flex-col justify-center items-start w-full  pt-20 gap-10 bg-base lg:px-20 p-10 ">
        <h2 className="uppercase font-semibold">
          Join us and bring your dreams!
        </h2>
        <h1 className="font-semibold text-2xl lg:text-4xl w-full lg:w-1/2 text-start">
      
          We prioritize your preferences and ensure a transparent experience.
        </h1>
        <div className="flex lg:flex-row flex-col justify-center lg:gap-32 lg:mt-20 ">
            <div className="text-lg font-semibold flex flex-col items-start gap-4">
                <p>@SOCIETYPLATFORM</p>
                <p>Made by Andranovia</p>
            </div>
            <div className="text-lg font-semibold flex flex-col items-start gap-4">
                <p>SOCIAL</p>
                <div className="flex justify-center items-center">
                    INSTAGRAM<BsArrowRight/>  GITHUB<BsArrowRight/> FACEBOOK
                </div>
            </div>

       
        </div>
        <h1 className="text-5xl sm:text-9xl font-bold -mb-4   ">SOCIETY PLATFORM</h1>

      </div>
    </div>
  );
};

export default Footer;
