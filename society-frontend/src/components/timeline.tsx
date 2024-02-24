import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsArrowDownCircle, BsBag } from "react-icons/bs";
import { SiFramework } from "react-icons/si";
import { TbFriends } from "react-icons/tb";

const Timeline = () => {
  const refOne = useRef(null);
  const isInView = useInView(refOne, { once: true });
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("animate");
    }
  }, [control, isInView]);
  return (
    <div className="w-fit lg:w-full mb-20 flex justify-start items-start lg:justify-center mx-10 lg:mx-0 lg:items-center flex-col">
      <div className="flex justify-start flex-col items-start lg:items-center gap-6 ">
        <BsArrowDownCircle size={40} />
        <motion.div
          className="bg-secondary h-44 w-1 rounded-md mx-4 lg:mx-0 "
          initial="hidden"
          variants={{
            hidden: { opacity: 0, height: 10 },
            animate: {
              opacity: 1,
              height: 140,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            },
          }}
          animate={control}
          ref={refOne}
        ></motion.div>

        <div className="flex items-center mx-3 lg:mx-0 gap-8 lg:gap-2 justify-start">
          <BsBag size={40} color="brown" />
          <div className="lg:text-3xl  lg:mx-0 lg:absolute font-semibold lg:w-[36rem] text-primary  lg:right-16">
            <span className="text-2xl text-secondary">Productive</span>
            <br />
            <span className="">
              Our society app is designed to supercharge your professional life.
            </span>
          </div>
        </div>

        <motion.div
          initial="hidden"
          variants={{
            hidden: { opacity: 0, height: 10 },
            animate: {
              opacity: 1,
              height: 140,
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.6,
              },
            },
          }}
          animate={control}
          ref={refOne}
          className="bg-secondary h-44 w-1 rounded-md mx-4 lg:mx-0"
        ></motion.div>
        <div className="flex items-center mx-3 lg:mx-0 gap-8 lg:gap-2 justify-start">
          <TbFriends size={40} color="brown" />
          <div className="lg:text-3xl lg:left-10 lg:text-end lg:mx-0 lg:absolute font-semibold lg:w-[36rem] text-primary  lg:right-16">
            <span className="text-2xl text-secondary">Collaboration</span>
            <br />
            <span className="">
              Our society app is designed to supercharge your professional life.
            </span>
          </div>
        </div>

        <motion.div
          initial="hidden"
          variants={{
            hidden: { opacity: 0, height: 10 },
            animate: {
              opacity: 1,
              height: 140,
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 1,
              },
            },
          }}
          animate={control}
          ref={refOne}
          className="bg-secondary h-44 w-1 rounded-md mx-4 lg:mx-0 "
        ></motion.div>
        <SiFramework size={20} className="mx-2 lg:mx-0" />
      </div>
    </div>
  );
};

export default Timeline;
