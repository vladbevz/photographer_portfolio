import React from "react";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";
import styles from "./AboutCTA.module.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const AboutCTA = () => {
  const { t } = useTranslation("about");
  const titleRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <section className={styles.cta}>
      <div className={styles.ctaContainer}>
        <div ref={titleRef}>
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
        </div>

        <div className={styles.socialStats} ref={statsRef}>
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