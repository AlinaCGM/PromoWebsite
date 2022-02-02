import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./CardServicesMassage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from 'react-reveal/Slide';

 
function CardServicesMassage() {
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
	<Slide delay={400} bottom> 
<div id="" className=" cardservices3-box"> 
<div className="wrapper">
  <h1 className="sakura"> MASSAGE</h1>
  <div className="row">
  <div className="col-12  col-md-6 col-lg-4  d-flex justify-content-between mb-5" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" > <img className="services-2" src="../images/m11.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Acirassi</p>
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
					<div className="front" > <img className="services-2" src="../images/m22.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Acirassi</p>
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
					<div className="front" > <img className="services-2" src="../images/m33.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Sohanidd</p>
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
					<div className="front" > <img className="services-2" src="../images/m44.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Acirassi</p>
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
					<div className="front" > <img className="services-2" src="../images/m55.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Acirassi</p>
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
					<div className="front" > <img className="services-2" src="../images/m66.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Acirassi</p>
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
</Slide>
    );
  }
 
   
  export default CardServicesMassage;