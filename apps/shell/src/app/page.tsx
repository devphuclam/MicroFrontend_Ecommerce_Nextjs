import style from './page.module.scss';
import NavBar from '@repo/ui/NavBar';

export default function HomePage() {
  return (
    <div className={style.homepageContainer}>
      <NavBar message='Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now' />
      <div className={style.hero}></div>
    </div>
  );
}
