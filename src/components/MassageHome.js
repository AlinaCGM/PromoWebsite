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
       <div className="row  m-5 "> 
       
       
            <div className="col-4 card_p  col-md-4 col-lg-4 justify-content-evenly ">
            <Card className="card_left flex-column">
             <p className="stone-text text-uppercase">Lorem ipsum dolor sit amet,</p>
             <p className="stone-text text-uppercase">Lorem ipsum dolor sit amet,</p>
             <p className="stone-text text-uppercase">Lorem ipsum dolor sit amet,</p>
             <p className="stone-text text-uppercase">Lorem ipsum dolor sit amet,</p>
             <p className="stone-text text-uppercase">Lorem ipsum dolor sit amet,</p>
              {/* <Card.Img variant="top" className="img_portfolio  d-flex " src="../images/g1.jpg" alt="image1" /> */}
              </Card>
               </div>
              
               <div className="col-4 card_p col-md-4 col-lg-4 justify-content-center">
               <Card className="card_center">
              
              </Card>
               </div>

               <div className="col-4 card_p col-md-4 col-lg-4 justify-content-center">
               <Card className="card_right">
               <h2> PREGNANCY MASSAGE</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.dolore magna aliqua. </p>
            <p className="stone-right">Lorem ipsum dolor </p>
             <p className="stone-right">Lorem ipsum dolor </p>
             <p className="stone-right">Lorem ipsum dolor </p>
             <p className="stone-right">Lorem ipsum dolor </p>
             <p className="stone-right">Lorem ipsum dolor </p>
               
              {/* <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g3.jpg" alt="image1" /> */}
              </Card>
            </div>
         
       
            
            </div>
        </div> 
        // {/* </FadeInSection> */}
        
  
    );
  }

