import React from 'react';
import '../App.css';
import './MyGallery.css'
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.css';


export default function MyGallery() {
  return (
     
    <div className="mygallery" id="mygallery">
      <div className="decoraction-title"> <p className="text-center sakura-text pt-5 decorAboutTitle text-center"> GALLERY</p></div>
       <div className="row size-smaller"> 
       
       
            <div className="col-12 card_p  col-md-6 col-lg-3 justify-content-center ">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex " src="../images/g1.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g2.jpg" alt="image1" />
              </Card>
               </div>

               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g3.jpg" alt="image1" />
              </Card>
            </div>
         
            <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g4.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g5.jpg" alt="image1" />
            </Card>
               </div>


               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g6.jpg" alt="image1" />
              </Card>
            </div>
            

            <div className="col-12 card_p  col-md-6 col-lg-3 justify-content-center ">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex " src="../images/g7.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g8.jpg" alt="image1" />
              </Card>
               </div>

               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g9.jpg" alt="image1" />
              </Card>
            </div>
         
            <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g10.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g11.jpg" alt="image1" />
            </Card>
               </div>


               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g12.jpg" alt="image1" />
              </Card>
            </div>
            
            </div>
        </div> 
       
        
  
    );
  }

