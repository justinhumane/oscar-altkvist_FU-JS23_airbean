import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderComp from "../components/Header/Header";
import FooterComp from "../components/Footer/Footer";

const DefaultLayout = () => {
  const location = useLocation();

  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  const bgColor = {
    backgroundColor: location.pathname === "/about" || location.pathname === "/menu" ? "bg-pink" : "bg-brown",
  };

  return (
    <div className={"container " + bgColor.backgroundColor + (menuToggle ? " overflow-hidden" : "")}>
      <HeaderComp menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
      <Outlet />
      <FooterComp />
    </div>
  );
};

export default DefaultLayout;
