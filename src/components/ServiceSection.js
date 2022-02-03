import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceSection.css';
import { Link } from "react-router-dom";

 

const ServiceSection = () => {
  return ( 
  
    <div class="cont-services icon-box" >
    <div class="row m-auto  ">
    <div className=" col-12  golden-el">
        <p className="golden-text align-top mx-auto mt-5 text-center second-title-services">A pampering refuge of calm

and serenity for the body, mind, and spirit<br/>  consectetur adipisicing elit. Ad eum dolorum</p> 
       
     </div> 
     </div>
    
    
    <div class="row align-items-center ">
    <div className="col  d-flex justify-content-between "> 
<Card className="first col one "  > 
  
  <Card.Body  >
    <h2 className="title_services text-left">SERVICE 1</h2>
    <p className="title_content">Lorem ipsum </p>
  </Card.Body>
 <Link to="/services" className="link_services">more</Link>
</Card> 
     </div>

     <div className="col  d-flex justify-content-between"> 
<Card className="first col two"  >

  <Card.Body>
    <h2 className="title_services text-left">SERVICE 2</h2>
    <p className="title_content">Lorem ipsum </p>
  </Card.Body>
 <Link to="/services"  className="link_services">more</Link> 
</Card>
     </div>

     <div className="col  d-flex justify-content-between"> 
<Card className="first col three"  >

  <Card.Body>
    <h2 className="title_services">SERVICE 3</h2> 
    <p className="title_content">Lorem ipsum</p>
  </Card.Body>
<Link to="/services"  className="link_services">more</Link> 
</Card>
     </div>


       </div>
       </div>
 
  );
};

export default ServiceSection;
 