// HeroVideo.jsx
import React from 'react';
import styles from './HeroVideo.module.css';
import videoSrc from '../../assets/hero_video.mp4';

const HeroVideo = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </section>
  );
};

export default HeroVideo;
