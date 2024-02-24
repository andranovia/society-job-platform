import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "./animatedText";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const animatedTextHero =
    "Secure your Dream Job in a thriving Society of success.";

  return (
    <div className="sm:w-2/3 w-2/3 shadow-sm sm:mx-20 mx-8 py-4 lg:py-10 lg:pb-24 flex flex-col justify-center sm:gap-10 gap-4 font-bold ">
      <motion.div
        className="text-2xl sm:text-8xl mt-4  text-white"
        variants={{
          hidden: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.04,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        <AnimatedText animatedText={animatedTextHero} />
      </motion.div>
      <p className="text-white font-normal text-sm sm:text-2xl sm:font-semibold hidden lg:block">
        What are you wating for? Join today and bring up Your future!
      </p>
    </div>
  );
};

export default Hero;
