import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Consultation.css';
import 'bootstrap/dist/css/bootstrap.css';


function Consultation() {
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
  
    <div id="consultation" className=" consultation flex ">


      <div class="row pictures  align-bottom">
              <div class="container-consultation ">
                  <div class="row content-cons">
                            <div class=" underline"> <h1 className=" consultation-title">FREE CONSULTATION</h1>
                            </div>
                           {/* <div class="row common-col ">
                             <div class="col-6 col-md-6 col-lg-6 name ">
                              <p className="consult-text" ></p> 
                             </div>
                             <div class="col-6 col-md-6 col-lg-6 last ">
                             <p className="consult-text"></p> 
                             </div>
                            
                           </div>

                           <div class="row common-col">
                           <div class="col col-md-12 col-lg-12 em ">
                           <p className="consult-text"></p> 
                             </div>
                             
                           </div>
                           <div class="row common-col column-last">
                           <div class="col col-md-12 col-lg-12 mes ">
                           <p className="consult-text"></p>  
                             </div>
                             
                          </div> */}
                </div>
              </div>
              </div>


  </div>

         
        );
      }
     
       
 
  
export default Consultation;