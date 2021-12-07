 import React from "react";
 import '../../App.css';
import HeroSection from '../Herosection.js';
import ServiceSection from '../ServiceSection.js';
// import Massage from "../Massage";
// import BlogPage from '../BlogPage.js';
// import AboutOks from "../AboutOks";
import Footer from "../Footer";
// import ImageSlide from "../ImageSlide";
import HomeImages from "../HomeImages";
import MassageHome from "../MassageHome";
import Consultation from "../Consultation";
import PriceTable from "../PriceTable";





function Home() {
  return (
    <>
    <HeroSection/>
    <ServiceSection/>
    <MassageHome/>
    <HomeImages/>
    {/* <AboutOks/>
    <Massage/> */}
    <PriceTable/>
    <Consultation/>
    {/* <ImageSlide/> */}
    {/* <BlogPage/>   */}
    
    <Footer/>
    </>
  );
}

export default Home;