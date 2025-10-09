import React from "react";
import styles from "./AboutIntro.module.css";
import aboutImg from "../../assets/about.photo.jpg"; 

const AboutIntro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.text}>
        <h2>Welcome!</h2>
        <p>
         I'm Anastasiia, a professional photographer and videographer originally from Ukraine, now based in Europe. I work with individuals and businesses, creating authentic, elegant, and emotionally powerful imagery. 

My goal is to capture your precious moments and create visual content that highlights your personality, your brand, or your event.
        </p>
        <p>
          My style: natural, modern, and refined. My approach: to understand your needs and transform your ideas into images that tell your story.

        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={aboutImg} alt="Anastasia Syrmais" />
      </div>
    </section>
  );
};

export default AboutIntro;
