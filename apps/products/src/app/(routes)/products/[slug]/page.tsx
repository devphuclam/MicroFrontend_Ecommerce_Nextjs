'use client';

import { useParams } from 'next/navigation';
import { SAMPLE_PRODUCTS } from '@repo/ui/data/sample-product.ts';
import './ProductDetail.scss';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();

  const product = SAMPLE_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className='product-detail'>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      {/* <img src={product.image} alt={product.name} /> */}
    </div>
  );
}
