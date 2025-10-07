import React from "react";
import styles from "./Footer.module.css";
import { ArrowUp } from "lucide-react"; // гарна мінімалістична іконка

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <p className={styles.author}>© 2025 Anastasia Syrmais</p>
      <p className={styles.creator}>
        Site créé par{" "}
        <a
          href="https://your-portfolio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vlad
        </a>
      </p>
      <button className={styles.topButton} onClick={scrollToTop}>
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
