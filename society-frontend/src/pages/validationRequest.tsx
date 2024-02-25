import { ChangeEvent, useState } from "react";
import LayoutDashboardUser from "../layout/layoutDashboardUser";

import useJobCategory from "../hooks/useJobCategory";
import useRequestValidation from "../hooks/useRequestValidation";

interface validationRequestProps {
  job_category_id: number;
  job_position: string;
  work_experience: string | null;
  reason_accepted: string | null;
}

const ValidationRequest = () => {
  const [validationRequest, setValidationRequest] =
    useState<validationRequestProps>({
      job_category_id: 1,
      job_position: "",
      work_experience: "",
      reason_accepted: "",
    });
  const [isWorkExperience, setisWorkExperience] = useState(true);

  const { jobCategoryData } = useJobCategory();
  const { sendValidationData } = useRequestValidation();

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValidationRequest((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <LayoutDashboardUser>
      <div className="w-full h-full ">
        <div className="flex flex-col justify-center lg:items-center lg:mt-20  lg:mb-40  mx-4">
          <h1 className="text-4xl my-10 font-semibold mx-6">
            Validation Request
          </h1>
          <div className="flex flex-col lg:w-1/3   m-6 gap-4 justify-center">
            <div className="grid w-full  grid-cols-2  gap-4 items-center ">
              <h2 className="text-lg font-semibold ">Job Category :</h2>
              <select
                name="job_category_id"
                onChange={(e) => handleChange(e)}
                className="border-2 w-full  border-gray-800 rounded-md p-2"
              >
                {jobCategoryData.data.map((data, index) => (
                  <option value={data.id} key={index}>
                    {data.job_category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full gap-4 items-start ">
              <h2 className="text-lg font-semibold ">Job Position :</h2>
              <input
                type="text"
                name="job_position"
                onChange={(e) => handleChange(e)}
                placeholder="eg, Front-End Developer"
                className="border-2 w-full  border-gray-800 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col w-full gap-4 items-start mt-4">
              <div className="grid w-full grid-cols-2  gap-4 items-center ">
                <h2 className="text-lg font-semibold ">Work Experience :</h2>
                <select
                  name="work_experiece_select"
                  onChange={(e) =>
                    setisWorkExperience(e.target.value === "true")
                  }
                  className="border-2 w-full  border-gray-800 rounded-md p-2"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              {isWorkExperience && (
                <input
                  type="text"
                  name="work_experience"
                  onChange={(e) => handleChange(e)}
                  placeholder="eg, 2 years Front-End Developer at PT..."
                  className="border-2 w-full  border-gray-800 rounded-md p-2"
                />
              )}
            </div>
            <div className="flex flex-col w-full gap-4 items-start ">
              <h2 className="text-lg font-semibold ">Reason Accepted :</h2>
              <textarea
                name="reason_accepted"
                onChange={(e) => handleChange(e)}
                placeholder="eg, i've been work around 5 years"
                className="border-2 w-full  border-gray-800 rounded-md p-2"
              />
            </div>
            <button
              className="bg-primary p-4 text-lg font-semibold text-white rounded-md mt-10"
              onClick={() =>
                sendValidationData({ validationRequest: validationRequest })
              }
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
    </LayoutDashboardUser>
  );
};

export default ValidationRequest;
