import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceSection.css';
import { Link } from "react-router-dom";
import './Button.css';
import Button from 'react-bootstrap/Button';
 import FadeInSection from "./FadeInSection";

 

const ServiceSection = () => {
  return ( 
     <FadeInSection>
    <div class="cont-services icon-box" >
    
    <div class="row m-auto  ">
    <div className=" col-12  golden-el">
       <h1 className="golden-text align-top ">MASSAGE THERAPHY CENTER</h1>
       
     </div> 
     <p className=" mx-auto text-center">Lorem ipsum dolor sit amet<br/>  consectetur adipisicing elit. Ad eum dolorum</p>
     
    </div>
    
    
    <div class="row align-items-center ">
    <div className="col  d-flex justify-content-between "> 
<Card className="first col one "  > 
  
  <Card.Body >
    <h2 className="title_services">SERVICE 1</h2>
    <p className="title_content">Lorem ipsum dolor sit amet,</p>
  </Card.Body>
  <Button className="but_services" variant="outline-secondary" > <Link to="/services" className="link_services">more</Link> </Button>
</Card> 
     </div>

     <div className="col  d-flex justify-content-between"> 
<Card className="first col two"  >

  <Card.Body>
    <h2 className="title_services">SERVICE 2</h2>
    <p className="title_content">Lorem ipsum dolor sit amet,</p>
  </Card.Body>
  <Button className="but_services" variant="outline-secondary"> <Link to="/services"  className="link_services">more</Link> </Button>
</Card>
     </div>

     <div className="col  d-flex justify-content-between"> 
<Card className="first col three"  >

  <Card.Body>
    <h2 className="title_services">SERVICE 3</h2> 
    <p className="title_content">Lorem ipsum dolor sit amet,</p>
  </Card.Body>
  <Button className="but_services" variant="outline-secondary"><Link to="/services"  className="link_services">more</Link> </Button>
</Card>
     </div>


       </div>
       </div>

      </FadeInSection>   
  );
};

export default ServiceSection;
 