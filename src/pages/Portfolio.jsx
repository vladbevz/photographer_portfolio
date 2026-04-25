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
            ? "Explorez les collections de photographie d'art d'Anastasia Syrmais — portraits, mode, éditorial. Photographe basée à Nîmes, disponible dans toute la France."
            : "Explore Anastasia Syrmais' fine art photography collections — portraits, fashion, editorial. Based in Nîmes, available throughout France."
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
