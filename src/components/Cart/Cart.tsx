import { MouseEvent } from "react";
import { useCartStore } from "../../stores/cart";
import CartItemComponent from "../CartItem/CartItem";
import "./Cart.scss";

const CartComponent = ({
  cartToggle,
  handleCartToggle,
}: {
  cartToggle: boolean;
  handleCartToggle: (e: MouseEvent) => void;
}) => {
  const cartStore = useCartStore();
  const totalPrice = cartStore.cart.reduce((total, cartItem) => {
    const itemPrice = cartItem.item.price * cartItem.amount;
    return total + itemPrice;
  }, 0);

  return (
    <div className={"overlay" + (cartToggle ? "" : " hidden")} onClick={(e) => handleCartToggle(e as MouseEvent)}>
      <div className="cart">
        {cartStore.cart.length > 0 ? (
          <>
            <h1>Din beställning</h1>
            <div className="cart-items">
              {cartStore.cart.map((cartItem) => (
                <CartItemComponent cartItem={cartItem} />
              ))}
            </div>
            <div>Totalt: {totalPrice}</div>
            <button>Take my money!</button>
          </>
        ) : (
          <div>Din kundvagn är tom!</div>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
