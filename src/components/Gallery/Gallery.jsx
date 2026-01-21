import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./Gallery.module.css";

const photosCount = 23;

const photos = Array.from({ length: photosCount }, (_, i) => ({
  src: `/gallery/photo${i + 1}.webp`,
  alt: `Fine art photography ${i + 1}`,
  title: `Portfolio ${i + 1}`,
  category: i % 3 === 0 ? "Portrait" : i % 3 === 1 ? "Nature" : "Urban",
}));

const Gallery = () => {
  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <h2 className={styles.title}>Capturing Moments with Passion</h2>
        <p className={styles.subtitle}>
          Each photograph tells a unique story, framed with precision 
          and an artistic eye for detail
        </p>

        <div className={styles.grid}>
          {photos.map((photo, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <LazyLoadImage
                src={photo.src}
                alt={photo.alt}
                effect="blur"
                className={styles.image}
                threshold={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;