import { useEffect, useState } from "react";
import axiosInstane from "../tools/axiosInstance";

interface regionalDataProps {
    data: {
        id: number,
        province: string,
        district: string,
    }[];
}



const useRegional = () => {
  const [regionalData, setRegionalData] = useState<regionalDataProps>({ data: [] });

  useEffect(() => {
    axiosInstane
      .get("api/v1/regionals")
      .then((res) => setRegionalData(res))
      .catch((err) => console.log(err));
  });

  return { regionalData };
};

export default useRegional;
