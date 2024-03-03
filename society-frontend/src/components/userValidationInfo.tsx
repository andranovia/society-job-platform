import React from "react";
import { Link } from "react-router-dom";

type userValidationDataProps = {
  validationData?: {
    id: number;
    job_category_id: number;
    society_id: number;
    validator_id?: number;
    status: "accepted" | "pending" | "rejected";
    work_experience: string;
    job_position: string;
    reason_accepted: string;
    validator_notes?: string;
  };
};

const UserValidationInfo = ({ validationData }: userValidationDataProps) => {
  return (
    <React.Fragment>
      {" "}
      {validationData && Object.keys(validationData).length > 0 ? (
        <>
          <div className="border-2 flex flex-col gap-4 rounded-md text-start mt-4 w-full p-2 ">
            <div className="flex justify-between  items-center ">
              <h2 className="font-semibold">status</h2>
              <h2 className="bg-secondary text-primary font-semibold text-sm p-1 rounded-md">
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
    </React.Fragment>
  );
};

export default UserValidationInfo;
