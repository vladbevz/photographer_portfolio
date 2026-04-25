import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { urlFor } from "../../lib/sanity";
import styles from "./Lightbox.module.css";

const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
      if (e.key === "ArrowRight") onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNavigate, currentIndex, images.length]);

  const handlePrev = () => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.imageContainer}>
          <img
            src={urlFor(currentImage).url()}
            alt={currentImage.alt || "Gallery image"}
            className={styles.image}
          />

          {images.length > 1 && (
            <>
              <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrev}>
                <ChevronLeft size={32} />
              </button>
              <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext}>
                <ChevronRight size={32} />
              </button>
              <div className={styles.counter}>
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
