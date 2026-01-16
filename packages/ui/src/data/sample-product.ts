import { Product } from '../types/Product';
import { Bag, Beanie, Cardigan, Coat, Tote } from '../images';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Classic Easy Zipper Tote',
    price: 298,
    image: Tote,
    category: 'Tote',
    slug: 'classic-easy-zipper-tote',
    description:
      'A timeless tote crafted from premium leather with a minimalist silhouette, designed for everyday versatility.',
    variant: ['Black', 'Tan', 'Espresso'],
    availability:
      'Available for immediate shipment. This item is currently in stock and ready to ship within 1–2 business days.',
    fitDetail:
      'Designed with a structured silhouette and a spacious interior that comfortably fits a 13” laptop, daily essentials, and documents. Features reinforced top handles for durability and a secure zip closure for everyday use.',
    shippingNReturn:
      'Free standard shipping on orders over $95. Free returns within 30 days.',
  },
  {
    id: 2,
    name: 'Concertina Phone Bag',
    price: 248,
    image: Bag,
    category: 'Bag',
    slug: 'concertina-phone-bag',
    description:
      'A compact crossbody phone bag with expandable compartments, ideal for hands-free convenience.',
    variant: ['Black', 'Bone'],
    availability:
      'In stock and ready to ship. Ships within 1–2 business days while supplies last.',
    fitDetail:
      'Compact design with expandable accordion-style compartments to hold your phone, cards, and small essentials. Adjustable strap allows for comfortable crossbody or shoulder wear.',
    shippingNReturn:
      'Free standard shipping on orders over $95. Free returns within 30 days.',
  },
  {
    id: 3,
    name: 'Wool Cashmere Sweater Coat',
    price: 398,
    image: Coat,
    category: 'Coat',
    slug: 'wool-cashmere-sweater-coat',
    description:
      'An elevated sweater coat crafted from a luxurious wool-cashmere blend for warmth and softness.',
    variant: ['Camel', 'Heather Grey', 'Black'],
    availability:
      'Limited availability. Low stock remaining in select colors. Once sold out, this style will not be restocked.',
    fitDetail:
      'Relaxed, easy fit with dropped shoulders and a mid-length silhouette designed for layering. Soft structure allows for comfortable movement while maintaining a refined look.',
    shippingNReturn:
      'Free standard shipping on orders over $95. Free returns within 30 days.',
  },
  {
    id: 4,
    name: 'Single-Origin Cashmere Beanie',
    price: 98,
    image: Beanie,
    category: 'Beanie',
    slug: 'single-origin-cashmere-beanie',
    description:
      'A soft and lightweight beanie made from ethically sourced single-origin cashmere.',
    variant: ['Black', 'Oatmeal', 'Navy'],
    availability:
      'In stock. Available for immediate shipment with limited quantities per color.',
    fitDetail:
      'One size fits most. Ribbed knit construction offers a flexible and comfortable fit that retains its shape over time.',
    shippingNReturn:
      'Free standard shipping on orders over $95. Free returns within 30 days.',
  },
  {
    id: 5,
    name: 'Alpaca Wool Cropped Cardigan',
    price: 248,
    image: Cardigan,
    category: 'Cardigan',
    slug: 'alpaca-wool-cropped-cardigan',
    description:
      'A cozy cropped cardigan made from a soft alpaca wool blend, perfect for transitional seasons.',
    variant: ['Ivory', 'Soft Pink'],
    availability:
      'In stock and ready to ship. Popular style with limited quantities available.',
    fitDetail:
      'Cropped length designed to sit at the waist with a relaxed, comfortable fit. Soft alpaca wool blend provides warmth without bulk, ideal for layering.',
    shippingNReturn:
      'Free standard shipping on orders over $95. Free returns within 30 days.',
  },
];
