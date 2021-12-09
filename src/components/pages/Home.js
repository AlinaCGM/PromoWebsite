 import React from "react";
 import '../../App.css';
import HeroSection from '../Herosection.js';
import ServiceSection from '../ServiceSection.js';
import Footer from "../Footer";
import HomeImages from "../HomeImages";
import MassageHome from "../MassageHome";
import PriceTable from "../PriceTable";
import Contact1 from "../Consultation1";





function Home() {
  return (
    <>
    <HeroSection/>
    <ServiceSection/>
    <MassageHome/>
    <HomeImages/>
    <PriceTable/>
    <Contact1/>    
    <Footer/>
    </>
  );
}

export default Home;