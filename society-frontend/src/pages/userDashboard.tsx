import LayoutDashboardUser from "../layout/layoutDashboardUser";
import { Link } from "react-router-dom";
import useRequestValidation from "../hooks/useRequestValidation";

const UserDashboard = () => {
  const { validationData } = useRequestValidation();

  return (
    <LayoutDashboardUser>
      <div className="w-full h-full">
        <div className="flex justify-center text-center lg:text-start items-center lg:items-start mx-8 lg:px-20 lg:mx-20  flex-col mt-32">
          <h1 className="font-semibold text-primary text-4xl">Dashboard</h1>

          <div className="flex flex-col gap-8 mt-20 ">
            <h2 className="text-gray-700 text-2xl ">My Data Validation</h2>
            <div className=" rounded-md p-4">
              <h2 className="text-gray-700 font-semibold">Data Validation</h2>
              {validationData ? (
                <>
                  <div className="border-2 flex flex-col gap-4 rounded-md text-start mt-4 w-full p-2 ">
                    <div className="flex justify-between  items-center ">
                      <h2 className="font-semibold">status</h2>
                      <h2 className="bg-green-300 p-1 rounded-md">
                        {validationData.status}
                      </h2>
                    </div>
                    <div className="flex justify-between items-center gap-10">
                      <h2 className="font-semibold">Job Category</h2>
                      <h2 className="p-1 rounded-md">
                        {validationData.job_category_id}
                      </h2>
                    </div>
                    <div className="flex justify-between items-center gap-10">
                      <h2 className="font-semibold">Job Position</h2>
                      <h2 className="p-1 rounded-md  truncate">
                        {validationData.job_position}
                      </h2>
                    </div>
                    <div className="flex justify-between items-center gap-10">
                      <h2 className="font-semibold">Reason accepted</h2>
                      <h2 className="p-1 rounded-md  truncate">
                        {validationData.reason_accepted}
                      </h2>
                    </div>
                    <div className="flex justify-between items-center gap-10">
                      <h2 className="font-semibold">Validator</h2>
                      <h2 className="p-1 rounded-md">
                        {validationData.validator_id
                          ? validationData.validator_id
                          : "processing"}
                      </h2>
                    </div>
                    <div className="flex justify-between items-center gap-10">
                      <h2 className="font-semibold">Validator notes</h2>
                      <h2 className="p-1 rounded-md">
                        {validationData.validator_notes
                          ? validationData.validator_notes
                          : "none"}
                      </h2>
                    </div>
                  </div>
                </>
              ) : (
                <Link to={"/validation-request"}>
                  <button className="mt-4 bg-primary py-3 px-10 text-white">
                    + request validation
                  </button>
                </Link>
              )}
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
        </div>
      </div>
    </LayoutDashboardUser>
  );
};

export default UserDashboard;
