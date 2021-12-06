import React from 'react';
import '../../App.css';
import CardServices from "../CardServices";
import ImageTextServices from "../ImageTextServices";
import CardServicesMassage from "../CardServicesMassage";


 function Services() {
  return (
  <div>
  <h1 className='services' id="services">Services</h1>
  <ImageTextServices/>
  <CardServices/>
  <CardServicesMassage/>
  
  
  </div> 
  );
}

export default Services;