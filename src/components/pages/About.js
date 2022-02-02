import React from 'react';
import '../../App.css';
import AboutP from "../AboutP";
import Footer from "../Footer";
// import HeroSection from '../Herosection.js';

export default function About() {
  return (
  <div>
  <div className='about' id="about"></div>
  {/* <HeroSection/> */}
  <AboutP/>
  <Footer/>
  </div> 
  );
}


// export default About;