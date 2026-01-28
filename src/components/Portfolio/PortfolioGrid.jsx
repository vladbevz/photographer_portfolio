// src/components/Portfolio/PortfolioGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../lib/sanity";
import styles from "./PortfolioGrid.module.css";

const PortfolioGrid = ({ projects }) => {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <Link
          key={project._id}
          to={`/portfolio/${project.slug}`}
          className={styles.projectCard}
        >
          <div className={styles.imageContainer}>
            {project.coverImage && (
              <img
                src={urlFor(project.coverImage).width(600).height(400).url()}
                alt={project.coverImage.alt || project.title}
                className={styles.image}
                loading="lazy"
              />
            )}
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectMeta}>
                  <span className={styles.category}>
                    {project.category}
                  </span>
                  {project.date && (
                    <span className={styles.date}>
                      {new Date(project.date).getFullYear()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioGrid;