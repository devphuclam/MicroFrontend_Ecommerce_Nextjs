'use client';

import React from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import NavBar from '@repo/ui/NavBar';
import Footer from '@repo/ui/Footer';
import './Order.scss';

type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipping'
  | 'completed'
  | 'cancelled';

interface Order {
  id: number;
  code: string;
  createdAt: string;
  total: number;
  itemsCount: number;
  status: OrderStatus;
}

const MOCK_ORDERS: Order[] = [
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

const statusColorMap: Record<OrderStatus, string> = {
  pending: 'default',
  processing: 'blue',
  shipping: 'orange',
  completed: 'green',
  cancelled: 'red',
};

export default function OrderPage() {
  const columns: ColumnsType<Order> = [
    {
      title: 'Order',
      dataIndex: 'code',
      key: 'code',
      render: (code) => <strong>{code}</strong>,
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Items',
      dataIndex: 'itemsCount',
      key: 'itemsCount',
      align: 'center',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (total) => `$${total.toFixed(2)}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: OrderStatus) => (
        <Tag color={statusColorMap[status]}>{status.toUpperCase()}</Tag>
      ),
    },
  ];

  return (
    <div className='order-page'>
      <NavBar
        message='Your Orders'
        storeUrl='http://localhost:3001/products'
        accountUrl='http://localhost:3003/login'
        cartUrl='http://localhost:3002/order'
      />

      <div className='order-container'>
        <h2>My Orders</h2>

        <Table
          columns={columns}
          dataSource={MOCK_ORDERS}
          rowKey='id'
          pagination={false}
        />
      </div>

      <Footer />
    </div>
  );
}
