// src/components/Header/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../i18n/LanguageSwitcher";
import styles from "./Header.module.css";

const Header = ({ variant = "transparent" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (variant === "transparent") {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        setScrolled(isScrolled);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [variant]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`${styles.header} ${
        variant === "light" ? styles.light : styles.transparent
      } ${scrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.nav}>
        <div className={styles.center}>
          <Link to="/">{t("header.logo", "Anastasia Syrmais")}</Link>
        </div>

        <div className={styles.navRight}>
          <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              {t("nav.home", "Home")}
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              {t("nav.about", "About")}
            </Link>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
              {t("nav.portfolio", "Portfolio")}
            </Link>
            <Link to="/contacts" onClick={() => setMenuOpen(false)}>
              {t("nav.contacts", "Contacts")}
            </Link>
          </div>

          <LanguageSwitcher />

          <button
            className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t("header.menu", "Menu")}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;