import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO/SEO';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import LinkPreview from '../components/LinkPreview/LinkPreview';
import CallToAction from '../components/CTA/CallToAction';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language?.startsWith('fr');

  return (
    <div>
      <SEO
        description={
          isFr
            ? "Photographe d'art basée à Nîmes — portraits élégants, mode et photographie éditoriale avec un regard pour l'émotion et la beauté intemporelle."
            : "Fine art photographer based in Nîmes, France — elegant portraits, fashion and editorial photography with an eye for emotion and timeless beauty."
        }
        path="/"
      />
      <HeroVideo />
      <LinkPreview/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default Home;
