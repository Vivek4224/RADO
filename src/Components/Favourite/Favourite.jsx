import React from "react";
import "./Favourite.css";
import Fav_Swiper from "../Fav_Swiper/Fav_Swiper";
import Slider from "../Fav_Swiper/Fav_Swiper";

const Favourite = () => {
  return (
    <div className="bg_color">
      <h2 className="title">Our Favourite Timepieces</h2>
      <Slider />
    </div>
  );
};

export default Favourite;
