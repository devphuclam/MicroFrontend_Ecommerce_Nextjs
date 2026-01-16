import { Order } from '../types/Order';

export const MOCK_ORDERS: Order[] = [
  {
    id: 1,
    code: 'ORD-20240101',
    createdAt: '2024-01-01',
    total: 164.23,
    itemsCount: 3,
    status: 'completed',
  },
  {
    id: 2,
    code: 'ORD-20240105',
    createdAt: '2024-01-05',
    total: 89.99,
    itemsCount: 1,
    status: 'shipping',
  },
  {
    id: 3,
    code: 'ORD-20240110',
    createdAt: '2024-01-10',
    total: 245.0,
    itemsCount: 5,
    status: 'processing',
  },
];
