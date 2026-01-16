'use client';

import React, { useMemo } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import NavBar from '@repo/ui/NavBar';
import Footer from '@repo/ui/Footer';
import CartCard from '@/app/components/CartCard/CartCard';
import { SAMPLE_PRODUCTS } from '@repo/ui/data/sample-product.ts';
import './OrderDetail.scss';

export default function OrderDetail() {
  const order = useMemo(() => {
    return {
      id: 'ORD-2026-0001',
      status: 'Confirmed',
      paymentMethod: 'Credit / Debit Card',
      shippingMethod: 'Standard (5–7 Business Days)',
      address: {
        name: 'John Doe',
        phone: '+84 912 345 678',
        email: 'john.doe@gmail.com',
        address: 'District 1, Ho Chi Minh City, Vietnam',
      },
      items: SAMPLE_PRODUCTS.slice(0, 2).map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image,
        quantity: 1,
        variant: p.variant?.[0],
      })),
    };
  }, []);

  const subtotal = order.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const shippingFee = 0;
  const tax = subtotal * 0.065;
  const total = subtotal + shippingFee + tax;

  return (
    <div className='order-page'>
      <NavBar
        message='Thank you for your purchase!'
        storeUrl='http://localhost:3001/products'
        accountUrl='http://localhost:3003/login'
        cartUrl='http://localhost:3002/order'
      />

      <div className='order-container'>
        {/* HEADER */}
        <div className='order-header'>
          <CheckCircleFilled />
          <h2>Order Confirmed</h2>
          <p>
            Order ID: <strong>{order.id}</strong>
          </p>
        </div>

        <div className='order-layout'>
          {/* LEFT */}
          <div className='order-info'>
            <h3>Order Details</h3>

            <div className='info-block'>
              <strong>Shipping Address</strong>
              <p>{order.address.name}</p>
              <p>{order.address.phone}</p>
              <p>{order.address.email}</p>
              <p>{order.address.address}</p>
            </div>

            <div className='info-block'>
              <strong>Payment Method</strong>
              <p>{order.paymentMethod}</p>
            </div>

            <div className='info-block'>
              <strong>Shipping Method</strong>
              <p>{order.shippingMethod}</p>
            </div>

            <Divider />

            <h3>Items</h3>
            {order.items.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>

          {/* RIGHT */}
          <div className='order-summary'>
            <h3>Summary</h3>

            <div className='summary-row'>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className='summary-row'>
              <span>Tax (6.5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className='summary-row'>
              <span>Shipping</span>
              <span>FREE</span>
            </div>

            <Divider />

            <div className='summary-total'>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Button
              type='primary'
              block
              onClick={() =>
                (window.location.href = 'http://localhost:3001/products')
              }
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
