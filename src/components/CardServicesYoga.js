import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./CardServicesYoga.css";
import 'bootstrap/dist/css/bootstrap.min.css';


 
function CardServicesYoga() {
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

<div id="" className=" cardservices2-box">
<div className="wrapper">
  <h1>Hälsokonsultation</h1>
  <div className="row">
			<div className="col-12  col-md-6 col-lg-4  d-flex justify-content-between mb-5 " ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" > 
					<img className="services-2" src="../images/cs1.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Klassisk yoga</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Yogaklass som baseras på klassisk yoga vilken är grunden till alla yogaskolor som finns idag.
						   Du är välkommen oavsett om du är en erfaren yogi eller nybörjare. Vi anpassar positionerna (asanas) 
						   till din kroppstyp, dina möjligheter och eventuella problem. Hos oss skadar yoga ingen utan används 
						   som terapi. Varje klass börjar vi med att fokusera på oss själva med hjälp av en kortare meditation 
						   och andningsövning. Sedan utövar vi asanas – yogaställningar, sedan fortsätter vi med andningsövningar
						    och avslutar alltid med en djupgående avslappning eller enklare meditation.  Om du är i speciellt behov 
							att praktisera yoga i egen takt, då rekommenderar vi att du väljer den privata varianten där vi sätter 
							upp ett program speciellt för dig som vi sedan kan justera enligt din utveckling och dina behov.

</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-12  col-md-6 col-lg-4  d-flex justify-content-between  mb-5 " ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" ><img className="services-2" src="../images/cs2.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Rocogged</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-12  col-md-6 col-lg-4  d-flex justify-content-between mb-5" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" > <img className="services-2" src="../images/cs3.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Strizzes</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-12  col-md-6 col-lg-4  d-flex justify-content-between mb-5" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" ><img className="services-2" src="../images/cs4.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Clossyo</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-12  col-md-6 col-lg-4  d-flex justify-content-between mb-5" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front"> <img className="services-2" src="../images/cs5.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Rendann</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-12  col-md-6 col-lg-4  d-flex justify-content-between mb-5" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" > <img className="services-2" src="../images/cs6.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Reflupper</p>
              <span>Lorem ipsum</span>
						</div>
					</div>

               

					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
 </div>



</div>
     
     
    );
  }
 
   
  export default CardServicesYoga;