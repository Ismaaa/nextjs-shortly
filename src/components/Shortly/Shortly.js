/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import ShortenerBox from '../ShortenerBox';
import Subtitle from '../elements/Subtitle';
import Steps from '../Steps';
import Cta from '../Cta';
import Footer from '../Footer';
import LinksList from '../LinksList';
import Headline from '../Headline';

function Shortly() {
  return (
    <div className="Shortly">
      <Navbar />
      <div className="heading">
        <Hero />
        <Headline />
      </div>
      <ShortenerBox />
      <LinksList />
      <div className="section">
        <Subtitle text="Advanced Statistics" />
        <p className="Text Text--smaller">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <Steps />
      </div>
      <Cta text="Boost your links today" />
      <Footer />
    </div>
  );
}

export default Shortly;
