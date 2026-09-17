// src/components/Portfolio/PortfolioGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { urlFor } from "../../lib/sanity";
import styles from "./PortfolioGrid.module.css";

const PortfolioGrid = ({ projects }) => {
  const { t } = useTranslation("portfolio");

  const categoryLabels = {
    portraits: t("filters.portraits"),
    couple: t("filters.couple"),
    grossesse: t("filters.grossesse"),
    mariage: t("filters.mariage"),
    commercial: t("filters.commercial"),
  };

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
                src={urlFor(project.coverImage).width(600).height(750).url()}
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
                    {categoryLabels[project.category] || project.category}
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