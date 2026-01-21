import React from "react";
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
      aria-label={t("cta.title", "Collaboration call to action")}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {t("cta.title", "Let's Collaborate")}
          </h2>
          <p className={styles.text}>
            {t("cta.text", "Follow my work or get in touch directly on Instagram to discuss your next photography project.")}
          </p>
          <a
            href="https://www.instagram.com/syrmais__photography?igsh=MTc5bjN5NXd0NnhjMA=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            aria-label={t("cta.button", "Visit Instagram")}
          >
            <Instagram size={18} className={styles.icon} />
            {t("cta.button", "Visit Instagram")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;