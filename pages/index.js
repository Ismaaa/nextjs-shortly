import Head from 'next/head'
import Footer from "../components/Footer/";
import Button from "../elements/Button";
import Cta from "../components/Cta/";

export default function Home() {
  return (
    <>
      <Cta text="Boost your links today" />
      <Footer />
    </>
  )
}
