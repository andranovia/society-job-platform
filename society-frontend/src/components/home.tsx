import AboutUs from "./aboutUs";
import Faq from "./faq";
import Footer from "./footer";
import Hero from "./hero";

import Review from "./review";
import Timeline from "./timeline";

const Home = () => {
  return (
    <>
      <div className="mb-[40rem] bg-white relative z-20 ">
        <div className="w-fit rounded-md mt-20 bg-black m-4 relative z-30 ">
          <Hero />
        </div>
        <AboutUs />
        <Timeline />
        <Review />

        <Faq />
      </div>
      <div className="fixed w-full     bottom-0 bg-white z-0">
        <Footer />
      </div>
    </>
  );
};

export default Home;
