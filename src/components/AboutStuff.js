import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutStuff.css';
//  import FadeInSection from "./FadeInSection";
import Zoom from 'react-reveal/Zoom';

 
const  AboutStuff = () => {
  return ( 
    
    <div>
     <Zoom delay={900}>
      <h4 className='text-center sakura-text pt-5 title  color-goldy mb-5'>OUR TEAM</h4>
      </Zoom>
    <div className="aboutStuff-container " id="second">
      
    <div className='row d-flex justify-content-around containerabout'>
    <Zoom  delay={930}>
   <div className="col-6 col-md-6 col-lg-3">
    <div className="about-pics "> 
     <img className="foto-stuff " src="../images/stuff1_ccexpress.jpeg" path="/about"alt=""/>  
     <h3 className='stuff-about text-center'>ANNA S.</h3>
    </div>
    </div>
    </Zoom>
    <br/>

    <Zoom  delay={960}>
    <div className="col-6 col-md-6 col-lg-3">
    <div className=" about-pics ">
     <img className="foto-stuff " src="../images/stuff2_ccexpress.jpeg" path="/about"alt=""/> 
     <h3 className=' stuff-about text-center'>MARCUS B.</h3> 
    </div>
    </div>
    </Zoom>
    <br/>


    <Zoom  delay={990}>
    <div className="col-6 col-md-6 col-lg-3">
    <div className=" about-pics card-3">
     <img className="foto-stuff card-3" src="../images/stuff3_ccexpress.jpeg" path="/about"alt=""/>
     <h3 className=' stuff-about text-center'>LIANA V.</h3> 
    </div>
    </div>
    </Zoom>
    <br/>

    <Zoom  delay={1020}>
    <div className="col-6 col-md-6 col-lg-3">
    <div className=" about-pics card-4">
     <img className="foto-stuff " src="../images/stuff_ccexpress.jpeg" path="/about"alt=""/> 
     <h3 className=' stuff-about text-center'>MIKAELA A.</h3>
    </div>
    </div>
    </Zoom>
    <br/>



      </div>   

   
</div>
</div>
    
  );
};

export default AboutStuff;
 