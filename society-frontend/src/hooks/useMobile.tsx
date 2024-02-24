import { useEffect, useState } from "react";

const UseMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    let timeout: ReturnType<typeof setTimeout>;

    const handleDebounce = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleResize, 300);
    }

    window.addEventListener('resize', handleDebounce);

    return () => {
      window.removeEventListener('resize', handleDebounce);
      clearTimeout(timeout);
    }



  }, []);




  return {
    isMobile,
  };
};

export default UseMobile;
