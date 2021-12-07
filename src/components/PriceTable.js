import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './PriceTable.css';
import 'bootstrap/dist/css/bootstrap.css';

// import FadeInSection from './FadeInSection';

function PriceTable() {
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
    <div id="price" className=" price flex ">


<div class="row   align-bottom">
              <div class="container-price ">
                  <div class="row content-price">
                      <div class=" underline"> <h1 className=" price-title">OUR PRICE TABLE</h1>
                      </div>
                           <div class="row common-colums ">
                             <div class="col-4 col-md-4 col-lg-4 price1 price">
                              
                             </div>
                             <div class="col-4 col-md-4 col-lg-4 price2 price">
                             
                             </div>
                             <div class="col-4 col-md-4 col-lg-4 price3 price">
                           
                             </div>
                            
                           </div>

                          

                             
                           
                </div>
              </div>
              </div>


  </div>
         
         
        );
      }
     
       
 
  
export default PriceTable;