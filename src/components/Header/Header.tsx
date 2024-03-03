import menuOpen from "../../assets/menu-icon.svg";
import menuClose from "../../assets/menu-close-icon.svg";
import cart from "../../assets/cart-icon.svg";
import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <div className="header">
        <header>
          <div className="menu-icon" onClick={() => setMenuToggle(!menuToggle)}>
            <img src={menuOpen} alt="" />
          </div>
          <div className="cart-icon">
            <img src={cart} alt="" />
          </div>
        </header>
        <div className={"mobile-menu" + (menuToggle ? "" : " hidden")}>
          <div className="menu-icon" onClick={() => setMenuToggle(!menuToggle)}>
            <img src={menuClose} alt="" />
          </div>
          <nav className="nav">
            <Link to="/menu">Meny</Link>
            <Link to="/about">Vårt kaffe</Link>
            <Link to="/profile">Min profil</Link>
            <Link to="/status">Orderstatus</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
