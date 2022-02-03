 import React from "react";
 import '../../App.css';
import HeroSection from '../Herosection.js';
import ServiceSection from '../ServiceSection.js';
import Footer from "../Footer";
import WhyWe from "../WhyWe";
import Stone from "../Stone";
import PriceTable from "../PriceTable";
// import Wave from "../Wave";
import Contact1 from "../Consultation1";





function Home() {
  return (
    <>
    <HeroSection/>
    {/* <Wave/> */}
    <ServiceSection/>
    <Stone/>
    <WhyWe/>
    <PriceTable/>
    <Contact1/>    
    <Footer/>
    </>
  );
}

export default Home;