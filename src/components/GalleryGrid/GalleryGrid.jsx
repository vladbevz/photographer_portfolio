// src/components/Portfolio/GalleryGrid.jsx
import albums from "../../data/albums";
import styles from "./GalleryGrid.module.css";

const GalleryGrid = () => {
  return (
    <section className={styles.galleryGrid}>
      {albums.map((album, i) => (
        <a
          key={i}
          href={album.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.albumCard}
        >
          <div className={styles.albumImageWrapper}>
            <img
              src={album.cover}
              alt={album.title}
              className={styles.albumImage}
              loading="lazy"
            />
            <div className={styles.albumOverlay}>
              <h3 className={styles.albumTitle}>{album.title}</h3>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default GalleryGrid;
