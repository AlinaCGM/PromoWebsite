import React from 'react';
import '../../App.css';
import MyGallery from "../MyGallery";
import HeroSection from '../Herosection.js';

import Footer from "../Footer";

 function Services() {
  return (
  <div>
  <div className='gallery' id="gallery"></div>
  <HeroSection/>
  <MyGallery/>

  <Footer/>
  </div> 
  );
}

export default Services; 