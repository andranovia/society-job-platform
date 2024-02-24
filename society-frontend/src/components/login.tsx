import { ChangeEvent, useState } from "react";
import axiosInstane from "../tools/axiosInstance";
import { useNavigate } from "react-router-dom";

interface LoginDataPorps {
  id_card_number: number;
  password: string;
}

const Login = () => {
  const [loginData, setloginData] = useState<LoginDataPorps>({
    id_card_number: 0,
    password: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setloginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const login = () => {
    axiosInstane
      .post("api/v1/auth/login", loginData)
      .then(() => navigate("/request"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full bg-base">
      <div className="flex justify-center lg:flex-row flex-col-reverse gap-10 items-center w-full h-screen">
        <div className="bg-white border-2 border-gray-950 rounded-xl p-10 flex flex-col justify-start text-primary items-center">
          <h1 className="text-xl lg:text-2xl font-semibold">Login</h1>
          <div className="flex flex-col font-semibold gap-4 mt-10">
            <div className="flex flex-col  gap-2 justify-center items-start">
              <h1>Id Card </h1>
              <input
                name="id_card_number"
                value={loginData.id_card_number}
                onChange={(e) => handleOnChange(e)}
                type="text"
                className="border-2 p-2 rounded-md border-gray-950"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-start">
              <h1>Password </h1>
              <input
                name="password"
                value={loginData.password}
                onChange={(e) => handleOnChange(e)}
                type="text"
                className="border-2 p-2 rounded-md border-gray-950"
              />
            </div>
            <button
              className="bg-primary rounded-md p-2 text-white"
              onClick={() => login()}
            >
              Login
            </button>
          </div>
        </div>
        <div className="text-2xl hidden lg:block lg:text-5xl font-semibold w-80 text-primary">
          <h1>Achive your most dreamable stuff you've never imagine</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
