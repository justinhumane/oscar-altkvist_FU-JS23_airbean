import menuClosed from "../../assets/menu-icon.svg";
import cart from "../../assets/cart-icon.svg";
import "./Header.scss";

const HeaderComp = () => {
  return (
    <div className="header">
      <div className="menu-icon">
        <img src={menuClosed} alt="" />
      </div>
      <div className="cart-icon">
        <img src={cart} alt="" />
      </div>
    </div>
  );
};

export default HeaderComp;
