import React from 'react';
import '../../App.css';
import CardServices from "../CardServices";
// import ImageTextServices from "../ImageTextServices";
import CardServicesMassage from "../CardServicesMassage";
// import HeroSection from '../Herosection.js';
 import Footer from "../Footer";

 function Services() {
  return (
  <div >
  <div className='services' id="services">

  </div>
  {/* <ImageTextServices/> */}
  {/* <HeroSection/> */}
  <CardServices/>
  <CardServicesMassage/>
   <Footer/> 
  
  
  </div> 
  );
}

export default Services;