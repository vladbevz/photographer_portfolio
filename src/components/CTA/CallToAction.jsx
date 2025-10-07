import React from "react";
import styles from "./CallToAction.module.css";
import bgImg from "../../assets/cta_bg.webp";

const CallToAction = () => {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>Vous voulez collaborer ?</h2>
          <p className={styles.text}>
            Suivez-moi ou contactez-moi directement sur Instagram pour votre projet
          </p>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Voir sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
