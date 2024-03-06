import { useState, MouseEvent } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderComp from "../components/Header/Header";
import FooterComp from "../components/Footer/Footer";

const DefaultLayout = () => {
  const location = useLocation();

  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  const [cartToggle, setCartToggle] = useState(false);
  const handleCartToggle = (e: MouseEvent) => {
    if (e.currentTarget != e.target) return;
    setCartToggle(!cartToggle);
  };

  const bgColor = {
    backgroundColor: location.pathname === "/about" || location.pathname === "/menu" ? "bg-pink" : "bg-brown",
  };

  const showCart = location.pathname === "/about" || location.pathname === "/menu" ? true : false;

  return (
    <div className={"container " + bgColor.backgroundColor + (menuToggle || cartToggle ? " overflow-hidden" : "")}>
      <HeaderComp
        menuToggle={menuToggle}
        handleMenuToggle={handleMenuToggle}
        cartToggle={cartToggle}
        handleCartToggle={(e) => handleCartToggle(e)}
        showCart={showCart}
      />
      <Outlet />
      {showCart ? <FooterComp /> : ""}
    </div>
  );
};

export default DefaultLayout;
