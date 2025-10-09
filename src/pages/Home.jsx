import React from 'react';
import Header from '../components/Header/Header';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import Gallery from '../components/Gallery/Gallery';
import LinkPreview from '../components/LinkPreview/LinkPreview';
import CallToAction from '../components/CTA/CallToAction';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      {/* <Header variant="transparent"/> */}
      <HeroVideo />
      <Gallery/>
      <LinkPreview/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default Home;
