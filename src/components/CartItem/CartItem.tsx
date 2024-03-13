import { useCartStore } from "../../stores/cart";
import incrementIcon from "../../assets/increment.svg";
import decrementIcon from "../../assets/decrement.svg";
import { CartItem } from "../../types/cart";
import "./CartItem.scss";

const CartItemComponent = ({ cartItem }: { cartItem: CartItem }) => {
  const cartStore = useCartStore();

  return (
    <div key={cartItem.item.id} className="cart-item">
      <div className="item-info">
        <div className="top-row">
          <div>{cartItem.item.title}</div>
          <div className="dots"></div>
        </div>
        <div className="bottom-row">{cartItem.item.price * cartItem.amount} kr</div>
      </div>
      <div className="amount">
        <img src={incrementIcon} alt="" onClick={() => cartStore.incrementQuantity(cartItem.item.id)} />
        {cartItem.amount}
        {cartItem.amount === 1 ? (
          <img src={decrementIcon} alt="" onClick={() => cartStore.removeFromCart(cartItem.item.id)} />
        ) : (
          <img src={decrementIcon} alt="" onClick={() => cartStore.decrementQuantity(cartItem.item.id)} />
        )}
      </div>
    </div>
  );
};

export default CartItemComponent;
