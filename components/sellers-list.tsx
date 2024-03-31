import { API_URL } from '@/app/constant';
import { IBestSeller } from '@/shared/types/best-seller';
import axios from 'axios';
import styles from '../styles/sellerList.module.css';
import Seller from './seller';

async function getBestSellerList() {
  const { data } = await axios.get(API_URL);
  return data;
}

export default async function SellerList() {
  const bestSellers: IBestSeller = await getBestSellerList();

  return (
    <div className={styles.sellerWrapper}>
      <ul>
        {bestSellers.results.map((seller, index) => (
          <Seller
            key={index}
            listname={seller.list_name}
            displayname={seller.display_name}
          />
        ))}
      </ul>
    </div>
  );
}
