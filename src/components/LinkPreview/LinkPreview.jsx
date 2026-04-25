import React, { useState } from "react";
import styles from "./LinkPreview.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import aboutImg from "../../assets/IMG_9966.webp";
import portfolioImg from "../../assets/photo_2026-01-26_17-50-44.webp";
import experienceImg from "../../assets/photo_2026-01-26_17-55-41.webp";

const LINKS = [
  { id: "about",     img: aboutImg,       path: "/about" },
  { id: "portfolio", img: portfolioImg,   path: "/portfolio" },
  { id: "contact",   img: experienceImg,  path: "/contacts" },
];

const LinkPreview = () => {
  const { t } = useTranslation("home");
  const [activeLink, setActiveLink] = useState(0);
  const [imgState, setImgState] = useState({ current: 0, prev: null, key: 0 });

  const handleHover = (index) => {
    if (index === imgState.current) return;
    setActiveLink(index);
    setImgState(s => ({
      current: index,
      prev: s.current,
      key: s.key + 1,
    }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        {LINKS.map((link, index) => (
          <Link
            key={link.id}
            to={link.path}
            className={`${styles.link} ${activeLink === index ? styles.active : ""}`}
            onMouseEnter={() => handleHover(index)}
            onClick={() => handleHover(index)}
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
          {imgState.prev !== null && (
            <img
              key={`prev-${imgState.key}`}
              src={LINKS[imgState.prev].img}
              alt=""
              aria-hidden="true"
              className={`${styles.image} ${styles.imageFadeOut}`}
            />
          )}
          <img
            key={`curr-${imgState.key}`}
            src={LINKS[imgState.current].img}
            alt={t(`linkPreview.${LINKS[imgState.current].id}`, LINKS[imgState.current].id)}
            className={`${styles.image} ${styles.imageFadeIn}`}
          />
        </div>
      </div>
    </section>
  );
};

export default LinkPreview;
