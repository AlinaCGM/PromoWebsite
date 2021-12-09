import React from 'react';
import '../../App.css';
import MyGallery from "../MyGallery";

import Footer from "../Footer";

 function Services() {
  return (
  <div>
  <div className='gallery' id="gallery"></div>
  <MyGallery/>

  <Footer/>
  </div> 
  );
}

export default Services; 