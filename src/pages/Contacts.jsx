import React from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import ContactsComponent from "../components/ContactsComponent/ContactsComponent";
import Footer from "../components/Footer/Footer";

const Contacts = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language?.startsWith('fr');

  return (
    <>
      <SEO
        title={isFr ? "Contact" : "Contact"}
        description={
          isFr
            ? "Contactez Anastasia Syrmais pour discuter de votre projet photo. Basée à Nîmes, disponible pour des séances portraits, mode et éditorial partout en France."
            : "Contact Anastasia Syrmais to discuss your photography project. Based in Nîmes, available for portrait, fashion and editorial sessions throughout France."
        }
        path="/contacts"
      />
      <Header variant="light" />
      <ContactsComponent />
      <Footer />
    </>
  );
};

export default Contacts;
