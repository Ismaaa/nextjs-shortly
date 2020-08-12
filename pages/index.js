import Footer from "../components/Footer/";
import Cta from "../components/Cta/";
import Steps from "../components/Steps";
import Subtitle from "../components/elements/Subtitle";
import ShortenerBox from "../components/ShortenerBox";
import Headline from "../components/Headline";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import LinksList from "../components/LinksList";

export default function Shortly() {
  return (
    <div>
      <Navbar />
      <div className="heading">
        <Hero />
        <Headline />
      </div>
      <ShortenerBox />
      {/*<LinksList />*/}
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
