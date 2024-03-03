import LayoutDashboardUser from "../layout/layoutDashboardUser";
import { Link } from "react-router-dom";
import useRequestValidation from "../hooks/useRequestValidation";
import UserValidationInfo from "../components/userValidationInfo";
import UserJobApplyInfo from "../components/userJobApplyInfo";
import useApplyJobs from "../hooks/useApplyJobs";

const UserDashboard = () => {
  const { validationData } = useRequestValidation();
  const { userApplyJobsInfo } = useApplyJobs();
  return (
    <LayoutDashboardUser>
      <div className="w-full h-full">
        <div className="flex justify-center text-center lg:text-start items-center lg:items-start mx-8 lg:px-20 lg:mx-20  flex-col mt-32">
          <h1 className="font-semibold text-primary text-4xl">Dashboard</h1>

          <div className="flex flex-col gap-8 mt-20 ">
            <h2 className="text-gray-700 text-2xl ">My Data Validation</h2>
            <div className=" rounded-md p-4">
              <h2 className="text-gray-700 font-semibold">Data Validation</h2>
              <div className="w-full lg:w-[30vw]">
              <UserValidationInfo validationData={validationData} />
              </div>
            </div>
          </div>
          <div
            className={`flex  ${
              validationData?.status === "accepted" ? "lg:flex-row" : "flex-col"
            } w-full justify-between flex-col  items-center gap-8 mt-10 mb-20`}
          >
            <h2 className="text-gray-700 text-2xl">My Job Application</h2>
            {validationData?.status === "accepted" ? (
              <Link to={"/job-vacancies"}>
                <button className="mt-4 bg-primary py-3 px-10 text-white">
                  + Add Job Application
                </button>
              </Link>
            ) : (
              <div className="bg-yellow-100 p-2 rounded-md">
                Your validation must be approved by validator to apply for jobs.
              </div>
            )}
          </div>
          <div className="w-full lg:w-[30vw]">
         
            <UserJobApplyInfo userApplyJobsInfo={userApplyJobsInfo} />
          </div>
        </div>
      </div>
    </LayoutDashboardUser>
  );
};

export default UserDashboard;
