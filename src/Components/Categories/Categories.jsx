import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="cate_main">
      <div className="first_line">
        <div className="Chronograph">
          <div className="ch_content">
            <h3>Chronograph watches</h3>
            <button>Discover more</button>
          </div>
        </div>
        <div className="Skeleton">
          <div className="ch_content">
            <h3>Skeleton watches</h3>
            <button>Discover more</button>
          </div>
        </div>
        <div className="Leather">
          <div className="cate_content">
            <div className="ch_content">
              <h3>Leather watches</h3>
              <button>Discover more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sec_line">
        <div className="Men">
          <div className="sec_content">
            <h3>Men's watches</h3>
            <button>Discover more</button>
          </div>
        </div>
        <div className="Women">
          <div className="sec_content">
            <h3>Women's watches</h3>
            <button>Discover more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
