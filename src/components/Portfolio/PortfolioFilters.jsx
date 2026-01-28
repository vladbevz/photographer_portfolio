// src/components/Portfolio/PortfolioFilters.jsx
import React from "react";
import styles from "./PortfolioFilters.module.css";

const PortfolioFilters = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filters}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`${styles.filterButton} ${
              selectedCategory === category.id ? styles.active : ""
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilters;