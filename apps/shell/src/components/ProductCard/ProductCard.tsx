'use client';
import React from 'react';
import './ProductCard.scss';

export type ProductCardProps = {
  name: string;
  price?: number;
  image?: string | React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
};

const ProductCard = ({ name, price, image, onClick }: ProductCardProps) => {
  const SvgIcon = image as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <div className='product-card' onClick={onClick}>
      <div className='product-image'>
        {typeof image === 'string' && <img src={image} alt={name} />}
        {typeof image === 'function' && <SvgIcon className='product-svg' />}
      </div>
      <div className='product-info'>
        <h3 className='product-name'>{name}</h3>
        {price !== undefined && <p className='product-price'>${price}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
