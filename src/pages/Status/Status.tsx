import { useEffect, useState } from "react";
import droneImage from "../../assets/drone.svg";
import { useUserStore } from "../../stores/user";
import "./Status.scss";
import { useNavigate } from "react-router-dom";

const StatusPage = () => {
  const userStore = useUserStore();
  const navigate = useNavigate();

  const [eta, setEta] = useState();
  const [showPlaceholder, setShowPlaceHolder] = useState(false);

  useEffect(() => {
    if (userStore.user.lastOrderMade === null) {
      setShowPlaceHolder(true);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order/status/${userStore.user.lastOrderMade}`
        );
        if (!response) throw new Error();

        const data = await response.json();

        if (!data.eta) {
          setShowPlaceHolder(true);
          return;
        }

        setEta(data.eta);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="status">
        {showPlaceholder ? (
          <h2>Du har ingen aktiv order!</h2>
        ) : (
          <>
            <p className="order-number">
              Ordernummer <strong>#{userStore.user.lastOrderMade}</strong>
            </p>
            <img src={droneImage} alt="" />
            <h2>Din beställning är på väg!</h2>
            <p className="eta">
              <strong>{eta}</strong> minuter
            </p>
          </>
        )}
        <button onClick={() => navigate("/menu")}>Ok, cool!</button>
      </div>
    </div>
  );
};

export default StatusPage;
