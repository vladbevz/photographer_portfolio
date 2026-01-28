// src/pages/Portfolio.jsx
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PortfolioMain from "../components/Portfolio/PortfolioMain";

const Portfolio = () => {
  return (
    <>
      <Header variant="light" />
      <PortfolioMain />
      <Footer />
    </>
  );
};

export default Portfolio;