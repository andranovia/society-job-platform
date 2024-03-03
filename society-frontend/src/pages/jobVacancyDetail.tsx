import React, { useState } from "react";
import useJobVacanciesDetail from "../hooks/useJobVacanciesDetail";
import LayoutDashboardUser from "../layout/layoutDashboardUser";
import { useParams } from "react-router-dom";
import useApplyJobs from "../hooks/useApplyJobs";

interface applyJobsDataProps {
  position_id: number;
  notes?: string;
}


const JobVacancyDetail = () => {
  const { id } = useParams();
  const { jobVacancyDetail } = useJobVacanciesDetail(id);
  const [applyJobsData, setApplyJobsData] = useState<applyJobsDataProps>({
    position_id: 0,
  });
  const { applyJobs } = useApplyJobs();

  const handleChange = (positionId: number) => {
    setApplyJobsData((prevData) => ({
      ...prevData,
      position_id: positionId,
    }));
  };

  const handleApplyJobs = () => {

    const job_vacancy_id = jobVacancyDetail?.vacancies.id || 0;
    const applyData = {
      job_vacancy_id,
      position: applyJobsData.position_id
    }

    applyJobs({applyJobsData: applyData});
  };

  return (
    <LayoutDashboardUser>
      <div className="w-full min-h-screen    mt-36">
        <div className="flex flex-col justify-center items-start lg:items-center mx-10">
          <h1 className="text-2xl lg:text-4xl text-primary font-semibold">
            {jobVacancyDetail?.vacancies.company}
          </h1>
          <p className="text-secondary">
            {jobVacancyDetail?.vacancies.address}
          </p>
          <h1 className="text-lg text-primary lg:text-2xl font-semibold mt-10">
            Description
          </h1>
          <p className="text-secondary">
            {jobVacancyDetail?.vacancies.description}
          </p>
          <h1 className="text-lg text-primary lg:text-2xl font-semibold mt-10">
            Select Position
          </h1>

          <div className="relative  shadow-md sm:rounded-lg mt-10 z-2">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="p-4">
              
                  </th>
                  <th scope="col" className="lg:px-32 p-3 py-3">
                    Position
                  </th>
                  <th scope="col" className="lg:px-32 py-3 p-3">
                    Capacity
                  </th>
                  <th scope="col" className="lg:px-32 py-3 p-3">
                    Application / Max
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white   ">
                  {jobVacancyDetail?.vacancies.available_position.map(
                    (data, index) => (
                      <React.Fragment key={index}>
                        <td className="w-4 p-4">
                          <div className="flex items-center ">
                            <input
                              id="checkbox"
                              type="checkbox"
                              name="position"
                              onChange={() => handleChange(data.id)}
                              className="w-4 h-4 text-gray-500 bg-gray-100  border-gray-300 rounded  ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 "
                            />
                            <label form="checkbox" className="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                        
                          className="lg:px-32  py-4 font-medium p-3 text-gray-900  "
                        >
                           {data.position}
                  
                        </th>
                        <td className="lg:px-32 py-4 p-3 text-center">{data.capacity}</td>
                        <td className="lg:px-32 py-4 p-3 text-center lg:text-start">{data.apply_capacity}</td>
                      </React.Fragment>
                    )
                  )}
                </tr>
              </tbody>
            </table>
           
          </div>
          <div className="mt-8">
          <button onClick={() => handleApplyJobs()} className="rounded-md bg-primary p-4 text-white">Apply for jobs</button>
          </div>
        </div>
      </div>
    </LayoutDashboardUser>
  );
};

export default JobVacancyDetail;
