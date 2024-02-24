
import { BiFemale, BiMale } from "react-icons/bi";

const reviewCardData = [
  {
    icons: <BiFemale/>,
    title: "Tatiana lynn",
    description: "I got my first job here, how can anybody doesnt know this platform.",
  },
  {
    icons: <BiMale/>,
    title: "David Liam",
    description: "This platform is so good! i can find job so fast, cant wait to get it!",
  },
  {
    icons: <BiMale/>,
    title: "Mark Mansons",
    description: "Finally, i can find my dream job here, its really a game changer.",
  },
  
];

const Review = () => {
  return (
    <div id="review" className="w-full  flex justify-center flex-col p-4 items-center gap-10">
        <h1 className="font-semibold w-80 px-4 lg:px-0 lg:w-[30rem] text-primary text-lg  sm:text-2xl ">
          As a platform our job is keeping the user <span className="text-secondary">comfort</span>, <span className="text-secondary">comfortefficiency</span>, and <span className="text-secondary">productivity</span> so they bring dreams comes alive.
        </h1>
      <div className="flex lg:flex-row flex-col justify-center pb-10">
        
        {reviewCardData.map((data, index) => (
          <>
            <div key={index} className="w-80 p-6 border-2 text-primary flex justify-center items-start flex-col gap-4 ">
              <div className="font-semibold text-lg"> "{data.description}"</div>

              <div className="font-bold flex justify-center items-center gap-2">{data.icons}{data.title}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Review;
