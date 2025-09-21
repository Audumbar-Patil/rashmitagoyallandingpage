import React from 'react';
import { Navbar, Footer } from './components';

// sections
import Hero from './sections/hero';
import SponsoredBy from './sections/sponsored-by';
import AboutEvent from './sections/about-event';
import OurStats from './sections/our-stats';
import EventContent from './sections/event-content';
import Faq from './sections/faq';

function App() {
  return (
    <div className="font-roboto">
      <Navbar />
      <Hero />
      <SponsoredBy />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;