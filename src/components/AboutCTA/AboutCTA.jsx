import React from "react";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";
import styles from "./AboutCTA.module.css";

const AboutCTA = () => {
  const { t } = useTranslation("about");

  return (
    <section className={styles.cta}>
      <div className={styles.ctaContainer}>
        <h3>{t("cta.title", "Stay Connected")}</h3>
        <p className={styles.subtitle}>
          {t("cta.subtitle", "Follow my latest work, behind-the-scenes moments, and photography insights on Instagram")}
        </p>
        <a
          href="https://instagram.com/syrmais__photography/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          aria-label={t("cta.button", "Follow on Instagram")}
        >
          <Instagram size={18} className={styles.instagramIcon} />
          {t("cta.button", "Follow on Instagram")}
        </a>
        
        {/* Секція зі статистикою */}
        <div className={styles.socialStats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>30+</div>
            <div className={styles.statLabel}>
              {t("cta.stats.projects", "Projects")}
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>2+</div>
            <div className={styles.statLabel}>
              {t("cta.stats.experience", "Years Experience")}
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>30+</div>
            <div className={styles.statLabel}>
              {t("cta.stats.clients", "Happy Clients")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;