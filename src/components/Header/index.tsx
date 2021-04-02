import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/img/logo.svg" alt="spacetraveling logo" />
      </div>
    </header>
  );
}
