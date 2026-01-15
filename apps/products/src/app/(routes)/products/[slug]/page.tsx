'use client';

import { useParams } from 'next/navigation';
import { SAMPLE_PRODUCTS } from '@repo/ui/data/sample-product.ts';
import './ProductDetail.scss';
import React, { useState } from 'react';
import NavBar from '@repo/ui/NavBar';
import Footer from '@repo/ui/Footer';
import { Button, Collapse, Segmented } from 'antd';
import type { CollapseProps } from 'antd';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();

  const product = SAMPLE_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return <h1>Product not found</h1>;
  }
  const SvgIcon = product.image as React.FC<React.SVGProps<SVGSVGElement>>;
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variant?.[0] ?? ''
  );
  const collapseItems: CollapseProps['items'] = [
    {
      key: 'availability',
      label: 'Availability',
      children: <p>{product.availability}</p>,
    },
    {
      key: 'fit',
      label: 'Fit & Details',
      children: <p>{product.fitDetail}</p>,
    },
    {
      key: 'shipping',
      label: 'Shipping & Returns',
      children: <p>{product.shippingNReturn}</p>,
    },
  ];

  return (
    <div className='product-detail-container'>
      {/* NavBar */}
      <NavBar
        message='Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now'
        storeUrl='http://localhost:3001/products'
        accountUrl='http://localhost:3003/login'
        cartUrl='http://localhost:3002/'
      />
      {/* Main Content */}
      <div className='product-detail-mainconent'>
        {typeof product.image === 'function' && (
          <SvgIcon className='product-svg' />
        )}
        <div className='product-detail-info'>
          <h1 className='product-detail-name'>{product.name}</h1>
          <p className='product-detail-price'>${product.price}</p>

          <p className='product-description'>{product.description}</p>
          {/* VARIANT */}
          <div className='product-variant'>
            <h2
              style={{
                marginBottom: '16px',
                fontWeight: '600',
                lineHeight: '1.2',
                fontSize: '16px',
              }}
            >
              Color
            </h2>
            <Segmented
              options={product.variant ?? []}
              value={selectedVariant}
              onChange={(val) => setSelectedVariant(val as string)}
              className='variant-segmented'
            />
          </div>

          {/* ADD TO CART */}
          <Button
            type='primary'
            block
            size='large'
            onClick={() => {
              window.location.assign('http://localhost:3001/cart');
            }}
          >
            Add to Cart
          </Button>

          {/* ACCORDION */}
          <Collapse
            ghost
            accordion
            className='product-accordion'
            items={collapseItems}
          />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
