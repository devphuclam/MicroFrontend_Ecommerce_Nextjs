import { Product } from '../types/Product';
import { Bag, Beanie, Cardigan, Coat, Tote } from '../images';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Classic Easy Zipper Tote',
    price: 298,
    image: Tote,
    category: 'Tote',
  },
  {
    id: 2,
    name: 'Concertina Phone Bag',
    price: 248,
    image: Bag,
    category: 'Bag',
  },
  {
    id: 3,
    name: 'Wool Cashmere Sweater Coat',
    price: 398,
    image: Coat,
    category: 'Coat',
  },
  {
    id: 4,
    name: 'Single-Origin Cashmere Beanie',
    price: 98,
    image: Beanie,
    category: 'Beanie',
  },
  {
    id: 5,
    name: 'Alpaca Wool Cropped Cardigan',
    price: 248,
    image: Cardigan,
    category: 'Cardigan',
  },
];
