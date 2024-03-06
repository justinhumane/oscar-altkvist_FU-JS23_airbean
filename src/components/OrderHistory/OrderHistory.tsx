import { useUserStore } from "../../stores/user";
import "./OrderHistory.scss";

const OrderHistoryComponent = () => {
  const userStore = useUserStore();

  const formatDate = (date: Date) => {
    const tempDate = new Date(date);

    const year = tempDate.getFullYear().toString().slice(-2);
    const month = (tempDate.getMonth() + 1).toString().padStart(2, "0");
    const day = tempDate.getDate().toString().padStart(2, "0");

    return `${year}/${month}/${day}`;
  };

  const totalOrderValue = userStore.user.orderHistory.reduce((total, order) => {
    return total + order.total;
  }, 0);

  return (
    <div className="order-history-list">
      {userStore.user.orderHistory.map((order) => (
        <div key={order.orderNumber}>
          <div>#{order.orderNumber}</div>
          <div>{formatDate(order.date)}</div>
          <p>total ordersumma</p>
          <p>{order.total} kr</p>
        </div>
      ))}
      <div>
        <p>Totalt spenderat</p>
        <p>{totalOrderValue} kr</p>
      </div>
    </div>
  );
};

export default OrderHistoryComponent;
