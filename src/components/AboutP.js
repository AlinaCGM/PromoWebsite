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
    {/* <img className="first-hero" src="../images/woman22.jpg" path="/about" alt=""/> */}
      <div className='second-about-container'>
     <div className="decoraction-title"> <p className="decorAboutTitle text-center"> WHO WE ARE</p></div>

    <div class="row pictures justify-content-center ">
                <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about colum-img1  ">
                {/* <img className="  circle" src="../images/circle2.png" path="/about" alt=""/> */}
               </div> 
               <div class="col-12 col-md-6 col-lg-6 colum-about  ">
               <p className="informationServices-about ">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.
                Donec diam leo, efficitur sit amet finibus ac.</p>  
           
               </div>  
    </div>
    
    <div className="small-about col-12  colum-about ">
    {/* <img className=" circle" src="../images/circle2.png" path="/about" alt=""/> */}
    </div>
    
    
    
    <div class="row pictures justify-content-center ">
    <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about  ">
               <p className="informationServices-about"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.
                Donec diam leo, efficitur sit amet finibus ac.</p>
           
               </div> 
    
    
           
               <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about colum-img2  last">
                {/* <img className="  circle" src="../images/circle.png" path="/about" alt=""/>  */}
               </div> 
    </div>



    <div class="row pictures justify-content-center ">
                <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about colum-img3  ">
                 {/* <img className="  circle" src="../images/circle2.png" path="/about" alt=""/>  */}
               </div> 
               <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about  ">
               <p className="informationServices-about ">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.
                Donec diam leo, efficitur sit amet finibus ac.</p>  
           
               </div> 
    </div>
    
    
    <div className="small-about col-12  colum-about ">
    {/* <img className=" circle" src="../images/circle2.png" path="/about" alt=""/> */}
    </div>
    
    
    
    <div class="row pictures justify-content-center ">
    <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about  ">
               <p className="informationServices-about"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.
                Donec diam leo, efficitur sit amet finibus ac.</p>
           
               </div> 
    
    
           
               <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about colum-img4  last">
               {/* <img className=" circle" src="../images/circle.png" path="/about" alt=""/> */}
               </div> 
    </div>
    
    </div>
    </div>
         
         
        );
      }
     
       
 
  
export default AboutP;
