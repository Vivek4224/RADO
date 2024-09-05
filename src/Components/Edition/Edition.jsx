import React from "react";
import "./Edition.css";
import { Edition_video } from "../../utils";

const Edition = () => {
  return (
    <div className="white_bg">
      <div className="content">
        <h1 className="e_title">
          True Square X Kunihiko Morinaga Special Edition
        </h1>
        <div className="e_subTitle">MAKING THE INVISIBLE VISIBLE</div>
        <div className="e_button">
          <button className=" e_btn">Discover more</button>
        </div>
      </div>
      <div className="e_video">
        <video src={Edition_video} loop autoPlay muted />
      </div>
    </div>
  );
};

export default Edition;
