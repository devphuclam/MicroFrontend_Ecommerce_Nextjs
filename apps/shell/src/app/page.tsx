import Image from 'next/image';
import styles from './page.module.scss';
import NavBar from '@repo/ui/NavBar';
import ICONS from '../../../../public/assets/icons/index';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div>Hello shell zone</div>
    </div>
  );
}
