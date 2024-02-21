import React, { ChangeEvent, useState } from "react";
import axiosInstane from "../tools/axiosInstance";

interface LoginDataPorps {
  id_card_nummber: number;
  password: string;
}

const Login = () => {
  const [loginData, setloginData] = useState<LoginDataPorps>({
    id_card_nummber: 0,
    password: "",
  });

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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full">
      <div className="flex justify-center flex-col items-center w-full h-screen">
        <div className="bg-white border-2 border-gray-950 p-10 flex flex-col justify-start items-center">
          <h1 className="text-xl font-semibold">Login</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-start">
              <h1>Id Card </h1>
              <input
                name="id_card_number"
                value={loginData.id_card_nummber}
                onChange={(e) => handleOnChange(e)}
                type="text"
                className="border-2 p-2 rounded-md border-gray-950"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1>Password </h1>
              <input
                name="password"
                value={loginData.password}
                onChange={(e) => handleOnChange(e)}
                type="text"
                className="border-2 p-2 rounded-md border-gray-950"
              />
            </div>
            <button className="bg-black rounded-md p-2 text-white" onClick={() => login()}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
