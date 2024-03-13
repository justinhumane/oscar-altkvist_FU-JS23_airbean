import add from "../../assets/add-icon.svg";
import { useCartStore } from "../../stores/cart";
import { MenuItem } from "../../types/menuItem";
import "./MenuItem.scss";

const MenuItemComponent = ({ item }: { item: MenuItem }) => {
  const cartStore = useCartStore();

  return (
    <div className="menu-item">
      <div>
        <div className="add-item" onClick={() => cartStore.addToCart(item)}>
          <img src={add} alt="" />
        </div>
      </div>
      <div className="item-info">
        <div className="top-row">
          <div>{item.title}</div>
          <div className="dots"></div>
          <div>{item.price} kr</div>
        </div>
        <div className="bottom-row">{item.desc}</div>
      </div>
    </div>
  );
};

export default MenuItemComponent;
