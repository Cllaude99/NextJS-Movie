import Link from 'next/link';
import styles from '../styles/seller.module.css';

interface ISeller {
  readonly listname: string;
  readonly displayname: string;
}

export default function Seller({ listname, displayname }: ISeller) {
  return (
    <Link href={`/list/${listname}`}>
      <li className={styles.name}>{displayname}</li>
    </Link>
  );
}
