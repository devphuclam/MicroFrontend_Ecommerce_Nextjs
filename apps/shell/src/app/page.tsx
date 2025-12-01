import style from './page.module.scss';
import NavBar from '@repo/ui/NavBar';
import BannerCard from '@/components/BannerCard/BannerCard';
import { IMAGES } from '../../public/images';
import { Button } from 'antd';

export default function HomePage() {
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
      <div className={style.sampleProductSection}></div>
    </div>
  );
}
