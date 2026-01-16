'use client';

import { SAMPLE_PRODUCTS } from '@repo/ui/data/sample-product.ts';
import './Product.scss';
import React, { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import NavBar from '@repo/ui/NavBar';
import Footer from '@repo/ui/Footer';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

export default function ProductPage() {
  const [sort, setSort] = useState<string>('default');
  const sortOptions: SelectProps['options'] = [
    { value: 'default', label: 'Sort' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
  ];

  const sortedProducts = useMemo(() => {
    const products = [...SAMPLE_PRODUCTS];

    if (sort === 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    }

    if (sort === 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    }

    return products;
  }, [sort]);

  return (
    <div className='products-container'>
      <NavBar
        message='Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now'
        storeUrl='http://localhost:3001/products'
        accountUrl='http://localhost:3003/login'
        cartUrl='http://localhost:3002/order'
      />
      {/* Sort Section */}
      <div className='products-sort'>
        <Select
          value={sort}
          style={{ width: 200 }}
          onChange={(value: string) => setSort(value)}
          options={sortOptions}
        />
      </div>
      {/* Product Section */}
      <div className='products-grid'>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            onClick={() => {
              window.location.assign(
                `http://localhost:3001/products/${product.slug}`
              );
            }}
          />
        ))}
      </div>
      {/* Product Section */}
      <div className='products-grid'>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            onClick={() => {
              window.location.assign(
                `http://localhost:3001/products/${product.slug}`
              );
            }}
          />
        ))}
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
