import { MouseEvent } from "react";
import menuOpen from "../../assets/menu-icon.svg";
import cart from "../../assets/cart-icon.svg";
import "./Header.scss";
import NavComponent from "../Nav/Nav";
import CartComponent from "../Cart/Cart";

const HeaderComp = ({
  menuToggle,
  handleMenuToggle,
  cartToggle,
  handleCartToggle,
}: {
  menuToggle: boolean;
  handleMenuToggle: () => void;
  cartToggle: boolean;
  handleCartToggle: (e: MouseEvent) => void;
}) => {
  return (
    <>
      <div className="header">
        <header>
          <div className="menu-icon" onClick={handleMenuToggle}>
            <img src={menuOpen} alt="" />
          </div>
          <div className="cart-icon" onClick={(e) => handleCartToggle(e)}>
            <img src={cart} alt="" onClick={(e) => handleCartToggle(e)} />
          </div>
        </header>
        <NavComponent menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
        <CartComponent cartToggle={cartToggle} handleCartToggle={(e) => handleCartToggle(e as unknown as MouseEvent)} />
      </div>
    </>
  );
};

export default HeaderComp;
