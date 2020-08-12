import React from "react";
import Head from 'next/head'
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
      <Head>
        <meta charSet="utf-8"/>

        <title>Shortly - More than just shorter links</title>
        <meta name="title" content="Shortly - More than just shorter links"/>
        <meta name="description" content="Free URL shortener"/>
        <meta name="keywords"
              content="shortly, shorten link, link, shortener, url, free, short url, short url free, short website, short link, link, free url, free url shortener"
        />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://shortly.ismaaa.me/"/>
        <meta property="og:title" content="Shortly - More than just shorter links"/>
        <meta property="og:description" content="Free URL shortener"/>
        <meta property="og:image" content="/android-chrome-512x512.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://shortly.ismaaa.me/"/>
        <meta property="twitter:title" content="Shortly - More than just shorter links"/>
        <meta property="twitter:description" content="Free URL shortener"/>
        <meta property="twitter:image"
              content="https://shortly.ismaaa.me/android-chrome-512x512.png"/>

        <link rel="icon" href="https://shortly.ismaaa.me/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#3B3054"/>
        <meta name="description" content="Free URL shortener"/>

        <link rel="apple-touch-icon" href="https://shortly.ismaaa.me/apple-touch-icon.png"/>
        <link rel="manifest" href="https://shortly.ismaaa.me/manifest.json"/>
        <title>Shortly - More than just shorter links</title>
      </Head>
      <Navbar/>
      <div className="heading">
        <Hero/>
        <Headline/>
      </div>
      <ShortenerBox/>
      <LinksList/>
      <div className="section">
        <Subtitle text="Advanced Statistics"/>
        <p className="paragraph paragraph--small">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <Steps/>
      </div>
      <Cta text="Boost your links today"/>
      <Footer/>
    </div>
  )
}
