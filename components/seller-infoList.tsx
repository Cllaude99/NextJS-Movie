import { DETAIL_API } from '@/app/constant';
import axios from 'axios';
import styles from '../styles/sellerInfoList.module.css';
import { IBooks } from '@/app/list/[id]/page';
import Link from 'next/link';

interface ISellerInfo {
  id: string;
}
async function getDetail(listname: string) {
  const { data } = await axios.get(DETAIL_API + `?name=${listname}`);
  return data;
}

export default async function SellerInfo({ id }: ISellerInfo) {
  const books: IBooks = await getDetail(id);
  return (
    <div className={styles.books}>
      {books.results.books.map((book) => (
        <div key={book.rank}>
          <img src={book.book_image} alt={book.title} />
          <h3 className={styles.booktitle}>{book.title}</h3>
          <h3 className={styles.author}>{book.author}</h3>
          <Link href={book.amazon_product_url} className={styles.bookurl}>
            Buy now &rarr;
          </Link>
        </div>
      ))}
    </div>
  );
}
