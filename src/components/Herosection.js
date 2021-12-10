import React from "react";
import { Link } from 'react-router-dom';
import "./Herosection.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
 

 

function  HeroSection () { 
  
   
    return (
      <div className="hero-container" id="hero">
      
     
          <div>
          <h3 className="hero-title"> Welcome to our
          </h3>
          <h1 className="hero-title2"> MASSAGE THERAPHY CENTER</h1>
          <Button className="but_hero" variant="btn-outline-light" > 
          <Link to="/services" className="link_hero"> 
          <p className="but_text">More</p>
          </Link> 
          </Button>
            </div> 

         
      </div>
    );
  }

  export default HeroSection;

