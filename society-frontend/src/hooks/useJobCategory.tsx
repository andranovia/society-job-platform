import { useEffect, useState } from "react";
import axiosInstane from "../tools/axiosInstance";

interface JobCategoryDataProps {
    data: {
        id: number,
        job_category: string,

    }[];
}



const useJobCategory = () => {
  const [jobCategoryData, setJobCategoryData] = useState<JobCategoryDataProps>({ data: [] });

  useEffect(() => {
    axiosInstane
      .get("api/v1/job-category")
      .then((res) => setJobCategoryData(res.data))
      .catch((err) => console.log(err));
  });

  return { jobCategoryData };
};

export default useJobCategory;
