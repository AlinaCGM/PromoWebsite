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
                  <div class="row underline">
                      <div class=" underline"> <h1 className=" homeImages-title">WHY WE ARE THE BEST</h1>
                      </div>
                           <div class="row">
                             <div class="col-6 col-md-6 col-lg-6 r1-1 col-all">
                               1 of 3
                             </div>
                             <div class="col-3 col-md-3 col-lg-3 r1-2 col-all">
                               2 of 3
                             </div>
                             <div class="col-3 col-md-3 col-lg-3 r1-3 col-all">
                               3 of 3
                             </div>
                           </div>


                           <div class="row">
                           <div class="col-3 col-md-3 col-lg-3 r2-1 col-all">
                               1 of 3
                             </div>
                             <div class="col-3 col-md-3 col-lg-3 r2-2 col-all">
                              3 of 3
                             </div>
                              <div class="col-6 col-md-6 col-lg-6  r2-3 col-all">
                               3 of 3
                             </div>
                           </div>
                </div>
              </div>
       
 </div>





    </div>
         
         
        );
      }
     
       
 
  
export default HomeImages;