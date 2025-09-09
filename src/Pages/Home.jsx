import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import LandingPage from "../Components/LandingPage";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import OurServices from "../Components/OurServices";
import WhyChooseus from "../Components/WhyChooseus";

function Home() {
  return (
    <>
      <section>
        <LandingPage />
      </section>


      <section id="about-us" className="py-5">
        <AboutUs />
      </section>


      <section className="works">
        <OurServices/>
      </section>
      <section className="get-in-touch">
        <WhyChooseus/>
      </section>
      <section className="data-section">
        <Services />
      </section>
    </>
  );
}

export default Home;
