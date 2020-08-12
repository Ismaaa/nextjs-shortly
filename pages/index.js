import React from "react";
import Footer from "../src/components/Footer/";
import Cta from "../src/components/Cta/";
import Steps from "../src/components/Steps";
import Subtitle from "../src/components/elements/Subtitle";
import ShortenerBox from "../src/components/ShortenerBox";
import Headline from "../src/components/Headline";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import LinksList from "../src/components/LinksList";

export default function Shortly() {
  return (
    <div>
      <Navbar />
      <div className="heading">
        <Hero />
        <Headline />
      </div>
      <ShortenerBox />
      <LinksList />
      <div className="section">
        <Subtitle text="Advanced Statistics" />
        <p className="paragraph paragraph--small">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <Steps />
      </div>
      <Cta text="Boost your links today" />
      <Footer />
    </div>
  )
}
