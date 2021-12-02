import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Contact from "./ContactUsForm";



function Footer() {
  return (
 
    <div className="footer-container" id="contact">
      <div class="footer-links" id="links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Följ oss</h2>
        
            <a href="https://www.facebook.com/Aglo-Bygg-Entreprenad-AB-108904863917871" target="_blank" rel="noreferrer" >Facebook</a>
            <a href="https://www.linkedin.com/company/aglo-bygg" target="_blank" rel="noreferrer" >LinkedIn</a>
            <a href="https://www.instagram.com/aglobygg/" target="_blank" rel="noreferrer" >Instagram</a>
            <div class="footer-logo">
            <i class="fas fa-phone-alt phone">+46762413558 </i> 
            <img className="img_logo " src="/images/logo 2.jpg" path="/about" alt=""/>
          </div>
          </div>
          <div class="footer-link-items">
            <h2>Kontakta oss</h2>
            <Contact lg={3} class="text-lg-center pb-5 pt-5 " />
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
         
          <small class="website-rights">NexTek © 2021</small>
          <div class="social-icons">
          <a href="https://www.facebook.com/Aglo-Bygg-Entreprenad-AB-108904863917871" class="social-icon-link facebook" target="_blank" rel="noreferrer" ><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.linkedin.com/company/aglo-bygg"class="social-icon-link linkedin" target="_blank" rel="noreferrer" ><i class="fab fa-linkedin" /></a>
            <a href="https://www.instagram.com/aglobygg/"class="social-icon-link linkedin" target="_blank" rel="noreferrer" ><i class="fab fa-instagram"></i></a>
            
          </div>
        </div>
      </section>
    </div>
  
  );
};

export default Footer;
