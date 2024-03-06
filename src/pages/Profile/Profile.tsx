import { useUserStore } from "../../stores/user";
import RegisterComponent from "../../components/Register/Register";
import "./Profile.scss";
import UserProfileComponent from "../../components/UserProfile/UserProfile";

const ProfilePage = () => {
  const userStore = useUserStore();

  return <div className="profile">{userStore.user.name !== "" ? <UserProfileComponent /> : <RegisterComponent />}</div>;
};

export default ProfilePage;
