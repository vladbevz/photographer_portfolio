// HeroVideo.jsx
import React from 'react';
import styles from './HeroVideo.module.css';
import videoSrc from '../../assets/hero_video_740.mp4';
import Header from '../Header/Header';

const HeroVideo = () => {
  return (
    <section className={styles.hero}>
      <Header/>
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
