export interface OrderItem {
  name: string;
  price: number;
}

export interface OrderData {
  details: {
    order: OrderItem[];
  };
}
