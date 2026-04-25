// src/components/Portfolio/PortfolioMain.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioFilters from "./PortfolioFilters";
import { getAllProjects, getProjectsByCategory } from "../../lib/sanity";
import styles from "./PortfolioMain.module.css";

const PortfolioMain = () => {
  const { t } = useTranslation("portfolio");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchProjects();
  }, [selectedCategory]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      let data;
      
      if (selectedCategory === "all") {
        data = await getAllProjects();
      } else {
        data = await getProjectsByCategory(selectedCategory);
      }
      
      setProjects(data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: "all",        label: t("filters.all",        "Tous") },
    { id: "portraits",  label: t("filters.portraits",  "Portraits") },
    { id: "couple",     label: t("filters.couple",     "Couple") },
    { id: "grossesse",  label: t("filters.grossesse",  "Grossesse / Nouveau-Nés") },
    { id: "mariage",    label: t("filters.mariage",    "Mariage") },
    { id: "commercial", label: t("filters.commercial", "Commercial") },
  ];

  return (
    <div className={styles.portfolioMain}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            {t("hero.title", "Portfolio")}
          </h1>
          <p className={styles.subtitle}>
            {t("hero.subtitle", "A curated selection of my finest work")}
          </p>
        </div>
      </section>

      <PortfolioFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className={styles.galleryContainer}>
        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>{t("loading", "Loading projects...")}</p>
          </div>
        ) : projects.length > 0 ? (
          <>
            <PortfolioGrid projects={projects} />
            <div className={styles.stats}>
              <span>{projects.length} {t("stats.projects", "projects")}</span>
            </div>
          </>
        ) : (
          <div className={styles.emptyState}>
            <p>{t("empty", "No projects found")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioMain;