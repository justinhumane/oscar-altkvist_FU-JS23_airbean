import { MouseEvent } from "react";
import { useCartStore } from "../../stores/cart";
import CartItemComponent from "../CartItem/CartItem";
import "./Cart.scss";
import { useUserStore } from "../../stores/user";
import { useNavigate } from "react-router-dom";

const CartComponent = ({
  cartToggle,
  handleCartToggle,
}: {
  cartToggle: boolean;
  handleCartToggle: (e: MouseEvent) => void;
}) => {
  const navigate = useNavigate();
  const cartStore = useCartStore();
  const userStore = useUserStore();

  const totalPrice = cartStore.cart.reduce((total, cartItem) => {
    const itemPrice = cartItem.item.price * cartItem.amount;
    return total + itemPrice;
  }, 0);

  const makeOrder = async () => {
    try {
      const response = await fetch("https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(cartStore.prepareOrderData(cartStore.cart)),
      });
      if (!response) throw new Error();

      const data = await response.json();

      const today = new Date();

      if (data.eta && userStore.user.name !== "") {
        const orderData = {
          date: today,
          orderNumber: data.orderNr,
          total: totalPrice,
        };

        userStore.addOrderToHistory(orderData);
      }

      userStore.setLastOrderMade(data.orderNr);
      cartStore.resetCart();
      navigate("/status");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={"overlay" + (cartToggle ? "" : " hidden")} onClick={(e) => handleCartToggle(e as MouseEvent)}>
      <div className="cart">
        {cartStore.cart.length > 0 ? (
          <>
            <h1>Din beställning</h1>
            <div className="cart-items">
              {cartStore.cart.map((cartItem) => (
                <CartItemComponent key={cartItem.item.id} cartItem={cartItem} />
              ))}
            </div>
            <div className="cart-item">
              <div className="item-info">
                <div className="top-row">
                  <div>Total</div>
                  <div className="dots"></div>
                  <div>{totalPrice} kr</div>
                </div>
                <div className="bottom-row">inkl moms + drönarleverans</div>
              </div>
            </div>
            <button onClick={makeOrder}>Take my money!</button>
          </>
        ) : (
          <div>Din kundvagn är tom!</div>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
