import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ variant = "transparent" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${styles.header} ${
        variant === "light" ? styles.light : styles.transparent
      }`}
    >
      <nav className={styles.nav}>
        <div className={styles.center}>Anastasia Syrmais</div>

        {/* Бургер-кнопка */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Меню */}
        <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>
            Contacts
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
