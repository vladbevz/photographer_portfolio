import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./Gallery.module.css";

const photosCount = 23;

const photos = Array.from({ length: photosCount }, (_, i) => ({
  src: `/gallery/photo${i + 1}.webp`,
  alt: `Photo ${i + 1}`,
}));

const Gallery = () => {
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.title}>Moments capturés avec passion</h2>

      <div className={styles.grid}>
        {photos.map((photo, idx) => (
          <div key={idx} className={styles.imageWrapper}>
            <LazyLoadImage
              src={photo.src}
              alt={photo.alt}
              effect="blur"
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
