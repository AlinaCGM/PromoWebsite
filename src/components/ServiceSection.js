import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceSection.css';
import Button from './Button';
// import FadeInSection from "./FadeInSection";



const ServiceSection = () => {
  return ( 
    // <FadeInSection>
    <div class="cont-services icon-box" >
    
    <div class="row align-items-center ">
    <div className="col-12  col-md-6 col-lg-3  d-flex justify-content-between "> 
<Card className="first col "  > 
     <img className="img_first" src="../images/1.svg" path="/about" alt=""/>
  <Card.Body >
    <h2 className="title_services">MASSAGE</h2>
    <p className="title_content">Индивидуальные Аюрведические консультации онлайн и оффлайн</p>
  </Card.Body>
  <Button/>
</Card>
     </div>

     <div className="col-12  col-md-6 col-lg-3 d-flex justify-content-between"> 
<Card className="first col"  >
<img className="img_first" src="../images/2.svg" path="/about" alt=""/>
  <Card.Body>
    <h2 className="title_services">YOGAE</h2>
    <p className="title_content">Индивидуальные Аюрведические консультации онлайн и оффлайн</p>
  </Card.Body>
  <Button/>
</Card>
     </div>

     <div className="col-12  col-md-6 col-lg-3 d-flex justify-content-between"> 
<Card className="first col"  >
<img className="img_first" src="../images/3.svg" path="/about" alt=""/>
  <Card.Body>
    <h2 className="title_services">TRAINING</h2>
    <p className="title_content">Индивидуальные Аюрведические консультации онлайн и оффлайн</p>
  </Card.Body>
  <Button/>
</Card>
     </div>

     <div className="col-12  col-md-6 col-lg-3 d-flex justify-content-between"> 
<Card className="first col"  >
<img className="img_first" src="../images/4.svg" path="/about" alt=""/>
  <Card.Body>
    <h2 className="title_services">YOGA TOUR</h2>
    <p className="title_content">Индивидуальные Аюрведические консультации онлайн и оффлайн</p>
  </Card.Body>
  <Button/>
</Card>
     </div>

       </div>
       </div>
    //   {/* </FadeInSection>   */}
  );
};

export default ServiceSection;
 