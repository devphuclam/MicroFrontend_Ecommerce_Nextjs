'use client';
import style from './page.module.scss';
import NavBar from '@repo/ui/NavBar';
import BannerCard from '@/components/BannerCard/BannerCard';
import ProductCard from '@/components/ProductCard/ProductCard';
import { IMAGES } from '../../public/images';
import { Button } from 'antd';
import { SAMPLE_PRODUCTS } from '@repo/ui/data/sample-product.ts';
import Image from 'next/image';
import {
  InstagramOutlined,
  FacebookOutlined,
  XOutlined,
  TikTokOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
export default function HomePage() {
  const Instas = [
    {
      id: '1',
      link: '1.com',
      image: IMAGES.Insta01,
      overlayIcon: <InstagramOutlined />,
    },
    {
      id: '2',
      link: '2.com',
      image: IMAGES.Insta02,
      overlayIcon: <FacebookOutlined />,
    },
    {
      id: '3',
      link: '3.com',
      image: IMAGES.Insta03,
      overlayIcon: <XOutlined />,
    },
    {
      id: '4',
      link: '4.com',
      image: IMAGES.Insta04,
      overlayIcon: <TikTokOutlined />,
    },
    {
      id: '5',
      link: '5.com',
      image: IMAGES.Insta05,
      overlayIcon: <YoutubeOutlined />,
    },
  ];
  return (
    <div className={style.homepageContainer}>
      <NavBar message='Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now' />
      {/* Hero Section */}
      <div className={style.hero}>
        <h1 className={style.heroText}>
          Elevate Your Style <br /> Timeless Fashion, Sustainable <br />
          Choices
        </h1>
        <Button className={style.heroButton}>Shop Now</Button>
      </div>
      {/* Offer Section */}
      <div className={style.offerSection}>
        <p className={style.promotionQuote}>
          Elevate your lifestyle with a more intelligent, superior wardrobe.
          <br />
          Our range is crafted sustainably with longevity in mind.
        </p>
        <div className={style.banners}>
          <BannerCard image={IMAGES.NewArrival} label='New Arrivals' />
          <BannerCard image={IMAGES.TheCasualEdit} label='The Casual Edit' />
          <BannerCard image={IMAGES.BestSeller} label='Best Sellers' />
        </div>
      </div>
      {/* Sample Product Section */}
      <div className={style.sampleProductSection}>
        <p className={style.quote}>What to Wear Now</p>
        <div className={style.sampleProducts}>
          {SAMPLE_PRODUCTS.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
      {/* Two Banners section */}
      <div className={style.adSection}>
        <BannerCard
          label='The Smart Chic'
          image={IMAGES.TheSmartChic}
          height='85vh'
        />
        <BannerCard
          label='Ready To Go'
          image={IMAGES.ReadyToGo}
          height='85vh'
        />
      </div>
      {/* Yap Section */}
      <div className={style.yapSection}>
        <h1 className={style.title}>The Art of Fewer, Better Choices</h1>
        <p className={style.yap}>
          Opting for quality over quantity means selecting timeless, durable,
          and responsibly made items. This approach simplifies our lives and
          fosters a deeper appreciation for our surroundings. Emphasizing
          longevity and responsible production resonates with a more sustainable
          and mindful lifestyle.
        </p>
      </div>
      {/* Shop Instagram Section */}
      <div className={style.shopInstagramSection}>
        <h2 className={style.title}>Shop Instagram</h2>
        <div className={style.instas}>
          {Instas.map((insta) => {
            return (
              <div key={insta.id} className={style.instaWrapper}>
                <Image
                  src={insta.image}
                  alt={insta.link}
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className={style.instaImage}
                />
                <div className={style.overlay}>{insta.overlayIcon}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
