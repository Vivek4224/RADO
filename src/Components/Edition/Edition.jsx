import React from "react";
import "./Edition.css";
import { Edition_video, Warranty } from "../../utils";

const Edition = () => {
  return (
    <div className="main">
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
      <div className="img_main">
        <div className="content">
          <h1 className="e_title">5-year International Warranty</h1>
          <div className="e_subTitle">
            As of 1st November 2023, all new Rado watches benefit from a 5-year
            International Warranty.
          </div>
          <div className="para">
            At Rado we have always made watches that are built to last – not
            just for a few years, but for a lifetime. We take care to use
            materials that are proven to resist wear and tear. High-tech ceramic
            cases and bracelets, Ceramos™, sapphire crystal, stainless steel and
            titanium all serve to enclose and protect the sophisticated Swiss
            movements that power our watches. We take great pride in the high
            quality, reliability and performance of our products, and are
            pleased to offer our customers additional support in the care and
            handling of their watches.
          </div>
          <div className="e_button">
            <button className=" e_btn">Discover more</button>
          </div>
        </div>
        <div className="e_img">
          <img src={Warranty} alt="warranty" height={500} />
        </div>
      </div>
    </div>
  );
};

export default Edition;
