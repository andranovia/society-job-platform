import React from "react";

type userApplyJobsInfoProps = {
  userApplyJobsInfo?: {
    vacancies?: {
      id: number;
      category: {
        id: number;
        job_category: string;
      };
      company: string;
      address: string;
      position: {
        position: string;
        apply_status: string;
        notes?: string;
        apply_date: string;
      };
    }[];
  };
};

const UserJobApplyInfo = ({ userApplyJobsInfo }: userApplyJobsInfoProps) => {
  return (
    <React.Fragment>
      <div className="border-2 flex flex-col gap-4 rounded-md text-start mt-4 w-full p-2 ">
        {userApplyJobsInfo?.vacancies?.map((data, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-start w-full items-center ">
              <h2 className="font-semibold text-lg">{data.company}</h2>
            </div>
            <div className="flex justify-between items-center w-full  mt-4">
              <h2 className=" ">Address</h2>
              <h2 className="font-thin ">{data.address}</h2>
            </div>
            <div className="flex justify-between items-center w-full  mt-4">
              <h2 className=" ">Position</h2>
              <ul className="list-disc flex flex-col items-start gap-2">
                <li className="font-thin  ">
                  {data.position.position}{" "}
                  <span className="ml-2 bg-secondary text-primary font-semibold text-sm p-1  rounded-md">
                    {data.position.apply_status}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center w-full  mt-4">
              <h2 className=" ">Apply Date</h2>
              <h2 className="font-thin ">{data.position.apply_date}</h2>
            </div>
            <div className="flex justify-between items-center w-full  mt-4">
              <h2 className=" ">Notes</h2>
              <h2 className="font-thin ">
                {data.position.notes === null ? "none" : data.position.notes}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default UserJobApplyInfo;
