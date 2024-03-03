import "./Landing.scss";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page" onClick={() => navigate("/menu")}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h1>Air Bean</h1>
      <p>Dronedelivered coffee</p>
    </div>
  );
};

export default LandingPage;
