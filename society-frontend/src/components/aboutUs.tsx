import { useScroll, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const element = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  const [animationValues, setAnimationValues] = useState({
    societyRegistered: 0,
    societyJob: 0,
    companyWork: 0,
  });

  useEffect(() => {
    const limits = {
      societyRegistered: 3000,
      societyJob: 1000,
      companyWork: 400,
    };

    const interval = setInterval(() => {
      if (isInView) {
        setAnimationValues((prev) => ({
          societyJob: Math.min(prev.societyJob + 5, limits.societyJob),
          companyWork: Math.min(prev.companyWork + 5, limits.companyWork),
          societyRegistered: Math.min(
            prev.societyRegistered + 5,
            limits.societyRegistered
          ),
        }));
      }
    });

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.div
    id="about"
    
      ref={element}
      style={{ opacity: scrollYProgress }}
      className="flex flex-col-reverse sm:flex-row justify-center items-center gap-28  py-20"
    >
      <div className="1/3 flex flex-col gap-8">
        <h1 className="font-semibold text-3xl sm:text-5xl sm:mx-0 mx-4">
          What we've done
        </h1>
        <div className="grid grid-cols-2 gap-10 mx-4 sm:mx-0">
          <div className=" p-8  rounded-md text-white bg-black">
            <div className="flex flex-col items-start justify-center font-bold text-3xl">
              <span>{animationValues.societyRegistered}</span>
              <p className="text-base font-semibold">Society has registered</p>
            </div>
          </div>
          <div className=" p-8  rounded-md text-black bg-white">
            <div className="flex flex-col items-start justify-center font-bold text-3xl">
              <span>{animationValues.societyJob}</span>
              <p className="text-base font-semibold">Society has got a job</p>
            </div>
          </div>

          <div className=" p-8 col-span-2  rounded-md text-white bg-black"  ref={ref}>
            <div className="flex flex-col items-start justify-center font-bold text-3xl">
              <span>{animationValues.companyWork}</span>
              <p className="text-base font-semibold">
                Company that work with us
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-1/3 mx-6 sm:mx-0 flex flex-col justify-center items-start gap-10">
        <h1 className="font-semibold text-3xl sm:text-5xl ">
          A Job Seekers platform that bring dreams comes alife.
        </h1>
        <div className="flex justify-start sm:flex-row flex-col gap-4  items-start">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-lg font-semibold">What are we</h2>
            <p className="sm:w-2/3">
              A dynamic community built for career enthusiasts like you. We
              believe in the power of connections, fostering a society where
              individuals come together to share, learn, and grow.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <h2 className="text-lg font-semibold">Why are we?</h2>
            <p className="sm:w-2/3">
              we are dedicated to empowering your career journey. Our platform
              opens doors to a world of opportunities.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
