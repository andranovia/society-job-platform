import { useEffect, useState } from "react";

const UseMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
  }, []);

  return {
    isMobile,
  };
};

export default UseMobile;
