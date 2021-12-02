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

  <div className="blog-card ">
    <div className="meta">
      <div className="photo">
      <img className="" src="../images/konsult.jpg"  path="/about" alt=""/>
      </div>
      <ul className="details">
        <li className="author"></li>
        <li className="date">Aug. 24, 2015</li>
       
      </ul>
    </div>
    <div className="description">
      <h1>Hälsokonsultation</h1>
      {/* <h2>Opening a door to the future</h2> */}
      <p> Inga allmänna råd fungerar lika bra för alla, därför behöver varje 
      person undersökas och behandlas individuellt för att uppnå bästa resultat.
       Som undersökningsmetod använder vi pulsdiagnostik, tungdiagnostik och vid behov 
       tittar vi på naglar, hy, ögon med flera. 

</p>
      <p className="read-more">
       
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div className="photo">
      <img className="" src="../images/konsult1.jpg"  path="/about" alt=""/>
      </div>
      <ul className="details">
        <li className="author"></li>
        <li className="date">July. 15, 2015</li>
       
      </ul>
    </div>
    <div className="description">
    <h1>Detoxprogram</h1>
      {/* <h2>Opening a door to the future</h2> */}
      <p> De flesta av oss tar hand om sina lägenheter och bilar mer än sin egen kropp.
       I yogan står det att kroppen ska ses som ett tempel för själen och därför ska 
       hållas rent och välfungerande. Vi behöver alla göra en storstädning, inte bara 
       på utsidan men också på insidan av våra kroppar. 
</p>
    </div>
  </div>

  <div className="blog-card">
    <div className="meta">
      <div className="photo"></div>
      <ul className="details">
        <li className="author"></li>
        <li className="date">Aug. 24, 2015</li>
       
      </ul>
    </div>
    <div className="description">
      <h1>Yoga</h1>
      {/* <h2>Opening a door to the future</h2> */}
     
      <p className="read-more">
      Yoga betyder mer än ett sätt att träna. Med en kombination av fysiska ställningar och
       rörelser, andningsövningar, avslappning och koncentrations- och medationstekniker är
        yoga ett verktyg för att skapa harmoni mellan kropp, själ och medvetande.
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div className="photo"></div>
      <ul className="details">
        <li className="author"></li>
        <li className="date">July. 15, 2015</li>
       
      </ul>
    </div>
    <div className="description">
      <h1>Mastering the Language</h1>
      <h2>Java is not the same as JavaScript</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className="read-more">
      
      </p>
    </div>
  </div>



</div>
     
     
    );
  }
 
   
  export default CardServices;
