import { useEffect, useState } from "react";
import axiosInstane from "../tools/axiosInstance";

type applyJobsDataProps = {
  applyJobsData: {
    job_vacancy_id: number;
    position: number;
    notes?: string;
  };
};

type userApplyJobsInfo = {
  vacancies: {
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
      apply_date: string
    };

  }[];
};

const useApplyJobs = () => {
  const [userApplyJobsInfo, setUserApplyJobsInfo] = useState<
    userApplyJobsInfo | undefined
  >(undefined);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axiosInstane
      .get("api/v1/get-job-apply", {
        params: {
            token: token
        }
      })
      .then((res) => setUserApplyJobsInfo(res.data)).catch(err => console.log(err));
  }, [token]);

  const applyJobs = ({ applyJobsData }: applyJobsDataProps) => {
    const payload = {
      ...applyJobsData,
      token: token,
    };

    axiosInstane
      .post("api/v1/job-apply", payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return { applyJobs, userApplyJobsInfo };
};

export default useApplyJobs;
