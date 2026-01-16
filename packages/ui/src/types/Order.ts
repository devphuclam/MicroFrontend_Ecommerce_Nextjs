export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipping'
  | 'completed'
  | 'cancelled';

export interface Order {
  id: number;
  code: string;
  createdAt: string;
  total: number;
  itemsCount: number;
  status: OrderStatus;
}
