import menuClose from "../../assets/menu-close-icon.svg";
import { Link } from "react-router-dom";
import "./Nav.scss";

const NavComponent = ({ menuToggle, handleMenuToggle }: { menuToggle: boolean; handleMenuToggle: () => void }) => {
  return (
    <div className={"mobile-menu" + (menuToggle ? "" : " hidden")}>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <img src={menuClose} alt="" />
      </div>
      <nav className="nav">
        <Link to="/menu" onClick={handleMenuToggle}>
          Meny
        </Link>
        <Link to="/about" onClick={handleMenuToggle}>
          Vårt kaffe
        </Link>
        <Link to="/profile" onClick={handleMenuToggle}>
          Min profil
        </Link>
        <Link to="/status" onClick={handleMenuToggle}>
          Orderstatus
        </Link>
      </nav>
    </div>
  );
};

export default NavComponent;
