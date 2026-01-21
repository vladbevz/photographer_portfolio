import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import styles from "./AboutIntro.module.css";
import aboutImg from "../../assets/about.photo.jpg"; 

const AboutIntro = () => {
  const { t } = useTranslation("about");

  return (
    <section className={styles.intro}>
      <div className={styles.text}>
        <h2>{t("intro.welcome", "Welcome")}</h2>
        <p>
          {t("intro.paragraph1", "I'm Anastasiia, a professional photographer and videographer originally from Ukraine, now based in Europe. I work with individuals and businesses, creating authentic, elegant, and emotionally powerful imagery.")}
        </p>
        <p>
          {t("intro.paragraph2", "My goal is to capture your precious moments and create visual content that highlights your personality, your brand, or your event.")}
        </p>
        <p>
          {t("intro.paragraph3", "My style: natural, modern, and refined. My approach: to understand your needs and transform your ideas into images that tell your story.")}
        </p>
        
        <Link to="/portfolio" className={styles.ctaButton}>
          {t("intro.button", "View My Portfolio")}
          <span className={styles.arrow}><ArrowRight size={18} /></span>
        </Link>
      </div>
      
      <div className={styles.imageWrapper}>
        <img 
          src={aboutImg} 
          alt={t("intro.imageAlt", "Anastasia Syrmais, professional photographer")} 
        />
        <div className={styles.imageCaption}>
          {t("intro.imageCaption", "Anastasia Syrmais • Photographer")}
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;