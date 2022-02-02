import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./CardServices.scss";
import 'bootstrap/dist/css/bootstrap.min.css';



function CardServices() {
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

<div id="" className=" cardservices-box">
 <div className="sakura"> <p className="text-center sakura-text">WHAT WE OFFER</p> </div>
  <div className="blog-card "> 
    <div className="meta">
      <div className="photo">
      <img className="img-cs" src="../images/woman22.jpg"  path="/about" alt=""/>
      </div>
      <ul className="details">
        <li className="author"></li> 
        <li className="date">Excellent choice</li>
       
      </ul>
    </div>
    <div className="description">
      <h1>Service1</h1>
      {/* <h2>Opening a door to the future</h2> */}
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum 
      architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.

</p>
      <p className="read-more">
       
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div className="photo">
      <img className="img-cs" src="../images/m4.jpg"  path="/about" alt=""/>
      </div>
      <ul className="details">
        <li className="author"></li>
        <li className="date">Best offer</li>
       
      </ul>
    </div>
    <div className="description">
    <h1>Service2</h1>
      {/* <h2>Opening a door to the future</h2> */}
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum 
      architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
</p>
    </div>
  </div>

  <div className="blog-card">
    <div className="meta">
      <div className="photo">
      <img className="img-cs" src="../images/m6.jpg"  path="/about" alt=""/>
      </div>
      <ul className="details">
        <li className="author"></li>
        <li className="date">Come today</li>
       
      </ul>
    </div>
    <div className="description">
      <h1>Service3</h1>
      {/* <h2>Opening a door to the future</h2> */}
     
      <p className="read-more">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum 
      architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div className="photo">
      <img className="img-cs" src="../images/m1.jpg"  path="/about" alt=""/>
      </div>
      <ul className="details">
        <li className="author"></li>
        <li className="date">Order now</li>
       
      </ul>
    </div>
    <div className="description">
      <h1>Service4</h1>
      {/* <h2>Java is not the same as JavaScript</h2> */}
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum 
      architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className="read-more">
      
      </p>
    </div>
  </div>



</div>
     
     
    );
  }
 
   
  export default CardServices;
