import React from "react";
import { Master } from "../../utils";

const Materials = () => {
  return (
    <div className="main">
      <div className="img_main">
        <div className="content">
          <div
            className="e_subTitle"
            style={{ fontSize: "24px", fontWeight: "400" }}
          >
            Master of materials
          </div>
          <h1 className="e_title">The unconventional beauty of ceramic</h1>

          <div className="para">
            Hypoallergenic comfort, lightness and the very special sensation of
            ceramic against your skin – unmistakable, sensual and unique with
            Rado high-tech ceramic.
          </div>
          <div className="e_button">
            <button className=" e_btn">Discover the world of ceramics</button>
          </div>
        </div>
        <div className="e_img">
          <img src={Master} alt="warranty" height={500} />
        </div>
      </div>
    </div>
  );
};

export default Materials;
