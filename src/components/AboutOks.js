import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AboutOks.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';


function AboutOks() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (

<div id="" className=" extrapage-container flex ">


<div class="row pictures justify-content-center ">
            <div class="col-12 col-md-6 col-lg-4 colum-about colum-img  ">
            <img className="image-about1" src="../images/oks.jpg"  path="/about" alt=""/>
           </div> 
           <div class="col-12 col-md-6 col-lg-4 colum-about  ">
           <p className="information-about fs-5 text-center">Hälsokonsultation
Inga allmänna råd fungerar lika bra för alla, därför behöver varje person undersökas och behandlas individuellt för att uppnå bästa resultat.
 Som undersökningsmetod använder vi pulsdiagnostik, tungdiagnostik och vid behov tittar vi på naglar, hy, ögon med flera.
 Hälsokonsultation
Inga allmänna råd fungerar lika bra för alla, därför behöver varje person undersökas och behandlas individuellt för att uppnå bästa resultat.
 Som undersökningsmetod använder vi pulsdiagnostik, tungdiagnostik och vid behov tittar vi på naglar, hy, ögon med flera.</p>
       
           </div> 
</div>

<div class="row pictures justify-content-center ">
<div class="col-12 col-md-6 col-lg-4 colum-about  ">
           <p className="information-about fs-5">Hälsokonsultation
Inga allmänna råd fungerar lika bra för alla, därför behöver varje person undersökas och behandlas individuellt för att uppnå bästa resultat.
 Som undersökningsmetod använder vi pulsdiagnostik, tungdiagnostik och vid behov tittar vi på naglar, hy, ögon med flera.
 Hälsokonsultation
Inga allmänna råd fungerar lika bra för alla, därför behöver varje person undersökas och behandlas individuellt för att uppnå bästa resultat.
 Som undersökningsmetod använder vi pulsdiagnostik, tungdiagnostik och vid behov tittar vi på naglar, hy, ögon med flera.</p>
       
           </div> 


       
           <div class="col-12 col-md-6 col-lg-4 colum-about colum-img justify-content-start">
            <img className="image-about2" src="../images/kos.jpg"  path="/about" alt=""/>
           </div> 
</div>


          

          
   
        <Button className="btn-about"/> 
</div>
     
     
    );
  }
 
   
  export default AboutOks;
