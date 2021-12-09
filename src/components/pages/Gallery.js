import React from 'react';
import '../../App.css';
import MyGallery from "../MyGallery";
import Massage from "../Massage";
import Footer from "../Footer";

 function Services() {
  return (
  <div>
  <h1 className='gallery' id="gallery">GALLERY</h1>
  <MyGallery/>
  <Massage/>
  <Footer/>
  </div> 
  );
}

export default Services; 