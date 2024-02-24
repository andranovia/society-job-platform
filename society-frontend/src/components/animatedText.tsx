import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

type animatedTextProps = {
  animatedText: string;
};

const AnimatedText = ({ animatedText }: animatedTextProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <>
      <motion.div className=" ">
        {animatedText.split(" ").map((word, index) => (
          <div className={"inline-block overflow-hidden sm:h-28"}>
            <motion.div
              variants={{
                hidden: { opacity: 1, y: 70 },
                animate: {
                  opacity: 1,
                  y: 0,

                  transition: {
                    type: "just",

                    damping: "8",
                    stiffness: "100",
                  },
                },
              }}
              key={index}
            >
              <h1 className="">
                {word}
                {<>&nbsp;</>}
              </h1>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AnimatedText;
