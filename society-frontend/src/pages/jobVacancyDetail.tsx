import React from "react";
import useJobVacanciesDetail from "../hooks/useJobVacanciesDetail";
import LayoutDashboardUser from "../layout/layoutDashboardUser";
import { useParams } from "react-router-dom";

const JobVacancyDetail = () => {
  const { id } = useParams();
  const { jobVacancyDetail } = useJobVacanciesDetail(id);

  return (
    <LayoutDashboardUser>
      <div className="w-full min-h-screen    mt-36">
        <div className="flex flex-col justify-center items-start mx-10">
          <h1 className="text-2xl lg:text-4xl text-primary font-semibold">
            {jobVacancyDetail?.vacancies.company}
          </h1>
          <p className="text-secondary">
            {jobVacancyDetail?.vacancies.address}
          </p>
          <h1 className="text-lg text-primary font-semibold mt-10">
            Description
          </h1>
          <p className="text-secondary">
            {jobVacancyDetail?.vacancies.description}
          </p>
          <h1 className="text-lg text-primary font-semibold mt-10">
            Select Position
          </h1>
          <div className="flex flex-col w-full">
            <div className=" w-full mt-4">
              {jobVacancyDetail?.vacancies.available_position.map(
                (data, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col gap-4 items-start w-full bg-base p-4">
                      <div>
                        <h1 className="text-lg text-primary font-semibold ">
                          Position:
                        </h1>
                        <p className="text-sm"> {data.position}</p>
                      </div>
                      <div>
                        <h1 className="text-lg text-primary font-semibold ">
                          Capacity:
                        </h1>
                        <p className="text-sm"> {data.capacity}</p>
                      </div>
                      <div>
                        <h1 className="text-lg text-primary font-semibold ">
                          Application / Max:
                        </h1>
                        <p className="text-sm"> {data.apply_capacity}</p>
                      </div>
                    </div>
                    <button className="bg-primary p-2 w-full text-white rounded-b-md">
                      Apply For This Job
                    </button>
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboardUser>
  );
};

export default JobVacancyDetail;
