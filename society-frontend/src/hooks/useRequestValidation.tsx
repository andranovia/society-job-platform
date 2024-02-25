import { useNavigate } from "react-router-dom";
import axiosInstane from "../tools/axiosInstance";
import { useEffect, useState } from "react";

interface validationRequestProps {
  validationRequest: {
    job_category_id: number;
    job_position: string;
    work_experience: string | null;
    reason_accepted: string | null;
  };
}

interface validationDataProps {
  id: number;
  job_category_id: number;
  society_id: number;
  validator_id?: number;
  status: "accepted" | "pending" | "rejected";
  work_experience: string;
  job_position: string;
  reason_accepted: string;
  validator_notes?: string;
}

const useRequestValidation = () => {
  const [validationData, setValidationData] = useState<
    validationDataProps | undefined
  >(undefined);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    axiosInstane
      .get("api/v1/validation-get", {
        params: {
          token: token
        }
      })
      .then((res) => setValidationData(res.data));
  }, [token]);

  const sendValidationData = ({
    validationRequest,
  }: validationRequestProps) => {
    const validationRequestData = {
      ...validationRequest,
      token,
    };

    axiosInstane
      .post("api/v1/validation-request", validationRequestData)
      .then(() => navigate("/user-dashboard"))
      .catch((err) => console.log(err));
  };

  return { sendValidationData, validationData };
};

export default useRequestValidation;
