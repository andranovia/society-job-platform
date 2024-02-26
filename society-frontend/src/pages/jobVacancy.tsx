import React from "react";
import LayoutDashboardUser from "../layout/layoutDashboardUser";
import useJobVacancies from "../hooks/useJobVacancies";
import { Link } from "react-router-dom";

const JobVacancy = () => {
  const { jobVacancies } = useJobVacancies();

  return (
    <LayoutDashboardUser>
      <div className="w-full min-h-screen">
        <div className="flex justify-center items-start lg:items-center mx-8 lg:px-20 lg:mx-20  flex-col mt-32 lg:mt-44">
          <h1 className="font-semibold text-primary text-5xl">Job Vacancy</h1>
          <h2 className="font-normal text-primary text-2xl mt-10">
            List of Job Vacancies
          </h2>
          <div className="flex flex-col w-full lg:w-1/2  ">
            {jobVacancies.vacancies.map((data, index) => (
              <React.Fragment key={index} >
                <div className="flex flex-col  justify-center lg:items-start  mt-10 gap-4 bg-base p-4 w-full">
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-primary">
                      {data.company}
                    </h2>
                    <span className="text-secondary">{data.address}</span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-primary">
                      Available position
                    </h2>
                    <div className="text-secondary flex flex-col items-start">
                      {data.available_position.map((data, index) => (
                        <React.Fragment key={index}>
                          <div className="flex flex-row items-center">
                            <h2>{data.position}</h2>
                            &nbsp;
                            <span> ({data.capacity})</span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <Link to={`/job-vacancies-detail/${data.id}`}>
                  <button className="bg-primary p-2 w-full text-white rounded-b-md">
                    Detail / Apply
                  </button>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </LayoutDashboardUser>
  );
};

export default JobVacancy;
