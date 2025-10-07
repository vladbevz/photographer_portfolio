import React, { useState } from "react";
import styles from "./LinkPreview.module.css";
import { Link } from "react-router-dom";

// Тимчасові зображення (потім заміниш своїми)
import aboutImg from "../../assets/about.webp";
import portfolioImg from "../../assets/portfolio.webp";
import experienceImg from "../../assets/experience.webp";

const links = [
  { name: "About", img: aboutImg, path: "/about" },
  { name: "Portfolio", img: portfolioImg, path: "/portfolio" },
  { name: "Experience", img: experienceImg, path: "/experience" },
];

const LinkPreview = () => {
  const [hoveredImg, setHoveredImg] = useState(links[0].img);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={styles.link}
            onMouseEnter={() => setHoveredImg(link.img)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className={styles.right}>
        <img src={hoveredImg} alt="Preview" className={styles.image} />
      </div>
    </section>
  );
};

export default LinkPreview;
