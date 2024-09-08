import React, { useState } from "react";
import "./Fav_Swiper.css"; // Ensure this CSS file is correctly linked
import {
  Watches1,
  Watches2,
  Watches3,
  Watches4,
  Watches5,
  Watches6,
  Watches7,
  Watches8,
  Watches9,
  Watches10,
  Watches11,
  Watches12,
  Logo,
} from "../../utils";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      backgroundColor: "#000000",
      title: "True Squere Automatic Skeleton",
      description1: "R27178205",
      description2: "38.0 mm, Automatic, 86g",
      description3: "₹ 2,43,000.00",
    },
    {
      backgroundColor: "#000000",
      title: "True Squere X Kunihiko Morinaga Special Edition",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 2,65,900.00",
    },
    {
      backgroundColor: "#000000",
      title: "Captain Cook High-Tech Ceramic Skeleton",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 4,37,700.00",
    },
    {
      backgroundColor: "#000000",
      title: "Captain Cook High-Tech Ceramic",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 4,04,400.00",
    },
    {
      backgroundColor: "#000000",
      title: "Captain Cook High-Tech Ceramic Skeleton",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 4,37,700.00",
    },
    {
      backgroundColor: "#000000",
      title: "True Squere Automatic Open Heart",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 3,10,200.00",
    },
    {
      backgroundColor: "#000000",
      title: "True Squere Automatic Skeleton",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 2,77,000.00",
    },
    {
      backgroundColor: "#000000",
      title: "Centrix Automatic Diamonds Open Heart",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 3,60,100.00",
    },
    {
      backgroundColor: "#000000",
      title: "Centrix Automatic Open Heart",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 2,49,300.00",
    },
    {
      backgroundColor: "#000000",
      title: "Anatom Automatic",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 3,32,400.00",
    },
    {
      backgroundColor: "#000000",
      title: "DiaStar Original Skeleton",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 2,20,900.00",
    },
    {
      backgroundColor: "#000000",
      title: "DiaMaster Thinline Automatic",
      description1: "R27086172",
      description2: "38.0 mm, Automatic, 115.2g",
      description3: "₹ 1,99,400.00",
    },
  ];

  const images = [
    Watches1,
    Watches2,
    Watches3,
    Watches4,
    Watches5,
    Watches6,
    Watches7,
    Watches8,
    Watches9,
    Watches10,
    Watches11,
    Watches12,
  ];

  const handleUpClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : slides.length - 1
    );
  };

  const handleDownClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < slides.length - 1 ? prevIndex + 1 : 0
    );
  };

  console.log("Current Index:", currentIndex); // Debugging statement

  return (
    <div className="slider-container">
      <div className="left-slide">
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ backgroundColor: slide.backgroundColor }}
            className={`slide ${
              currentIndex === index ? "active-slide" : "inactive-slide"
            }`}
          >
            <h1>{slide.title}</h1>
            <p>{slide.description1}</p>
            <p>{slide.description2}</p>
            <p className="price">
              <span>{slide.description3}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="right-slide">
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              // backgroundSize: "cover",
              // objectFit: "scale-down",
              // backgroundPosition: "center",
              width: "300px",
              height: "300px",
            }}
            className={`slide ${
              currentIndex === index ? "active-slide" : "inactive-slide"
            }`}
          />
        ))}
      </div>
      <div className="action-buttons">
        <button className="up-button" onClick={handleUpClick}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        <button className="down-button" onClick={handleDownClick}>
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
