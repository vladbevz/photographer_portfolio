// src/i18n/LanguageSwitcher.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLanguage === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      className={styles.languageSwitcher}
      onClick={toggleLanguage}
      aria-label={
        currentLanguage === "fr" 
          ? "Switch to English" 
          : "Passer en français"
      }
    >
      <Globe size={18} className={styles.icon} />
      <span className={styles.languageCode}>
        {currentLanguage === "fr" ? "FR" : "EN"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;