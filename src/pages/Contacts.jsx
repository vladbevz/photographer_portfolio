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
        fullTitle={
          isFr
            ? "Contact | Anastasia Syrmais, photographe et vidéaste à Nîmes"
            : "Contact | Anastasia Syrmais, Photo & Video in Nîmes"
        }
        description={
          isFr
            ? "Parlez de votre projet à Anastasia Syrmais, photographe et vidéaste à Nîmes : mariage, séance famille, portrait ou vidéo."
            : "Tell Anastasia Syrmais about your project — photographer and videographer in Nîmes: wedding, family session, portrait or video."
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
