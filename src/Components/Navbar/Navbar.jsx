import React from "react";
import "./Navbar.css";
import { Location, Logo, Rupees, Search, User } from "../../utils";

const Navbar = () => {
  return (
    <div>
      <div className="upper">
        <div className="location">
          Store Locater <img src={Location} alt="" width={18} />
        </div>
        <div className="ruppes">
          India/English <img src={Rupees} alt="" width={20} />
        </div>
      </div>
      <div className="navbar">
        <div className="l_header">
          <ul>
            <li>
              <a href="#man">Man</a>
            </li>
            <li>
              <a href="#women">Women</a>
            </li>
            <li>
              <a href="#ceramic">Ceramic Watches</a>
            </li>
            <li>
              <a href="#feel">Feel Rado</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={Logo} alt="" width={120} />
        </div>
        <div className="r_header">
          <div className="lower">
            <div className="search">
              <img src={Search} alt="" width={25} />
            </div>
            <div className="user">
              <img src={User} alt="" width={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
