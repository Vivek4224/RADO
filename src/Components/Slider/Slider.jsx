import React from "react";
import "./Slider.css";
import { Slide1, Slide2, Slide3, Slide4 } from "../../utils";

const Slider = () => {
  return (
    <div className="container">
      <div className="carousel">
        <img className="item" src={Slide1} alt="Captain Cook" />
        <img className="item" src={Slide2} alt="True Squer" />
        <img className="item" src={Slide3} alt="Centrix Open" />
        <img className="item" src={Slide4} alt="View all" />
      </div>
    </div>
  );
};

export default Slider;
