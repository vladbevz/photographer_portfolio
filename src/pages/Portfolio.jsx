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
        fullTitle={
          isFr
            ? "Portfolio | Anastasia Syrmais, photographe à Nîmes"
            : "Portfolio | Anastasia Syrmais, photographer in Nîmes"
        }
        description={
          isFr
            ? "Séances et reportages d'Anastasia Syrmais, photographe à Nîmes : portraits, couples, grossesse, naissance, mariage."
            : "Sessions and reportage by Anastasia Syrmais, photographer in Nîmes: portraits, couples, maternity, newborn, wedding."
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
