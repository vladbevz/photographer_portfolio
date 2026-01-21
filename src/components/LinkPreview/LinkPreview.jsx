import React, { useState, useEffect } from "react";
import styles from "./LinkPreview.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Тимчасові зображення
import aboutImg from "../../assets/about_portret.webp";
import portfolioImg from "../../assets/portfolio.webp";
import experienceImg from "../../assets/experience.webp";

const LinkPreview = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [imageState, setImageState] = useState("entering");
  const { t } = useTranslation("home");

  // Створюємо масив посилань з перекладами
  const links = [
    { 
      id: "about",
      img: aboutImg, 
      path: "/about",
    },
    { 
      id: "portfolio",
      img: portfolioImg, 
      path: "/portfolio",
    },
    { 
      id: "contact",
      img: experienceImg, 
      path: "/contacts",
    },
  ];

  useEffect(() => {
    // Анімація зміни зображення
    setImageState("entering");
    const timer = setTimeout(() => {
      setImageState("entered");
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeLink]);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        {links.map((link, index) => (
          <Link
            key={link.id}
            to={link.path}
            className={`${styles.link} ${activeLink === index ? styles.active : ""}`}
            onMouseEnter={() => setActiveLink(index)}
            onClick={() => setActiveLink(index)}
          >
            {t(`linkPreview.${link.id}`, 
              link.id === "about" ? "About" : 
              link.id === "portfolio" ? "Portfolio" : "Contact"
            )}
          </Link>
        ))}
      </div>
      
      <div className={styles.right}>
        <div className={styles.imageContainer}>
          <img 
            src={links[activeLink].img} 
            alt={`${t(`linkPreview.${links[activeLink].id}`, links[activeLink].id)} preview`} 
            className={`${styles.image} ${styles[imageState]}`}
          />
          
          {/* Оверлей з текстом (розкоментуй якщо потрібно) */}
          {/* <div className={styles.imageOverlay}>
            <h3 className={styles.imageTitle}>
              {t(`linkPreview.${links[activeLink].id}`, 
                links[activeLink].id === "about" ? "About" : 
                links[activeLink].id === "portfolio" ? "Portfolio" : "Contact"
              )}
            </h3>
            <p className={styles.imageSubtitle}>
              {t(`linkPreview.${links[activeLink].id}Subtitle`,
                links[activeLink].id === "about" ? "Get to know the artist behind the lens" : 
                links[activeLink].id === "portfolio" ? "Explore curated collections of fine art photography" : 
                "Let's create something beautiful together"
              )}
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LinkPreview;