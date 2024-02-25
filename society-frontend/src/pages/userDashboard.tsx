import React from "react";
import LayoutDashboardUser from "../layout/layoutDashboardUser";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <LayoutDashboardUser>
      <div className="w-full h-full">
        <div className="flex justify-center items-start mx-8 lg:mx-20  flex-col mt-32">
          <h1 className="font-semibold text-primary text-4xl">Dashboard</h1>

          <div className="flex flex-col gap-8 mt-20">
            <h2 className="text-gray-700 text-2xl">My Data Validation</h2>
            <div className=" rounded-md p-4">
              <h2 className="text-gray-700 font-semibold">Data Validation</h2>

              <Link to={"/validation-request"}>
                <button className="mt-4 bg-primary py-3 px-10 text-white">
                  + request validation
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-10 mb-20">
            <h2 className="text-gray-700 text-2xl">My Job Application</h2>

            <div className="bg-yellow-100 p-2 rounded-md">
              Your validation must be approved by validator to apply for jobs.
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboardUser>
  );
};

export default UserDashboard;
