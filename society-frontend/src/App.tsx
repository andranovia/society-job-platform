import { useNavigate } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  const navigate = useNavigate();

  const handleNavbarLinkClick = (section) => {
    navigate(`/#${section}`);
  };

  return (
    <>
    <div className="">
    <Navbar onLinkClick={handleNavbarLinkClick} />
      </div>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
