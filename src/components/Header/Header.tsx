import menuOpen from "../../assets/menu-icon.svg";
import menuClose from "../../assets/menu-close-icon.svg";
import cart from "../../assets/cart-icon.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

const HeaderComp = ({ menuToggle, handleMenuToggle }: { menuToggle: boolean; handleMenuToggle: () => void }) => {
  return (
    <>
      <div className="header">
        <header>
          <div className="menu-icon" onClick={handleMenuToggle}>
            <img src={menuOpen} alt="" />
          </div>
          <div className="cart-icon">
            <img src={cart} alt="" />
          </div>
        </header>
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
      </div>
    </>
  );
};

export default HeaderComp;
