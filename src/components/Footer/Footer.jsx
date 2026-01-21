// src/components/Footer/Footer.jsx
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
      <div className={styles.textGroup}>
        <p className={styles.author}>
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
        <p className={styles.creator}>
          {t("footer.madeBy", "Website by")}{" "}
          <a
            href="https://ateliercode.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("footer.atelierCode", "AtelierCode")}
          </a>
        </p>
      </div>
      
      <div className={styles.socialLinks}>
        <a
          href="https://www.instagram.com/syrmais__photography?igsh=MTc5bjN5NXd0NnhjMA=="
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="Instagram"
        >
          <Instagram size={16} />
        </a>
      </div>

      <button
        className={styles.topButton}
        onClick={scrollToTop}
        aria-label={t("footer.scrollTop", "Scroll to top")}
        type="button"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;