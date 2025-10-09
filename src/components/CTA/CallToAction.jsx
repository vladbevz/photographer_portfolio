import React from "react";
import styles from "./CallToAction.module.css";
import bgImg from "../../assets/cta.webp";

const CallToAction = () => {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}> Let's collaborate!</h2>
          <p className={styles.text}>
            Follow my work or get in touch directly on Instagram to discuss your project
          </p>
          <a
            href="https://www.instagram.com/syrmais__photography?igsh=MTc5bjN5NXd0NnhjMA=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Visit my Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
