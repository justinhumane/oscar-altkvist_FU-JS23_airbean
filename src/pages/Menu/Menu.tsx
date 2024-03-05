import { useEffect, useState } from "react";
import "./Menu.scss";
import { MenuItem } from "../../types/menuItem";
import MenuItemComponent from "../../components/MenuItem/MenuItem";

const MenuPage = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://airbean-api-xjlcn.ondigitalocean.app/api/beans");
        if (!response) throw new Error();

        const data = await response.json();

        setMenu(data.menu);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="menu">
      <div className="content">
        <h1>Meny</h1>
        <div className="menu-items">
          {menu.map((menuItem) => (
            <MenuItemComponent key={menuItem.id} item={menuItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
