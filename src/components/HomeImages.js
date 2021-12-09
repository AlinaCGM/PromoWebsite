import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './HomeImages.css';
import 'bootstrap/dist/css/bootstrap.css';

// import FadeInSection from './FadeInSection';

function HomeImages() {
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
    <div id="homeImages" className=" homeImages-container flex ">


    <div class="row pictures  ">
              <div class="container-homeImages">
                  <div class="row ">
                   <div class=" underline">
                      <div > <h1 className=" golden-text homeImages-title">WHY WE ARE THE BEST</h1>
                      </div>
                      </div>
                           <div class="row">
                             <div class="col r1-1 col-all1 ">
                               
                             </div>
                             <div class="col r1-2 col-all1 ">
                               
                             </div>
                             <div class="col r1-3 col-all1 ">
                               
                             </div>
                           </div>


                           <div class="row">
                           <div class="col r2-1 col-all ">
                               
                             </div>
                             <div class="col r2-2 col-all ">
                              
                             </div>
                              <div class="col  r2-3 col-all ">
                               
                             </div>
                           </div>
                </div>
              </div>
       
 </div>





    </div>
         
         
        );
      }
     
       
 
  
export default HomeImages;