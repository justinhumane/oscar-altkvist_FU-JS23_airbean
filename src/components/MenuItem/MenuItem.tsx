import add from "../../assets/add-icon.svg";
import { MenuItem } from "../../types/menuItem";
import "./MenuItem.scss";

const MenuItemComponent = ({ item }: { item: MenuItem }) => {
  return (
    <div className="menu-item">
      <div>
        <div className="add-item">
          <img src={add} alt="" />
        </div>
      </div>
      <div className="item-info">
        <div className="top-row">
          <div>{item.title}</div>
          <div>{item.price}</div>
        </div>
        <div className="bottom-row">{item.desc}</div>
      </div>
    </div>
  );
};

export default MenuItemComponent;
