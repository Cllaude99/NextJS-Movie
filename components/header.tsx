import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div>
        <ul>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link href={`/about`}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
