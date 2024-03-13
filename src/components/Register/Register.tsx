import { ChangeEvent, useState } from "react";
import { useUserStore } from "../../stores/user";
import { User } from "../../types/user";
import logo from "../../assets/logo-brown.svg";
import "./Register.scss";

const RegisterComponent = () => {
  const userStore = useUserStore();

  const initialUser: User = {
    name: "",
    email: "",
    orderHistory: [],
    gdpr: false,
    lastOrderMade: "",
  };

  const [user, setUser] = useState<User>(initialUser);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (event.target.type === "checkbox") {
      const checkboxValue = event.target.checked ? true : false;

      setUser((prevInput) => ({
        ...prevInput,
        [name]: checkboxValue,
      }));
    } else {
      setUser((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };

  return (
    <div className="register">
      <div>
        <img src={logo} alt="" />
      </div>
      <h1>Välkommen till AirBean-familjen</h1>
      <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
      <form onSubmit={() => userStore.register(user)}>
        <div>
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Sixten Kaffelövér"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Epost</label>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="sixten.kaffelover@zocom.se"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label className="checkbox">
            <input type="checkbox" name="gdpr" onChange={handleInput} />
            <span className="checkmark">
              <span></span>
            </span>
            GDPR Ok!
          </label>
        </div>
        <button type="submit">Brew me a cup!</button>
      </form>
    </div>
  );
};

export default RegisterComponent;
