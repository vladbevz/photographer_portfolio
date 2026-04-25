import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";
import styles from "./CallToAction.module.css";
import bgImg from "../../assets/cta.webp";

const CallToAction = () => {
  const { t } = useTranslation("home");

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgImg})` }}
      aria-label={t("cta.title")}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {t("cta.title")}
          </h2>
          <p className={styles.text}>
            {t("cta.text")}
          </p>
          <div className={styles.buttons}>
            <Link to="/contacts" className={`${styles.button} ${styles.buttonPrimary}`}>
              {t("cta.contact")}
            </Link>
            <a
              href="https://www.instagram.com/syrmais__photography?igsh=MTc5bjN5NXd0NnhjMA=="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
              aria-label={t("cta.button")}
            >
              <Instagram size={18} className={styles.icon} />
              {t("cta.button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
