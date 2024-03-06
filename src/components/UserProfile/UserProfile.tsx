import profilePicture from "../../assets/profile.svg";
import { useUserStore } from "../../stores/user";
import OrderHistoryComponent from "../OrderHistory/OrderHistory";
import "./UserProfile.scss";

const UserProfileComponent = () => {
  const userStore = useUserStore();

  return (
    <div className="user-profile">
      <div className="top">
        <img src={profilePicture} alt="" />
        <h2>{userStore.user.name}</h2>
        <p>{userStore.user.email}</p>
      </div>
      <div className="order-history">
        <h3>Orderhistorik</h3>
        {userStore.user.orderHistory.length > 0 ? <OrderHistoryComponent /> : "Du har inga tidigare ordrar."}
      </div>
    </div>
  );
};

export default UserProfileComponent;
