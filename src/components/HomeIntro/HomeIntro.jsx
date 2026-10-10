import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./HomeIntro.module.css";

const HomeIntro = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.section}>
      <p className={styles.text}>{t("intro.text")}</p>
    </section>
  );
};

export default HomeIntro;
