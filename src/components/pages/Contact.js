import React from 'react';
import '../../App.css';
import HeroSection from '../Herosection.js';
import Footer from "../Footer";

 function Contact() {
  return (
  <div>
  <div className='contact' id="contact"></div>
  
 <HeroSection/>
 <div className="w-100 h-50"> 
 <p className="text-center fs-1 pb-5">contact us information should be here</p></div>
 <Footer/>
  </div> 
  );
}

export default Contact;