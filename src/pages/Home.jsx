import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO/SEO';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import HomeIntro from '../components/HomeIntro/HomeIntro';
import LinkPreview from '../components/LinkPreview/LinkPreview';
import CallToAction from '../components/CTA/CallToAction';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language?.startsWith('fr');

  return (
    <div>
      <SEO
        fullTitle={
          isFr
            ? "Anastasia Syrmais | Photographe & Vidéaste à Nîmes"
            : "Anastasia Syrmais | Photographer & Videographer in Nîmes"
        }
        description={
          isFr
            ? "Photographe et vidéaste à Nîmes : mariage, famille, grossesse, naissance, portrait et couple. Photographie d'art, mode et éditorial."
            : "Photographer and videographer in Nîmes: wedding, family, maternity, newborn, portrait and couple sessions. Fine art, fashion and editorial photography."
        }
        path="/"
      />
      <HeroVideo />
      <HomeIntro />
      <LinkPreview/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default Home;
