import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({variant = "transparent"}) => {
  return (
    <header className={`${styles.header} ${variant === "light" ? styles.light : styles.transparent}`}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className={styles.center}>Anastasia Syrmais</div>
        <div className={styles.right}>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
