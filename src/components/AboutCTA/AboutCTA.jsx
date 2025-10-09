import React from "react";
import styles from "./AboutCTA.module.css";

const AboutCTA = () => {
  return (
    <section className={styles.cta}>
      <h3>Discover more</h3>
      <a
        href="https://instagram.com/syrmais__photography/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Follow on Instagram
      </a>
    </section>
  );
};

export default AboutCTA;
