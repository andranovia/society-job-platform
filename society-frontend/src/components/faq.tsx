import  { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiArrowDownSLine } from "react-icons/ri";

const faqData = [
  {
    ask: "How this platform work?",
    answer:
      "Our platform operates as a dynamic online community and job application platform. You can create a profile, explore job opportunities",
  },
  {
    ask: "How can i join this platform?",
    answer:
      "Joining is easy! Visit our website, click on the Sign Up button, and follow the simple registration process. ",
  },
  {
    ask: "How is my privacy protected?",
    answer:
      "We prioritize your privacy. Your personal information is encrypted and securely stored. ",
  },
  {
    ask: " How can I get support?",
    answer:
      "If you encounter any issues, our dedicated support team is here to help.",
  },
  {
    ask: " How can I apply for jobs?",
    answer:
      "Applying for jobs is straightforward. Browse through the available opportunities, upload your resume, and submit your application directly through the platform. ",
  },
  {
    ask: "Is society free?",
    answer: "Yes, the our society is entirely free.",
  },
];

const Faq = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);


  const handleSeeMore = (index) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
    
  };

  return (
    <div id="faq" className="w-full py-20 px-4 text-primary">
      <div className="flex flex-col justify-center gap-4 items-center">
        <h1 className="text-4xl font-semibold">Have any question?</h1>
        <h3>Here's an answer for you</h3>
        <div className="flex flex-col gap-4 lg:gap-0 lg:grid grid-cols-2">
          {faqData.map((data, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white border p-4 rounded-md h-[10rem] flex flex-col justify-start items-start gap-4"
            >
              <div className="lg:w-[30rem] flex justify-between w-full items-center">
                <h1 className="text-2xl font-semibold"> {data.ask}</h1>
                <motion.div animate={selectedIndex === index ? {rotate: 180} : {rotate: 0}}>
                <RiArrowDownSLine onClick={() => handleSeeMore(index)} />
                </motion.div>
              </div>
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.p
                    key="answer"
                    className="lg:w-[30rem]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    
                  >
                    {data.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
