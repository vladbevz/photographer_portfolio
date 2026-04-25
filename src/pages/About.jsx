import React from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import AboutIntro from "../components/AboutIntro/AboutIntro";
import AboutCTA from "../components/AboutCTA/AboutCTA";
import Footer from "../components/Footer/Footer";

const About = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language?.startsWith('fr');

  return (
    <>
      <SEO
        title={isFr ? "À propos" : "About"}
        description={
          isFr
            ? "Découvrez Anastasia Syrmais — la photographe derrière l'objectif. Son histoire, sa vision et sa passion pour capturer des instants intemporels chargés d'émotion."
            : "Get to know Anastasia Syrmais — the photographer behind the lens. Her story, vision, and passion for capturing timeless, emotional moments."
        }
        path="/about"
      />
      <Header variant="light" />
      <AboutIntro />
      <AboutCTA />
      <Footer />
    </>
  );
};

export default About;
