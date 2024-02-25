import AboutUs from "../components/aboutUs";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/hero";

import Review from "../components/review";
import Timeline from "../components/timeline";

const Home = () => {
  return (
    <>
      <div className="mb-[40rem] bg-white relative z-20 ">
        <div className="w-fit rounded-md mt-20 bg-[url('./img/hero-image.png')] bg-cover  m-4 relative z-30 ">
          <Hero />
        </div>
        <AboutUs />
         <Timeline />
        <Review />

        <Faq />
      </div>
      <div className="fixed w-screen   bottom-0 bg-white z-0">
        <Footer />
      </div>
    </>
  );
};

export default Home;
