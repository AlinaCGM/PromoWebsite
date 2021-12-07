import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import './PriceTable.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from './Button';

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


<div className="row container-price justify-content-between mx-auto ">
   
    <div class="row content-price ">
                      <div className="underline1 col"> 
                      <h1 className=" price-title ">OUR PRICE TABLE</h1></div>
     </div>
     
     <div className="col-12  col-md-4 col-lg-4 d-flex "> 
    
<Card className="price-one p price-col"  > 
  <Card.Body >
    <h2 className="title_price tp1">MASSAGE</h2>
    
    <p className="digits_price">495sek</p>
    <p className="text_price ">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </Card.Body>
  <Button/> 
</Card>
     </div>

     <div className="col-12  col-md-4 col-lg-4 d-flex "> 
<Card className="price-two price-col"  >
  <Card.Body>
    <h2 className="title_price tp2">SPA</h2>
    
    <p className="digits_price">550sek</p>
    <p className="text_price ">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </Card.Body>
  <Button/>
</Card>
     </div>

     <div className="col-12  col-md-4 col-lg-4 d-flex "> 
<Card className="price-three price-col"  >
  <Card.Body>
    <h2 className="title_price tp3">YOGA</h2> 
    
    <p className="digits_price">725sek</p>
    <p className="text_price ">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </Card.Body>
  <Button/>
</Card>
     </div>


{/* 

              <div class="container-price align-items-center ">
                  <div class="row content-price justify-content-evenly">
                      <div class=" underline"> <h1 className=" price-title">OUR PRICE TABLE</h1>
                      </div>
                           <div class="row common-colums justify-content-evenly ">
                             <div class="col-4 col-md-4 col-lg-4 price1 price-col">
                              
                             </div>
                             <div class="col-4 col-md-4 col-lg-4 price2 price-col">
                             
                             </div>
                             <div class="col-4 col-md-4 col-lg-4 price3 price-col">
                           
                             </div>
                            
                           </div>

                          

                             
                           
                </div>
              </div> */}
              

              </div>
  </div>
         
         
        );
      }
     
       
 
  
export default PriceTable;