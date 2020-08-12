import Footer from "../components/Footer/";
import Cta from "../components/Cta/";
import Steps from "../components/Steps";

export default function Shortly() {
  return (
    <div className="Shortly">
      {/*<Navbar />*/}
      {/*<div className="heading">*/}
      {/*  <Hero />*/}
      {/*  <Headline />*/}
      {/*</div>*/}
      {/*<ShortenerBox />*/}
      {/*<LinksList />*/}
      <div className="section">
        {/*<Subtitle text="Advanced Statistics" />*/}
        <p className="Text Text--smaller">
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
