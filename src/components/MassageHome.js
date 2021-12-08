import React from 'react';
import '../App.css';
import './MassageHome.css'
import Card from 'react-bootstrap/Card';
// import FadeInSection from "./FadeInSection";
import 'bootstrap/dist/css/bootstrap.css';


export default function MassaheHome() {
  return (
        // <FadeInSection>
    <div className="massage-home" id="massage-home">
       <div className="row  "> 
       
       
            <div className="col-4 card_p  col-md-4 col-lg-4 justify-content-evenly ">
            <Card className="card_left flex-column">
             <p className="stone-text-l text-uppercase">massage different types</p>
             <p className="stone-text-l text-uppercase">massage different types</p>
             <p className="stone-text-l text-uppercase">massage different types</p>
             <p className="stone-text-l text-uppercase">massage different types</p>
             <p className="stone-text-l text-uppercase">massage different types</p>
         
              </Card>
               </div>
              
               <div className="col-4 card_p col-md-4 col-lg-4 justify-content-center">
               <Card className="card_center">
               
              </Card>
               </div>

               <div className="col-4 card_p col-md-4 col-lg-4 justify-content-center">
               <Card className="card_right">
               <h2 className="stone-title"> PREGNANCY MASSAGE</h2>
               <p className="stone-text-r">Lorem ipsum dolor sit amet, consectetur adipiscing elit,dolore magna aliqua. </p>
            <p className="stone-text-r">Lorem ipsum dolor </p>
             <p className="stone-text-r">Lorem ipsum dolor </p>
             <p className="stone-text-r">Lorem ipsum dolor </p>
             
             
              </Card> 
            </div>
         
       
            
            </div>
        </div> 
        // {/* </FadeInSection> */}
        
  
    );
  }

