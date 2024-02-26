import { useCallback, useEffect, useState } from "react";
import axiosInstane from "../tools/axiosInstance";

interface jobVacanciesDetailData {
  vacancies: {
    id: number;
    category: {
      id: number;
      job_category: string;
    };
    company: string;
    address: string;
    description: string;
    available_position: {
      id: number;
      job_vacancy_id: string;
      position: string;
      capacity: number;
      apply_capacity: string;
    }[];
  };
}

const useJobVacanciesDetail = (id: string | undefined) => {
  const [jobVacancyDetail, setJobVacancyDetail] = useState<
    jobVacanciesDetailData | undefined
  >(undefined);

  const token = localStorage.getItem("token");

  const fetchJobVacancyDetail = useCallback(() => {
    axiosInstane
      .get(`/api/v1/job-vacancy/${id}`, {
        params: {
          token: token,
        },
      })
      .then((res) => setJobVacancyDetail(res.data))
      .catch((err) => console.log(err));
  }, [id, token]);

  useEffect(() => {
    fetchJobVacancyDetail();
  }, [fetchJobVacancyDetail]);

  return { jobVacancyDetail };
};

export default useJobVacanciesDetail;
