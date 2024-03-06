import { MouseEvent } from "react";
import CartComponent from "../Cart/Cart";
import NavComponent from "../Nav/Nav";
import cart from "../../assets/cart-icon.svg";
import menuOpen from "../../assets/menu-icon.svg";
import "./Header.scss";
import { useCartStore } from "../../stores/cart";

const HeaderComp = ({
  menuToggle,
  handleMenuToggle,
  cartToggle,
  handleCartToggle,
  showCart,
}: {
  menuToggle: boolean;
  handleMenuToggle: () => void;
  cartToggle: boolean;
  handleCartToggle: (e: MouseEvent) => void;
  showCart: boolean;
}) => {
  const cartStore = useCartStore();
  const totalQuantity = cartStore.cart.reduce((total, cartItem) => total + cartItem.amount, 0);

  return (
    <>
      <div className="header">
        <header>
          <div className="menu-icon" onClick={handleMenuToggle}>
            <img src={menuOpen} alt="" />
          </div>
          {showCart ? (
            <div className="cart-icon" onClick={(e) => handleCartToggle(e)}>
              <div className="indicator">{totalQuantity}</div>
              <img src={cart} alt="" onClick={(e) => handleCartToggle(e)} />
            </div>
          ) : (
            ""
          )}
        </header>
        <NavComponent menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
        <CartComponent cartToggle={cartToggle} handleCartToggle={(e) => handleCartToggle(e as unknown as MouseEvent)} />
      </div>
    </>
  );
};

export default HeaderComp;
