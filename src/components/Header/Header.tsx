import menuOpen from "../../assets/menu-icon.svg";
import cart from "../../assets/cart-icon.svg";
import "./Header.scss";
import NavComponent from "../Nav/Nav";

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
        <NavComponent menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
      </div>
    </>
  );
};

export default HeaderComp;
