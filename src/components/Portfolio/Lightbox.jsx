// src/components/Portfolio/Lightbox.jsx
import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { urlFor } from "../../lib/sanity";
import styles from "./Lightbox.module.css";

const Lightbox = ({ images, currentIndex, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    // Тут буде функція для зміни індексу
    console.log("Prev image:", newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    console.log("Next image:", newIndex);
  };

  const currentImage = images[currentIndex];

  if (!currentImage) {
    return null;
  }

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
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