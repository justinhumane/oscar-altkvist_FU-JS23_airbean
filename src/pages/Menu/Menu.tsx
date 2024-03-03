import { useEffect, useState } from "react";
import FooterComp from "../../components/Footer/Footer";
import HeaderComp from "../../components/Header/Header";
import "./Menu.scss";
import { Menu } from "../../types/menu";
import MenuItem from "../../components/MenuItem/MenuItem";

const MenuPage = () => {
  const [menu, setMenu] = useState<Menu[]>([]);

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
      <HeaderComp />
      <div className="content">
        <h1>Meny</h1>
        <div className="menu-items">
          {menu.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem} />
          ))}
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default MenuPage;
