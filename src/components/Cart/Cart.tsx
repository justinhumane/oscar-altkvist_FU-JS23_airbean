import { MouseEvent } from "react";
import "./Cart.scss";

const CartComponent = ({
  cartToggle,
  handleCartToggle,
}: {
  cartToggle: boolean;
  handleCartToggle: (e: MouseEvent) => void;
}) => {
  return (
    <div className={"overlay" + (cartToggle ? "" : " hidden")} onClick={(e) => handleCartToggle(e as MouseEvent)}>
      <div className={"cart"}>
        <h1>Din beställning</h1>
      </div>
    </div>
  );
};

export default CartComponent;
