import React from "react";
import "./Creation.css";
import Slider from "../Slider/Slider";

const Creation = () => {
  return (
    <div className="creation_main">
      <div className="c_heading">Explore our latest creations</div>
      <div className="c_para">
        Rado is known as the Master of Materials: from high-tech ceramic to
        sapphire crystal and <br /> diamonds to stainless steel, our innovative
        watches have no boundaries when it comes to <br /> design. Feel and
        discover the Rado difference!
      </div>
      <Slider />
    </div>
  );
};

export default Creation;
