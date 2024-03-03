import { useEffect, useState } from "react";
import axiosInstane from "../tools/axiosInstance";

interface jobVacanciesData {
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
    }[]
  }[];
}

const useJobVacancies = () => {
  
  const [jobVacancies, setJobVacancies] = useState<jobVacanciesData>({
    vacancies: [],
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    axiosInstane
      .get("api/v1/job-vacancy", {
        params: {
          token: token,
        },
      })
      .then((res) => setJobVacancies(res.data));
  }, [token]);

  return { jobVacancies };
};

export default useJobVacancies;
