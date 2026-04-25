// src/pages/Portfolio.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PortfolioMain from "../components/Portfolio/PortfolioMain";

const Portfolio = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language?.startsWith('fr');

  return (
    <>
      <SEO
        title="Portfolio"
        description={
          isFr
            ? "Portraits, couple, grossesse & nouveau-nés, mariage, commercial — explorez toutes les collections d'Anastasia Syrmais, photographe basée à Nîmes, disponible dans toute la France."
            : "Portraits, couple, maternity & newborn, wedding, commercial — explore all collections by Anastasia Syrmais, fine art photographer based in Nîmes, France."
        }
        path="/portfolio"
      />
      <Header variant="light" />
      <PortfolioMain />
      <Footer />
    </>
  );
};

export default Portfolio;
