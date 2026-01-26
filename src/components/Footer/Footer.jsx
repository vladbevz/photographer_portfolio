import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowUp, Instagram } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation("common");
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.textGroup}>
          <span className={styles.author}>
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </span>
          <span className={styles.divider}>•</span>
          <span className={styles.creator}>
            {t("footer.madeBy", "Website by")}{" "}
            <a
              href="https://ateliercode.fr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {t("footer.atelierCode", "AtelierCode")}
            </a>
          </span>
          <span className={styles.divider}>•</span>
        </div>
      </div>

      <button
        className={styles.topButton}
        onClick={scrollToTop}
        aria-label={t("footer.scrollTop", "Scroll to top")}
        type="button"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer;