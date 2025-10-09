import React from "react";
import Header from "../components/Header/Header";
import AboutIntro from "../components/AboutIntro/AboutIntro";
import AboutCTA from "../components/AboutCTA/AboutCTA";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header variant="light" /> 
      <AboutIntro />
      <AboutCTA />
      <Footer />
    </>
  );
};

export default About;

