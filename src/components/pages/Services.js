import React from 'react';
import '../../App.css';
import CardServices from "../CardServices";
import CardServicesYoga from "../CardServicesYoga";
import CardServicesMassage from "../CardServicesMassage";


 function Services() {
  return (
  <div>
  <h1 className='services' id="services">Services</h1>
  <CardServicesYoga/>
  <CardServices/>
  <CardServicesMassage/>
  
  </div> 
  );
}

export default Services;