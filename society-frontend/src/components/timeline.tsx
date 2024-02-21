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

  const variantLine = {
   
  };

  return (
    <div className="w-full mb-20 flex justify-center items-center flex-col">
      <div className="flex justify-center flex-col items-center   gap-6 ">
        <BsArrowDownCircle size={40} />
        <motion.div
          className="bg-black h-44 w-1 rounded-md "
          initial="hidden"
          variants={{ hidden: { opacity: 0, height: 10 },
          animate: {
            opacity: 1,
            height: 140,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },}}
          animate={control}
          ref={refOne}
        ></motion.div>
        <div className=" flex items-center gap-10 justify-start ">
          <div className="flex items-center text-green-700 gap-2 justify-start">
            <BsBag size={20} color="green" />
          </div>
          <div className="text-3xl absolute font-semibold w-[36rem] text-gray-800  right-16">
            <span className="text-green-600">Productive</span>
            <br />
            Our society app is designed to supercharge your professional life.
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
                delay: 0.6
              },
            },
          }}
          animate={control}
          ref={refOne}
          className="bg-black h-44 w-1 rounded-md "
        ></motion.div>
        <div className="relative  flex items-center gap-2 justify-start ">
          <div className="flex items-center text-pink-700 gap-2 justify-start">
            <TbFriends size={20} />
          </div>
          <div className="text-3xl absolute font-semibold text-end w-[36rem] text-gray-800 right-32">
            <span className="text-pink-400">Collaboration</span>
            <br />
            Our society app is designed to supercharge your professional life.
          </div>
        </div>
        <motion.div  initial="hidden"
          variants={{
            hidden: { opacity: 0, height: 10 },
            animate: {
              opacity: 1,
              height: 140,
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 1
              },
            },
          }}
          animate={control}
          ref={refOne} className="bg-black h-44 w-1 rounded-md "></motion.div>
        <SiFramework size={20} />
      </div>
    </div>
  );
};

export default Timeline;
