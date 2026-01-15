'use client';

import { SAMPLE_PRODUCTS } from '@repo/ui/data/sample-product.ts';
import './Cart.scss';
import React, { useMemo, useState } from 'react';
import NavBar from '@repo/ui/NavBar';
import Footer from '@repo/ui/Footer';
import CartCard, { CartItem } from '@/components/CartCard/CartCard';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    SAMPLE_PRODUCTS.slice(0, 2).map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      variant: p.variant?.[0],
      quantity: 1,
    }))
  );

  const handleIncrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const shipping = subtotal > 95 ? 0 : 10;

  const total = subtotal + shipping;

  return (
    <div className='cart-container'>
      <NavBar
        message='Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now'
        storeUrl='http://localhost:3001/products'
        accountUrl='http://localhost:3003/login'
        cartUrl='http://localhost:3002/'
      />
      {/* Title */}
      <h2 className='cart-title'>Your Shopping Cart</h2>

      <div className='cart-layout'>
        {/* LEFT */}
        <div className='cart-items'>
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>
        {/* Right */}
        <div className='cart-summary'>
          <h3 className='summary-title'>Order Summary</h3>

          <div className='summary-row'>
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className='summary-row'>
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
          </div>

          <div className='summary-divider' />

          <div className='summary-row total'>
            <span>Estimated Total</span>
            <span>${total}</span>
          </div>

          <button className='checkout-btn'>Checkout</button>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
