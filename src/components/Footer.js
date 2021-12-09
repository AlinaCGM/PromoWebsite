import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';




function Footer() {
  return (
 
    <div className="footer-container" id="contact">

<div class="container">
  <div class="row">
    <div class="col footer-col">
   
      <div class="footer-link-items">
            <h2 className="followUs">FOLLOW US</h2>
          
            <a href="/" target="_blank" rel="noreferrer" >Facebook</a> <br/>
            <a href="/" target="_blank" rel="noreferrer" >LinkedIn</a> <br/>
            <a href="/" target="_blank" rel="noreferrer" >Instagram</a> <br/>
           
            <i class="fas fa-phone-alt phone">+467000000 </i> 
           <div className="address">
         <p>
         Vällingby Torg 32 <br/> 162 65 Vällingby   
         </p>    
           </div>
              
    </div>
    </div>
    <div class="col footer-col">
     
      <img className="img_logo " src="../images/flower.png" path="/about" alt=""/>
     
     
      <div className="social-icons justify-content-between">
      <a href="/" class="social-icon-link facebook" target="_blank" rel="noreferrer" ><i class="fab fa-facebook-square"></i></a>
            <a href="/" class="social-icon-link linkedin" target="_blank" rel="noreferrer" ><i class="fab fa-linkedin" /></a>
            <a href="/"class="social-icon-link linkedin" target="_blank" rel="noreferrer" ><i class="fab fa-instagram"></i></a>
      </div>
     
    </div>
  </div>
</div>
  


  <div class="website-rights mx-auto ">NexTek © 2021 </div>

     
    </div>
  
  );
};

export default Footer;
