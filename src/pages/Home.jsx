import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ContactSection from '../components/sections/ContactSection';
import SocialSection from '../components/sections/SocialSection';
import LogosSection from '../components/sections/LogosSection';
import ServicesSection from '../components/sections/ServicesSection';
import ResultsSection from '../components/sections/ResultsSection';

const Home = React.memo(() => {

  return (
    <>
      <HeroSection />

      <ServicesSection />
      <ResultsSection />
      <ContactSection />
    </>
  );
});

Home.displayName = 'Home';

export default Home;