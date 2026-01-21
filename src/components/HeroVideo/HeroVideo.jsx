// src/components/HeroVideo/HeroVideo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import styles from './HeroVideo.module.css';
import videoSrc from '../../assets/hero_video_740.mp4';
import Header from '../Header/Header';

const HeroVideo = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.hero}>
      <Header variant="transparent" />
      
      <video
        className={styles.video}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            {t("hero.title", "Capturing Moments in Time")}
          </h1>
          <p className={styles.subtitle}>
            {t("hero.subtitle", "Fine art photography with an eye for elegance, emotion, and timeless beauty")}
          </p>
          <div className={styles.ctaContainer}>
            <Link to="/portfolio" className={styles.primaryBtn}>
              {t("hero.cta", "View Portfolio")}
              <span className={styles.icon}>
                <ArrowRight size={20} />
              </span>
            </Link>
            <Link to="/about" className={styles.secondaryBtn}>
              {t("hero.aboutMe", "About Me")}
            </Link>
          </div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>
            {t("nav.scroll", "Scroll to explore")}
          </span>
          <div className={styles.scrollLine}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;