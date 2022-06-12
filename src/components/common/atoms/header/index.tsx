import styles from './index.module.css';

export const Header = () => (
  <header className={`hero is-dark ${styles.wrapper}`}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-centered is-size-4-mobile">yakumomutsuki.github.io</h1>
      </div>
    </div>
  </header>
);
