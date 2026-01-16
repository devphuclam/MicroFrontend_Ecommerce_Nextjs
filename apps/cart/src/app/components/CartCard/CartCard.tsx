'use client';

import React from 'react';
import './CartCard.scss';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string | React.FC<React.SVGProps<SVGSVGElement>>;
  variant?: string;
}

interface CartItemCardProps {
  item: CartItem;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

export default function CartCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemCardProps) {
  const Subtotal = item.price * item.quantity;

  return (
    <div className='cart-item-card'>
      {/* Remove */}
      <button
        className='remove-btn'
        onClick={onRemove}
        aria-label='Remove item'
      >
        ×
      </button>

      {/* Image */}
      <div className='image'>
        {typeof item.image === 'string' ? (
          <img src={item.image} alt={item.name} />
        ) : (
          <item.image />
        )}
      </div>

      {/* Info */}
      <div className='info'>
        <h3 className='name'>{item.name}</h3>

        {item.variant && <p className='variant'>{item.variant}</p>}

        <div className='qty-row'>
          <div className='quantity'>
            <button onClick={onDecrease} aria-label='Decrease quantity'>
              −
            </button>
            <span>{item.quantity}</span>
            <button onClick={onIncrease} aria-label='Increase quantity'>
              +
            </button>
          </div>

          <p className='subtotal'>${Subtotal}</p>
        </div>
      </div>
    </div>
  );
}
