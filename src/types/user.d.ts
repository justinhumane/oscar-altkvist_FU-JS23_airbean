export interface Order {
  orderNumber: string;
  orderDate: Date;
  amount: number;
}

export interface User {
  name: string;
  email: string;
  orderHistory: Order[] | [];
  gdpr: boolean;
}

export interface UserState {
  user: User;
  register: (user: User) => void;
  addOrderToHistory: (order) => void;
}
