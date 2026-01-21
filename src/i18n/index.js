// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Імпортуємо переклади
import frCommon from "./locales/fr/common.json";
import frHome from "./locales/fr/home.json";
import frAbout from "./locales/fr/about.json";
import frContacts from "./locales/fr/contacts.json";
import frPortfolio from "./locales/fr/portfolio.json";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enContacts from "./locales/en/contacts.json";
import enPortfolio from "./locales/en/portfolio.json";

// Ресурси для мов
const resources = {
  fr: {
    common: frCommon,
    home: frHome,
    about: frAbout,
    contacts: frContacts,
    portfolio: frPortfolio,
  },
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    contacts: enContacts,
    portfolio: enPortfolio,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    fallbackLng: "fr", // Французька як основна
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "path", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
