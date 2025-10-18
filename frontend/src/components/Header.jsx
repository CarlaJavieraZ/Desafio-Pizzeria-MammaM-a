import React from "react";
import headerImg from "../assets/img/Header.jpg"; 
import "../assets/css/style.css"; 

const Header = () => {
  return (
    <div
      className="bgh text-center text-light pt-5"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="hcontent">
        <h1>¡Pizzería Mamma Mía!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  );
};

export default Header;