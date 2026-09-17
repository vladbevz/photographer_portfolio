import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Instagram, ArrowRight } from "lucide-react";
import styles from "./CallToAction.module.css";

const CTA_IMAGE_URL =
  "https://cdn.sanity.io/images/1pizw8xe/production/b0dc98eda7f925f148286e289717f954c201bfb8-4000x6000.jpg?w=900&auto=format";

const CallToAction = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.section}>
      <div className={styles.imageWrap}>
        <img src={CTA_IMAGE_URL} alt="" className={styles.image} />
      </div>

      <div className={styles.text}>
        <h2 className={styles.title}>{t("cta.title")}</h2>
        <p className={styles.body}>{t("cta.text")}</p>
        <div className={styles.buttons}>
          <Link to="/contacts" className={styles.primaryBtn}>
            {t("cta.contact")}
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://www.instagram.com/syrmais__photography?igsh=MTc5bjN5NXd0NnhjMA=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <Instagram size={16} />
            {t("cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
