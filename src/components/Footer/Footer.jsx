import React from "react";
import styles from "./Footer.module.css";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    console.log("Footer: scrollToTop clicked");

    // Кандидати для скролу (в порядку пріоритету)
    const candidates = [
      document.querySelector("#root"),
      document.querySelector("#app"),
      document.querySelector("main"),
      document.scrollingElement,
      document.documentElement,
      document.body,
    ].filter(Boolean);

    // знайти перший елемент, який фактично скролиться
    let target = candidates.find(
      (el) => el.scrollHeight > el.clientHeight
    );

    if (!target) {
      target = document.scrollingElement || document.documentElement || document.body;
    }

    // Якщо це document.scrollingElement або body/html, використовуємо window.scrollTo для сумісності
    if (target === document.scrollingElement || target === document.documentElement || target === document.body) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // скролимо знайдений контейнер
      if ("scrollTo" in target) {
        target.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        target.scrollTop = 0;
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.textGroup}>
        <p className={styles.author}>© 2025 Anastasia Syrmais</p>
        <p className={styles.creator}>
          Website by {" "}
          <a
            href="https://brilliant-peony-aafd00.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vlad
          </a>
        </p>
      </div>

      <button
        className={styles.topButton}
        onClick={scrollToTop}
        aria-label="Повернутись вгору"
        type="button"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
