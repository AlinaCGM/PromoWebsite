import React from 'react';
import '../../App.css';
import AboutP from "../AboutP";
import AboutStuff from "../AboutStuff";
// import Footer from "../Footer";
// import HeroSection from '../Herosection.js';

export default function About() {
  return (
  <div>
  <div className='about' id="about"></div>
  {/* <HeroSection/> */}
  <AboutP/>
  <AboutStuff/>
  {/* <Footer/> */}
  </div> 
  );
}


// export default About;