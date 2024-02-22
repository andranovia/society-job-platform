import { BiFemale, BiMale } from "react-icons/bi";

const reviewCardData = [
  {
    icons: <BiFemale />,
    title: "Tatiana lynn",
    description:
      "I got my first job here, how can anybody doesnt know this platform.",
  },
  {
    icons: <BiMale />,
    title: "David Liam",
    description:
      "This platform is so good! i can find job so fast, cant wait to get it!",
  },
  {
    icons: <BiMale />,
    title: "Mark Mansons",
    description:
      "Finally, i can find my dream job here, its really a game changer.",
  },
];

const Review = () => {
  return (
    <div className="w-full  flex justify-center flex-col items-center gap-10">
      <h1 className="font-semibold w-[30rem] mb-20 text-gray-500 text-3xl sm:text-2xl ">
        As a platform our job is keeping the user{" "}
        <span className="text-gray-900">comfort</span>,{" "}
        <span className="text-gray-900">comfortefficiency</span>, and{" "}
        <span className="text-gray-900">productivity</span>.
      </h1>
      <div className="flex justify-center pb-10">
        {reviewCardData.map((data, index) => (
          <>
            <div
              key={index}
              className="w-80 p-6 border-2 flex justify-center items-start flex-col gap-4 "
            >
              <div className="font-semibold text-lg"> "{data.description}"</div>

              <div className="font-bold flex justify-center items-center gap-2">
                {data.icons}
                {data.title}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Review;
