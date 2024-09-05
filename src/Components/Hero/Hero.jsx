import React from "react";
import { Video } from "../../utils";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="video_sec">
        <video src={Video} autoPlay muted loop></video>
      </div>
      <div className="text_sec">
        <p>
          TRUE SQUARE AUTOMATIC OPEN HEART DIAMONDS LIMITED <br /> EDITION
        </p>
      </div>
      <div className="btn hero_btn">Discover more</div>
      <div className="down_arrow">
        <svg
          version="1.1"
          id="Down-Arrow-Heart"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 960 540"
          style={{ enableBackground: "new 0 0 960 540" }}
          xmlSpace="preserve"
        >
          <g>
            <path
              id="Left1st"
              className="path"
              style={{
                fill: "none",
                strokeWidth: "18",
                strokeMiterlimit: "10",
              }}
              d="M491.333,364L270,201c0,0,129.1-141.376,314.56,0 C700,289,790,236,790,236"
            />
          </g>
          <g>
            <path
              id="Right2nd"
              className="path"
              style={{ fill: "none", strokeWidth: "1", strokeMiterlimit: "10" }}
              d="M481,364.25L667,227c0,0-48.75-124.5-194-54"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
