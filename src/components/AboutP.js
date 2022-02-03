import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './AboutP.css';
import 'bootstrap/dist/css/bootstrap.css';



function AboutP() {
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
    <div id="servicesAbout" className="servicesAbout-container flex ">
   <div className="decoraction-title"> <p className="decorAboutTitle text-center mt-5"> WHO WE ARE</p></div>
    
     <div className='row d-flex justify-content-center'>
       <div className='col-3 col-md-5 mx-auto informationServices-about'>"We make you look youthful, feel vibrant, 
       and smell awesome."</div>
       <div className='col-7 col-md-5 mx-auto informationServices-about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed. Donec diam leo, efficitur sit amet
         finibus acLorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.</div>
     </div>
     <div className='row d-flex justify-content-center'>
       <div className='col-10 mx-auto img-here mt-3'>
       {/* <img className="image-aboutP" src="../images/woman22.jpg"  path="/about" alt=""/> */}
       </div>
      
     </div>
   
    </div>
         
         
        );
      }
     
       
 
  
export default AboutP;
