import { useNavigate } from "react-router-dom";
import axiosInstane from "../tools/axiosInstance";

interface loginProps {
  loginData: {
    id_card_number: number;
    password: string;
  };
}

interface handleResponseProps {
  data: {
    name: string;
    token: string;
  };
}

const useAuthSociety = () => {
  const navigate = useNavigate();

  const handleResponse = ({ data }: handleResponseProps) => {
    navigate("/user-dashboard");
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.name);
  };

  const loginSociety = ({ loginData }: loginProps) => {
    axiosInstane
      .post("api/v1/login", loginData)
      .then((res) => handleResponse(res.data))
      .catch((err) => console.log(err));
  };

  return { loginSociety };
};

export default useAuthSociety;
