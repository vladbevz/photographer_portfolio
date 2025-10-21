import React, { useState, useCallback } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./PortfolioGallery.module.css";

const imageNames = [
  "photo1.webp",
  "photo2.webp",
  "photo3.webp",
  "photo4.webp",
  "photo5.webp",
  "photo6.webp",
  "photo7.webp",
  "photo8.webp",
  "photo9.webp",
  "photo10.webp",
  "photo11.webp",
  "photo12.webp",
  "photo13.webp",
  "photo14.webp",
  "photo15.webp",
  "photo16.webp",
  "photo17.webp",
  "photo18.webp",
  "photo19.webp",
  "photo20.webp",
  "photo21.webp",
  "photo22.webp",
  "photo23.webp",
  "photo24.webp",
];

// чергуємо вертикальні (3:4) та горизонтальні (4:3)
const photos = imageNames.map((name, i) => ({
  src: `/gallery/${name}`,
  width: i % 2 === 0 ? 4 : 3,
  height: i % 2 === 0 ? 3 : 4,
}));

const PortfolioGallery = () => {
  const [index, setIndex] = useState(-1);

  // Контролюємо вигляд зображення
  const renderPhoto = useCallback(({ imageProps }) => (
    <img
      {...imageProps}
      style={{
        ...imageProps.style,
        width: "100%",
        height: "auto",
        maxHeight: "480px", // обмеження, щоб вертикальні не були гігантські
        objectFit: "cover",
        borderRadius: "6px",
        display: "block",
      }}
      alt=""
    />
  ), []);

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.title}>Portfolio</h2>

      <div className={styles.galleryContainer}>
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          targetRowHeight={240}
          spacing={10}
          onClick={({ index }) => setIndex(index)}
          renderPhoto={renderPhoto}
        />
      </div>

      <Lightbox
        slides={photos.map((p) => ({ src: p.src }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </section>
  );
};

export default PortfolioGallery;
