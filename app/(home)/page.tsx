import { Suspense } from 'react';
import styles from '../../styles/home.module.css';
import SellerList from '@/components/sellers-list';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>the new york times best seller explorer</h1>
      <Suspense fallback={<h4>Loading...</h4>}>
        <SellerList />
      </Suspense>
    </div>
  );
}
