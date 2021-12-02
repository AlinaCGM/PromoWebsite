import React, { Component } from "react";
import Slider from "react-slick";
import "./ImageSlide.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="slider-container ">
      <h3 className="title-slider p-5">Уроки йоги в нашей студии холистического здоровья в Стокгольме или онлайн</h3>
      <div className="image-slider ">
         
        <Slider {...settings}>
          <div>
          <img className="mx-auto img-y" src="../images/y1.jpg"  path="/about" alt=""/>
          </div>
          <div>
          <img className="mx-auto img-y" src="../images/y2.jpg"  path="/about" alt=""/>
          </div>
          <div>
          <img className="mx-auto img-y" src="../images/y3.jpg"  path="/about" alt=""/>
          </div>
          <div>
          <img className="mx-auto img-y" src="../images/y4.jpg"  path="/about" alt=""/>
          </div>
          <div>
          <img className="mx-auto img-y" src="../images/y5.jpg"  path="/about" alt=""/>
          </div>
          <div>
          <img className="mx-auto img-y" src="../images/y6.jpg"  path="/about" alt=""/>
          </div>
          <div>
          <img className="mx-auto img-y" src="../images/y7.jpg"  path="/about" alt=""/>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}