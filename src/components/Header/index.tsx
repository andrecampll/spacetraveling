import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="/img/logo.svg" alt="logo" />
          </a>
        </Link>
      </div>
    </header>
  );
}
