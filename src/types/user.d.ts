export interface Order {
  orderNumber: string;
  orderDate: Date;
  amount: number;
}

export interface OrderHistoryOrder {
  date: Date;
  orderNumber: string;
  total: number;
}

export interface User {
  name: string;
  email: string;
  orderHistory: OrderHistoryOrder[] | [];
  gdpr: boolean;
}

export interface UserState {
  user: User;
  register: (user: User) => void;
  addOrderToHistory: (order) => void;
}
