
import axiosInstane from "../tools/axiosInstance";

interface validationRequestProps {
  validationRequest: {
    job_category_id: number;
    job_position: string;
    work_experience: string | null;
    reason_accepted: string | null;
  };
}

const useRequestValidation = () => {
  const sendValidationData = ({
    validationRequest,
  }: validationRequestProps) => {
    axiosInstane
      .post("api/v1/validation-request", validationRequest)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return { sendValidationData };
};

export default useRequestValidation;
