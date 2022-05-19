import Link from 'next/link';

import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.Navigation}>
    <ul>
      <li>
        <Link href="/about" as="/about">
          <a>Adout</a>
        </Link>
      </li>
      <li>
        <Link href="/how-it-works" as="/how-it-works">
          <a>How it works?</a>
        </Link>
      </li>
      <li>
        <Link href="/contacts" as="/contacts">
          <a>Contacts</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
